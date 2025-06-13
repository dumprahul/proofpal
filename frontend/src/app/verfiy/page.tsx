"use client";
import { useRef, useState } from "react";

const demoJson = {
  input_data: [
    [250.0, 45.0, 80.0, 90.0, 30.0],
  ],
};

export default function VerifyPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [jsonPreview, setJsonPreview] = useState<any>(demoJson);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file || null);
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setJsonPreview(json);
        setError(null);
      } catch (err) {
        setError("Invalid JSON file.");
        setJsonPreview(null);
      }
    };
    reader.readAsText(file);
  };

  const handleVerify = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      if (!file) {
        setError("Please upload a proof JSON file first.");
        setLoading(false);
        return;
      }
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/verify", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setResult(data.output || "Verification successful!");
      } else {
        setError(data.error || "Verification failed.");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#18181b] dark:to-[#23272f] p-6">
      <div className="bg-white dark:bg-[#23272f] rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">Verify Input JSON</h2>
        <input
          type="file"
          accept="application/json"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <div className="bg-gray-100 dark:bg-gray-800 rounded p-4 text-xs font-mono overflow-x-auto max-h-48">
          <div className="mb-2 text-gray-500 text-xs">Preview:</div>
          <pre className="whitespace-pre-wrap break-all text-gray-800 dark:text-gray-200">
            {jsonPreview ? JSON.stringify(jsonPreview, null, 2) : "No file selected."}
          </pre>
        </div>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          className="w-full px-6 py-2 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition disabled:opacity-60"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
        {result && (
          <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded p-3 text-xs mt-2 whitespace-pre-wrap">
            {result}
          </div>
        )}
      </div>
    </div>
  );
} 