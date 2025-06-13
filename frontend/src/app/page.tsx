"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] dark:from-[#18181b] dark:to-[#23272f] p-6">
      <header className="flex flex-col items-center gap-4 mb-10">
        <Image src="/favicon.ico" alt="ProofPal Logo" width={64} height={64} />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white text-center">ProofPal</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 text-center max-w-xl">
          A zkML model execution and verification hub powered by zero-knowledge proofs on Mantle blockchain.
        </p>
      </header>
      <main className="flex flex-col items-center gap-6">
        <button
          className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => alert('Coming soon!')}
        >
          Get Started
        </button>
        <div className="mt-8 text-gray-400 text-sm">Wallet connect coming soon</div>
      </main>
      <footer className="mt-auto py-6 text-gray-400 text-xs text-center w-full">
        &copy; {new Date().getFullYear()} ProofPal. All rights reserved.
      </footer>
    </div>
  );
}
