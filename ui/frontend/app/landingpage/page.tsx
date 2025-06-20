'use client'

import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import AnimatedListDemo from "../listdemo/page";
import { SparklesText } from "@/components/magicui/sparkles-text";

export default function LandingPage() {
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
        <div className="relative">
          {/* Main Content - Fixed to Viewport */}
          <div className="h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              {/* Animated Gradient Text */}
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-2 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] w-fit bg-black">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                🔥⛓️ <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <AnimatedGradientText className="text-sm font-medium bg-amber-100">
                  Introducing zkML Platform
                </AnimatedGradientText>
                <ChevronRight
                  className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </div>

              {/* Main Title */}
              <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                <LineShadowText className="italic text-white" shadowColor="white">
                  proof
                </LineShadowText>
                <LineShadowText className="italic text-blue-600" shadowColor="white">
                  Pal.
                </LineShadowText>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-white max-w-2xl mx-auto font-bold italic">
                Snug your models, prove with love — zkML on Mantle just got huggable.
              </p>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mt-4">
                A zkML model execution and verification hub powered by zero-knowledge proofs on the Mantle blockchain.
              </p>

              {/* Partner Logos */}
              <div className="flex items-center justify-center gap-6 mt-8 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] p-[2px] shadow-lg shadow-[#3b82f6]/30 group-hover:shadow-[#3b82f6]/50 transition-shadow">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="/dynamic.png"
                        alt="Dynamic Logo"
                        className="w-full h-full object-cover"
                        style={{ background: 'white' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#dc2626] to-[#ef4444] blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-[#dc2626] to-[#ef4444] p-[2px] shadow-lg shadow-[#dc2626]/30 group-hover:shadow-[#dc2626]/50 transition-shadow">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="/mantle.png"
                        alt="Mantle Logo"
                        className="w-full h-full object-cover"
                        style={{ background: '#dc2626' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Button */}
              <div className="group relative mx-auto flex items-center justify-center rounded-full px-3 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] w-fit bg-black">
                <a href="/connect" className="flex items-center">
                  <span
                    className={cn(
                      "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />
                  <AnimatedGradientText className="text-sm font-medium bg-amber-100">
                    Get started 🐻
                  </AnimatedGradientText>
                  <ChevronRight
                    className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Animated List Demo - Between Main Content and Video */}
          <div className="relative z-10 -mt-32 mb-32">
            <div className="max-w-4xl mx-auto">
              <AnimatedListDemo />
            </div>
          </div>

          {/* Hero Video Dialog - Below Viewport */}
          <div className="h-[80vh] flex items-start justify-center pt-8">
            <div className="max-w-4xl mx-auto">
              <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="top-in-bottom-out"
                videoSrc="https://www.youtube.com/embed/"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>

          {/* Steps Section */}
          <div className="relative py-20">
            {/* Background gradient for steps */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1b4b]/20 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="group relative mx-auto flex items-center justify-center rounded-full px-3 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] w-fit bg-black">
                  <span
                    className={cn(
                      "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
                    )}
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "destination-out",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "subtract",
                      WebkitClipPath: "padding-box",
                    }}
                  />
                  <AnimatedGradientText className="text-xl font-medium sm:text-medium bg-amber-100">
                    How it works 🛠️
                  </AnimatedGradientText>
                  <ChevronRight
                    className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  />
                </div>
                <p className="mt-4 text-2xl text-white font-bold italic">
                  Three simple steps to get started with zkML on Mantle
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 via-[#8b5cf6]/20 to-[#ec4899]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="text-sm text-white/60 font-medium">Step 1</div>
                    <h3 className="text-xl font-medium text-white">
                      Upload Your Model
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      Upload your machine learning model to ProofPal. We support various model formats and architectures.
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 via-[#ec4899]/20 to-[#3b82f6]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="text-sm text-white/60 font-medium">Step 2</div>
                    <h3 className="text-xl font-medium text-white">
                      Generate Proofs
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      Our platform automatically generates zero-knowledge proofs for your model's inferences using Halo2.
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ec4899]/20 via-[#3b82f6]/20 to-[#8b5cf6]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="text-sm text-white/60 font-medium">Step 3</div>
                    <h3 className="text-xl font-medium text-white">
                      Verify on Mantle 
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      Deploy your verified proofs on the Mantle blockchain for trustless verification and integration with smart contracts.
                    </p>
                    <div className="pt-2">
                      <span className="inline-flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="relative py-12">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 transform hover:scale-[1.02] transition-all duration-300 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/20 via-[#8b5cf6]/20 to-[#ec4899]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6">
                    {/* Profile Image */}
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/10">
                        <img
                          src="/rahul.jpeg"
                          alt="Rahul Shanmugam"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black"></div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-medium text-white">Rahul Shanmugam</h3>
                        <div className="flex items-center gap-1">
                          <div className="px-2 py-1 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/30">
                            <span className="text-xs font-medium text-[#3b82f6]">Founder</span>
                          </div>
                          <div className="px-2 py-1 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/30">
                            <span className="text-xs font-medium text-[#8b5cf6]">Developer</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-white/70 text-base leading-relaxed mb-3">
                        Pursuing Electronics and Communication Engineering Loyola ICAM College of Engineering and Technology. Want to be one of the greats. 
                      </p>
                      <div className="flex items-center gap-4">
                        <a
                          href="https://github.com/dumprahul"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        <a
                          href="https://x.com/rahulwin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/rahul-shanmugam-941a8126a/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/60 hover:text-white transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End of content */}
        </div>
      </div>
    </>
  );
} 