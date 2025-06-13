import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { spawn } from "child_process";

export const runtime = "nodejs";

async function runCommand(command: string, args: string[]) {
  return new Promise<{ success: boolean; output: string }>((resolve) => {
    const child = spawn(command, args);
    let output = "";
    let error = "";
    child.stdout.on("data", (data) => {
      output += data.toString();
    });
    child.stderr.on("data", (data) => {
      error += data.toString();
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve({ success: true, output });
      } else {
        resolve({ success: false, output: error || output });
      }
    });
  });
}

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming form data
    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Save the uploaded file as /tmp/input.json
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const tempDir = "/tmp";
    const inputPath = path.join(tempDir, "input.json");
    await fs.writeFile(inputPath, buffer);

    // Define all required paths
    const zkfilesDir = path.resolve(process.cwd(), "src/zkfiles");
    const compiledModelPath = path.join(zkfilesDir, "model.compiled");
    const settingsPath = path.join(zkfilesDir, "settings.json");
    const pkPath = path.join(zkfilesDir, "pk.key");
    const vkPath = path.join(zkfilesDir, "vk.key");
    const witnessPath = path.join(tempDir, "witness.json");
    const proofPath = path.join(tempDir, "proof.json");

    // Step 1: Generate Witness
    const genWitnessArgs = [
      "gen-witness",
      "-M", compiledModelPath,
      "-D", inputPath,
      "-O", witnessPath
    ];
    const witnessResult = await runCommand("ezkl", genWitnessArgs);
    if (!witnessResult.success) {
      return NextResponse.json({ error: "Failed to generate witness", details: witnessResult.output }, { status: 500 });
    }

    // Step 2: Generate Proof
    const proveArgs = [
      "prove",
      "-M", compiledModelPath,
      "-W", witnessPath,
      "--proof-path", proofPath,
      "--pk-path", pkPath
    ];
    const proveResult = await runCommand("ezkl", proveArgs);
    if (!proveResult.success) {
      return NextResponse.json({ error: "Failed to generate proof", details: proveResult.output }, { status: 500 });
    }

    // Step 3: Verify Proof
    const verifyArgs = [
      "verify",
      "--proof-path", proofPath,
      "--vk-path", vkPath,
      "--settings-path", settingsPath
    ];
    const verifyResult = await runCommand("ezkl", verifyArgs);

    // Read the generated proof
    let proof = null;
    try {
      const proofContent = await fs.readFile(proofPath, "utf-8");
      proof = JSON.parse(proofContent);
    } catch (e) {
      // ignore if proof file is missing or invalid
    }

    if (verifyResult.success) {
      return NextResponse.json({
        success: true,
        message: "Proof generated and verified successfully",
        proof,
        verification: verifyResult.output
      });
    } else {
      return NextResponse.json({
        success: false,
        error: "Verification failed",
        details: verifyResult.output,
        proof
      }, { status: 500 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
} 