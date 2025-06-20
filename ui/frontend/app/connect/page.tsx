'use client';

import { DynamicEmbeddedWidget } from "@dynamic-labs/sdk-react-core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function ConnectPage() {
  const router = useRouter();
  const { user } = useDynamicContext();

  useEffect(() => {
    if (user) {
      router.push('/allmodels');
    }
  }, [user, router]);

  return (
    <>
      <SmoothCursor />
      <div className="min-h-screen relative overflow-hidden">
        {/* Neon Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(120,119,198,0.3),_rgba(255,255,255,0))]">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e1b4b]/90 to-[#4c1d95]/90" />
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3b82f6]/20 via-[#8b5cf6]/20 to-[#ec4899]/20 animate-pulse" />
          
          {/* Neon grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,_rgba(59,130,246,0.1)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(59,130,246,0.1)_1px,_transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3b82f6]/20 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#ec4899]/20 blur-3xl animate-pulse [animation-delay:1s]" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Section - Title and Description */}
              <div className="flex flex-col justify-center h-full">
                <div className="space-y-6">
                  <div className="relative">
                    <LineShadowText className="italic text-white text-7xl font-bold" shadowColor="white">
                      Connect.
                    </LineShadowText>
                    <div className="absolute -bottom-4 left-0 w-full">
                      <LineShadowText className="italic text-white/30 text-5xl font-bold" shadowColor="transparent">
                      🔗your wallet
                      </LineShadowText>
                    </div>
                  </div>
                  <AnimatedGradientText className="text-xl text-white/90 font-medium tracking-tight">
                    we support web2 users too, so sign up with Dynamic seamlessly
                  </AnimatedGradientText>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-white/80 group">
                      <div className="relative p-1.5 rounded-full bg-[#3b82f6]/20 group-hover:bg-[#3b82f6]/30 transition-all duration-300">
                        <div className="absolute inset-0 rounded-full border border-[#3b82f6] animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CheckCircle2 className="w-4 h-4 text-[#3b82f6] relative z-10 transform group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-lg font-medium group-hover:text-white transition-colors">Secure and private wallet connection</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 group">
                      <div className="relative p-1.5 rounded-full bg-[#8b5cf6]/20 group-hover:bg-[#8b5cf6]/30 transition-all duration-300">
                        <div className="absolute inset-0 rounded-full border border-[#8b5cf6] animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CheckCircle2 className="w-4 h-4 text-[#8b5cf6] relative z-10 transform group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-lg font-medium group-hover:text-white transition-colors">Multiple wallet options supported</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80 group">
                      <div className="relative p-1.5 rounded-full bg-[#ec4899]/20 group-hover:bg-[#ec4899]/30 transition-all duration-300">
                        <div className="absolute inset-0 rounded-full border border-[#ec4899] animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                        <CheckCircle2 className="w-4 h-4 text-[#ec4899] relative z-10 transform group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-lg font-medium group-hover:text-white transition-colors">Seamless integration with zkML</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Wallet Widget */}
              <div className="flex items-center justify-center">
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 w-full max-w-md">
                  <div className="widget-container">
                    <DynamicEmbeddedWidget background="with-border" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 