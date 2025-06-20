"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../../components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  style?: React.CSSProperties;
}

let notifications = [
  {
    name: "Payment via contracts",
    description: "Mantle Blockchain",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "New zkML Model",
    description: "on ProofPal",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Proofs Generated",
    description: "from Halo2Circuit",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Proofs Verified",
    description: "on Verifier.sol",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time, style }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-500 ease-in-out",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "animate-pop-in-out"
      )}
      style={style}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function Page() {
  return (
    <div className="relative flex h-[500px] w-full flex-col overflow-hidden p-2">
      <style jsx global>{`
        @keyframes popInOut {
          0% {
            transform: scale(0) translateZ(0);
            opacity: 0;
          }
          20% {
            transform: scale(1.2) translateZ(100px);
            opacity: 1;
          }
          40% {
            transform: scale(1) translateZ(0);
            opacity: 1;
          }
          60% {
            transform: scale(1) translateZ(0);
            opacity: 1;
          }
          80% {
            transform: scale(0.8) translateZ(-100px);
            opacity: 0.5;
          }
          100% {
            transform: scale(0) translateZ(-200px);
            opacity: 0;
          }
        }
        .animate-pop-in-out {
          animation: popInOut 4s ease-in-out infinite;
        }
      `}</style>
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} style={{ animationDelay: `${idx * 0.5}s` }} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}
