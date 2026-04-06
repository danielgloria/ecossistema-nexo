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
import NetworkSphere from "@/components/NetworkSphere";
import ToolCard from "@/components/ToolCard";
import EcosystemModal from "@/components/EcosystemModal";

const iconProps = { size: 40, strokeWidth: 1.75, color: "#1B2A4A" };

const tools = [
  { name: "NEXO REDATOR", icon: <PenTool {...iconProps} />, status: "active" as const, url: "https://www.nexosaude.med.br/", tooltip: "Documentos institucionais" },
  { name: "NEXO SBAR", icon: <ShieldCheck {...iconProps} />, status: "active" as const, url: "https://sbar.nexosaude.med.br/", tooltip: "Passagem de caso estruturada" },
  { name: "NEXO LÍDER", icon: <Users {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Gestão de equipes (em breve)" },
  { name: "NEXO VIGILÂNCIA", icon: <Eye {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Monitoramento e segurança (em breve)" },
  { name: "NEXO CUIDAR", icon: <HandHeart {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Assistência de enfermagem (em breve)" },
  { name: "NEXO CONFORMIDADE", icon: <ScrollText {...iconProps} />, status: "coming_soon" as const, url: "", tooltip: "Normas e regulação (em breve)" },
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

  const topRow = tools.slice(0, 3);
  const bottomRow = tools.slice(3, 6);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <DotGridBackground />

      {/* Headline */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-[28px] font-bold text-[#1B2A4A]">
          Ecossistema NEXO SAÚDE
        </h1>
        <p className="text-[16px] text-[#5A6878] mt-2 italic font-normal">
          Inteligência conectada para o cuidado em saúde.
        </p>
      </div>

      {/* Mobile layout */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 md:hidden">
        <CenterHub onClick={() => setEcosystemOpen(true)} />
        <div className="flex flex-col items-center gap-4">
          {tools.map((tool, i) => (
            <div key={tool.name} className="animate-[cardFadeIn_0.5s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
              <CardWithTooltip tool={tool} onClick={() => handleClick(tool)} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop 3x3 grid */}
      <div className="hidden md:grid relative z-10" style={{ gridTemplateColumns: 'repeat(3, auto)', gridTemplateRows: 'repeat(3, auto)', gap: '40px 32px', justifyItems: 'center', alignItems: 'center' }}>
        {/* Row 1 */}
        {topRow.map((tool, i) => (
          <div key={tool.name} className="animate-[cardFadeIn_0.5s_ease-out_both]" style={{ animationDelay: `${i * 100}ms` }}>
            <CardWithTooltip tool={tool} onClick={() => handleClick(tool)} />
          </div>
        ))}

        {/* Row 2: empty — logo — empty */}
        <div />
        <div className="flex items-center justify-center">
          <CenterHub onClick={() => setEcosystemOpen(true)} />
        </div>
        <div />

        {/* Row 3 */}
        {bottomRow.map((tool, i) => (
          <div key={tool.name} className="animate-[cardFadeIn_0.5s_ease-out_both]" style={{ animationDelay: `${(i + 3) * 100}ms` }}>
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
  <div className="relative flex items-center justify-center">
    {/* Halo — perfect circle */}
    <div
      className="absolute rounded-full bg-[#5BC5A7]/[0.08] animate-[haloPulse_4s_ease-in-out_infinite] pointer-events-none"
      style={{ width: 260, height: 260, aspectRatio: '1 / 1' }}
    />
    <button
      onClick={onClick}
      className="relative flex flex-col items-center gap-0 cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none z-10"
    >
      <div className="animate-[centralPulse_4s_ease-in-out_infinite]">
        <img
          src="/assets/logo-nexo-icon.png"
          alt="NEXO SAÚDE"
          className="w-[120px] h-[120px] object-contain"
        />
      </div>
      <h2
        className="uppercase text-[#1B2A4A] leading-none"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: 36, letterSpacing: "-1px" }}
      >
        NEXO
      </h2>
      <p
        className="uppercase text-[#1B2A4A] leading-none mt-1"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, fontSize: 16, letterSpacing: "6px" }}
      >
        SAÚDE
      </p>
    </button>
  </div>
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
