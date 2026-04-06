import { useState } from "react";
import { PenTool, ShieldCheck, Landmark, Lock, Stethoscope, Workflow } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogFooter, DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import DotGridBackground from "@/components/DotGridBackground";
import NetworkSphere from "@/components/NetworkSphere";
import ToolCard from "@/components/ToolCard";

const tools = [
  { name: "NEXO REDATOR", icon: <PenTool size={36} />, status: "active" as const, description: "Ferramenta de redação inteligente para documentos clínicos e relatórios hospitalares." },
  { name: "NEXO SBAR", icon: <ShieldCheck size={36} />, status: "active" as const, description: "Comunicação estruturada SBAR para passagem de plantão e handoff clínico." },
  { name: "NEXO GOVERNANÇA", icon: <Landmark size={36} />, status: "coming_soon" as const, description: "" },
  { name: "NEXO CUIDADO", icon: <Lock size={36} />, status: "coming_soon" as const, description: "" },
  { name: "NEXO LINHA DE CUIDADO", icon: <Stethoscope size={36} />, status: "coming_soon" as const, description: "" },
  { name: "NEXO TRILHA DE ATENDIMENTO", icon: <Workflow size={36} />, status: "coming_soon" as const, description: "" },
];

// 6 cards equally spaced on a circle (radius 280px from center)
const RADIUS = 280;
const angleOffsets = [-90, -30, 30, 90, 150, 210]; // degrees, starting from top

const Index = () => {
  const [dialogTool, setDialogTool] = useState<typeof tools[0] | null>(null);

  const handleClick = (tool: typeof tools[0]) => {
    if (tool.status === "active") {
      setDialogTool(tool);
    } else {
      toast("Esta ferramenta estará disponível em breve.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotGridBackground />

      {/* Mobile layout */}
      <div className="relative z-10 flex flex-col items-center gap-8 p-6 lg:hidden">
        <div className="flex flex-col items-center gap-2">
          <NetworkSphere />
          <h1 className="text-5xl font-extrabold uppercase text-primary tracking-tight">NEXO</h1>
          <p className="text-2xl font-normal uppercase text-primary tracking-[0.25em]">SAÚDE</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} onClick={() => handleClick(tool)} />
          ))}
        </div>
      </div>

      {/* Desktop orbital layout */}
      <div className="hidden lg:block relative" style={{ width: RADIUS * 2 + 200, height: RADIUS * 2 + 200 }}>
        {/* Center logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
          <NetworkSphere />
          <h1 className="text-5xl font-extrabold uppercase text-primary tracking-tight">NEXO</h1>
          <p className="text-2xl font-normal uppercase text-primary tracking-[0.25em]">SAÚDE</p>
        </div>

        {/* Orbital cards on a perfect circle */}
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

      {/* Dialog for active tools */}
      <Dialog open={!!dialogTool} onOpenChange={(open) => !open && setDialogTool(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary">{dialogTool?.name}</DialogTitle>
            <DialogDescription>
              {dialogTool?.description || "Descrição da ferramenta aqui."}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button variant="outline">Fechar</Button>
            </DialogClose>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Acessar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
