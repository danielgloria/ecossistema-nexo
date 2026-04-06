import { cn } from "@/lib/utils";

interface ToolCardProps {
  name: string;
  icon: React.ReactNode;
  status: "active" | "coming_soon";
  onClick?: () => void;
}

const ToolCard = ({ name, icon, status, onClick }: ToolCardProps) => {
  const isActive = status === "active";

  return (
    <button
      onClick={isActive ? onClick : onClick}
      className={cn(
        "relative flex flex-col items-center gap-2 rounded-2xl bg-white p-5 w-[160px]",
        "shadow-[0_2px_8px_0_rgba(30,41,59,0.18)] border border-slate-100",
        "transition-all duration-300 group",
        isActive && [
          "cursor-pointer",
          "hover:-translate-y-0.5 hover:shadow-[0_4px_16px_0_rgba(30,41,59,0.22)]",
        ],
        !isActive && "opacity-60 cursor-not-allowed"
      )}
    >
      {/* Green status dot for active cards */}
      {isActive && (
        <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#5BC5A7] animate-[statusPulse_2s_ease-in-out_infinite]" />
      )}

      <div className="text-[#1B2A4A] transition-colors duration-300 group-hover:text-[#5BC5A7] [&_svg]:stroke-current [&_svg]:transition-colors [&_svg]:duration-300">
        {icon}
      </div>
      <span className="text-xs font-bold uppercase tracking-wide text-primary text-center leading-tight">
        {name}
      </span>
      {!isActive && (
        <span className="inline-block text-[11px] text-muted-foreground bg-muted px-3 py-1 rounded-full font-medium">
          EM BREVE
        </span>
      )}
    </button>
  );
};

export default ToolCard;
