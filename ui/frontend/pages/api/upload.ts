import { IncomingForm, File as FormidableFile } from 'formidable';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const runCommand = (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Command failed:', command);
        console.error('Error:', error);
        console.error('Stderr:', stderr);
        console.error('Stdout:', stdout);
        reject(`Command failed: ${command}\nError: ${error}\nStderr: ${stderr}\nStdout: ${stdout}`);
      } else {
        console.log('Command succeeded:', command);
        console.log('Output:', stdout);
        resolve(stdout);
      }
    });
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const uploadDir = path.join(process.cwd(), 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ error: `Error parsing the file: ${err}` });
    }

    if (!files.file || !Array.isArray(files.file) || files.file.length === 0) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const inputFile = (files.file[0] as FormidableFile).filepath;
    const modelPath = path.join(process.cwd(), 'ezkl', 'network.onnx');
    const compiledModelPath = path.join(process.cwd(), 'ezkl', 'model.compiled');
    const settingsPath = path.join(process.cwd(), 'ezkl', 'settings.json');
    const pkPath = path.join(process.cwd(), 'ezkl', 'pk.key');
    const vkPath = path.join(process.cwd(), 'ezkl', 'vk.key');
    const witnessPath = path.join(uploadDir, 'witness.json');
    const proofPath = path.join(uploadDir, 'proof.json');

    // Log file paths for debugging
    console.log('File paths:');
    console.log('Input file:', inputFile);
    console.log('Model path:', modelPath);
    console.log('Compiled model path:', compiledModelPath);
    console.log('Settings path:', settingsPath);
    console.log('PK path:', pkPath);
    console.log('VK path:', vkPath);
    console.log('Witness path:', witnessPath);
    console.log('Proof path:', proofPath);

    try {
      // Step 1: Generate Witness
      const genWitnessCommand = `ezkl gen-witness -M ${compiledModelPath} -D ${inputFile} -O ${witnessPath}`;
      console.log('Running command:', genWitnessCommand);
      await runCommand(genWitnessCommand);

      // Step 2: Generate Proof
      const proveCommand = `ezkl prove -M ${compiledModelPath} -W ${witnessPath} --proof-path ${proofPath} --pk-path ${pkPath}`;
      console.log('Running command:', proveCommand);
      await runCommand(proveCommand);

      // Verify all required files exist before verification
      const requiredFiles = {
        'Verification Key': vkPath,
        'Proof': proofPath,
        'Settings': settingsPath
      };

      const missingFiles = Object.entries(requiredFiles)
        .filter(([_, path]) => !fs.existsSync(path))
        .map(([name]) => name);

      if (missingFiles.length > 0) {
        return res.status(400).json({ 
          error: 'Missing required files',
          details: `Missing files: ${missingFiles.join(', ')}`
        });
      }

      // Step 3: Verify Proof
      const verifyCommand = `ezkl verify --proof-path ${proofPath} --vk-path ${vkPath} --settings-path ${settingsPath}`;
      console.log('Running command:', verifyCommand);
      const verifyOutput = await runCommand(verifyCommand);

      // Read the generated proof
      const proof = fs.readFileSync(proofPath, 'utf-8');

      return res.status(200).json({ 
        success: true,
        message: 'Proof generated and verified successfully',
        proof: JSON.parse(proof),
        verification: verifyOutput
      });
    } catch (error) {
      console.error('Error executing commands:', error);
      const errorMessage = error instanceof Error ? error.message : String(error);
      return res.status(500).json({ 
        success: false,
        error: 'Failed to process zkML commands',
        details: errorMessage
      });
    }
  });
};

export default handler; 