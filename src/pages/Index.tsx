import { useState } from "react";
import { PenTool, ShieldCheck, Users, ScrollText, HandHeart, Eye } from "lucide-react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import DotGridBackground from "@/components/DotGridBackground";
import logoIcon from "@/assets/logo-nexo-icon.png";
import ToolCard from "@/components/ToolCard";
import EcosystemModal from "@/components/EcosystemModal";

const iconProps = { size: 40, strokeWidth: 1.75, color: "#1B2A4A" };

const tools = [
  { name: "NEXO REDATOR", icon: <PenTool {...iconProps} />, status: "active" as const, url: "https://www.nexosaude.med.br/", tooltip: "Documentos institucionais", top: 30, left: 360 },
  { name: "NEXO SBAR", icon: <ShieldCheck {...iconProps} />, status: "active" as const, url: "https://sbar.nexosaude.med.br/", tooltip: "Passagem de caso estruturada", top: 220, left: 680 },
  { name: "NEXO LÍDER", icon: <Users {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Gestão de equipes (em breve)", top: 590, left: 680 },
  { name: "NEXO CONFORMIDADE", icon: <ScrollText {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Normas e regulação (em breve)", top: 680, left: 360 },
  { name: "NEXO CUIDAR", icon: <HandHeart {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Assistência de enfermagem (em breve)", top: 590, left: 40 },
  { name: "NEXO VIGILÂNCIA", icon: <Eye {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Monitoramento e segurança (em breve)", top: 220, left: 40 },
];

const Index = () => {
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  const handleClick = (tool: typeof tools[0]) => {
    if (tool.status === "active" && tool.url) {
      window.open(tool.url, "_blank", "noopener,noreferrer");
    } else if (tool.status === "coming_soon") {
      toast.info(`${tool.name} estará disponível em breve!`);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <DotGridBackground />

      {/* Headline */}
      <div className="relative z-10 text-center mb-8">
        <h1 className="text-[28px] font-bold text-[#1B2A4A]">Ecossistema NEXO SAÚDE</h1>
        <p className="text-[16px] text-[#5A6878] mt-2 italic font-normal">Inteligência conectada para o cuidado em saúde.</p>
      </div>

      {/* Mobile layout */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 md:hidden">
        <CenterHub onClick={() => setEcosystemOpen(true)} />
        <div className="flex flex-col items-center gap-4 w-full">
          {tools.map((tool, i) => (
            <div key={tool.name} className="w-[90%] max-w-[320px] animate-[cardFadeIn_0.5s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
              <CardWithTooltip tool={tool} onClick={() => handleClick(tool)} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop orbital layout */}
      <div className="hidden md:block relative z-10" style={{ width: 700, height: 700 }}>
        {/* Dashed orbit ring */}
        <svg
          className="absolute inset-0 pointer-events-none animate-[orbitSpin_60s_linear_infinite] motion-reduce:animate-none"
          width="700" height="700" viewBox="0 0 700 700"
        >
          <circle cx="350" cy="350" r="280" fill="none" stroke="#1B2A4A" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
        </svg>

        {/* Central logo */}
        <div className="absolute z-10" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 220, textAlign: 'center' }}>
          <CenterHub onClick={() => setEcosystemOpen(true)} />
        </div>

        {/* Orbital cards */}
        {tools.map((tool, i) => (
          <div
            key={tool.name}
            className="absolute z-[3] animate-[cardFadeIn_0.5s_ease-out_both]"
            style={{ top: tool.top, left: tool.left, width: 180, animationDelay: `${i * 100}ms` }}
          >
            <CardWithTooltip tool={tool} onClick={() => handleClick(tool)} />
          </div>
        ))}
      </div>

      <footer className="absolute bottom-6 left-0 right-0 text-center text-xs text-slate-400 z-10">
        Nexo Saúde © 2026 • Ecossistema Integrado
      </footer>

      <EcosystemModal open={ecosystemOpen} onOpenChange={setEcosystemOpen} />
    </div>
  );
};

const CenterHub = ({ onClick }: { onClick: () => void }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center gap-0 cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
  >
    <div className="animate-[centralPulse_4s_ease-in-out_infinite]">
      <img src={logoIcon} alt="NEXO SAÚDE" className="w-[160px] h-[160px] object-contain" />
    </div>
    <h2 className="uppercase text-[#1B2A4A] leading-none mt-3" style={{ fontWeight: 900, fontSize: 52, letterSpacing: "-1px" }}>NEXO</h2>
    <p className="uppercase text-[#1B2A4A] leading-none mt-1" style={{ fontWeight: 300, fontSize: 22, letterSpacing: "8px" }}>SAÚDE</p>
  </button>
);

const CardWithTooltip = ({ tool, onClick }: { tool: typeof tools[0]; onClick: () => void }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <div>
          <ToolCard {...tool} onClick={onClick} />
        </div>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="bg-white text-[#1B2A4A] text-sm shadow-lg border border-slate-200 px-4 py-2 rounded-xl">
        {tool.tooltip}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default Index;
