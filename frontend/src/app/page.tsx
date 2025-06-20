import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0f1021] overflow-hidden">
      {/* Neon grid background effect */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#1a1a40] via-[#23235b] to-[#0f1021]">
        {/* Optionally add a subtle grid or glow here with CSS or SVG */}
        <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.07)_0_1px,transparent_1px_40px),repeating-linear-gradient(180deg,rgba(255,255,255,0.07)_0_1px,transparent_1px_40px)]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center gap-8 w-full max-w-3xl px-4 py-16">
        {/* Deployed on Mantle (shiny text) */}
        <div className="flex flex-col items-center gap-2">
          <AnimatedGradientText
            colorFrom="rgba(255,255,255,0.8)"
            colorTo="rgba(255,255,255,1)"
            speed={2}
            className="text-base sm:text-lg md:text-xl mb-2"
          >
            Deployed on Mantle
          </AnimatedGradientText>
          {/* ProofPal (sparkles text) */}
          <SparklesText
            className="text-center text-white text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2"
            colors={{ first: "white", second: "#eeeeee" }}
            sparklesCount={18}
          >
            ProofPal
          </SparklesText>
        </div>
        <p className="text-center text-lg sm:text-xl text-white/90 max-w-xl mt-2">
          ProofPal is a decentralized, zero-knowledge ML platform—your open-source, trustless alternative to HuggingFace. Share, verify, and deploy ML models with privacy and transparency.
        </p>
        <div className="flex flex-col items-center gap-4">
          <ShimmerButton
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            shimmerDuration="3s"
            borderRadius="100px"
            background="rgba(255,255,255,0.05)"
            className="text-lg font-semibold px-8 py-3 border border-white/10 shadow-lg hover:shadow-white/20 hover:scale-105 transition-transform"
          >
            <span className="text-white">Get Started</span>
          </ShimmerButton>
          <span className="text-xs text-white/70 mt-1">Open-source. Trustless. For everyone.</span>
        </div>
      </main>
      <footer className="relative z-10 w-full flex justify-center py-6 text-white/60 text-sm">
        &copy; {new Date().getFullYear()} ProofPal. Built for the future of decentralized AI.
      </footer>
    </div>
  );
}
