import { useState } from "react";
import { PenTool, ShieldCheck, Landmark, Lock, Stethoscope, Workflow } from "lucide-react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DotGridBackground from "@/components/DotGridBackground";
import NetworkSphere from "@/components/NetworkSphere";
import ToolCard from "@/components/ToolCard";
import EcosystemModal from "@/components/EcosystemModal";

const tools = [
  { name: "NEXO REDATOR", icon: <PenTool size={36} />, status: "active" as const, url: "https://nexo-redator.example.com" },
  { name: "NEXO SBAR", icon: <ShieldCheck size={36} />, status: "active" as const, url: "https://nexo-sbar.example.com" },
  { name: "NEXO GOVERNANÇA", icon: <Landmark size={36} />, status: "coming_soon" as const, url: "" },
  { name: "NEXO CUIDADO", icon: <Lock size={36} />, status: "coming_soon" as const, url: "" },
  { name: "NEXO LINHA DE CUIDADO", icon: <Stethoscope size={36} />, status: "coming_soon" as const, url: "" },
  { name: "NEXO TRILHA DE ATENDIMENTO", icon: <Workflow size={36} />, status: "coming_soon" as const, url: "" },
];

const RADIUS = 250;
const angleOffsets = [-90, -30, 30, 90, 150, 210];

const Index = () => {
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  const handleClick = (tool: typeof tools[0]) => {
    if (tool.status === "active" && tool.url) {
      window.open(tool.url, "_blank", "noopener,noreferrer");
    }
  };

  const CenterHub = () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => setEcosystemOpen(true)}
          className="relative flex flex-col items-center gap-1 cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
        >
          <div className="absolute w-96 h-96 bg-[#52c49c]/10 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <NetworkSphere />
          <h1 className="text-5xl font-extrabold uppercase text-primary tracking-tight">NEXO</h1>
          <p className="text-2xl font-normal uppercase text-primary tracking-[0.25em]">SAÚDE</p>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-card text-primary text-sm shadow-lg border-border/50 px-4 py-2 rounded-xl">
        Clique para saber mais sobre o ecossistema Nexo
      </TooltipContent>
    </Tooltip>
  );

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotGridBackground />

      {/* Mobile layout */}
      <div className="relative z-10 flex flex-col items-center gap-8 p-6 lg:hidden">
        <CenterHub />
        <div className="grid grid-cols-2 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} onClick={() => handleClick(tool)} />
          ))}
        </div>
      </div>

      {/* Desktop orbital layout */}
      <div className="hidden lg:block relative" style={{ width: RADIUS * 2 + 200, height: RADIUS * 2 + 200 }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <CenterHub />
        </div>

        {tools.map((tool, i) => {
          const angle = (angleOffsets[i] * Math.PI) / 180;
          const x = Math.cos(angle) * RADIUS;
          const y = Math.sin(angle) * RADIUS;
          return (
            <div
              key={tool.name}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <ToolCard {...tool} onClick={() => handleClick(tool)} />
            </div>
          );
        })}
      </div>

      <EcosystemModal open={ecosystemOpen} onOpenChange={setEcosystemOpen} />
    </div>
  );
};

export default Index;
