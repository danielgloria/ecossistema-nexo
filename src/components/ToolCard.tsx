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
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 rounded-2xl bg-card p-5 w-[160px] shadow-md",
        "transition-all duration-300 cursor-pointer border border-transparent",
        "hover:-translate-y-1 hover:shadow-lg",
        isActive && "hover:border-secondary",
        !isActive && "opacity-75 hover:opacity-100"
      )}
    >
      <div className="text-primary">{icon}</div>
      <span className="text-xs font-bold uppercase tracking-wide text-primary text-center leading-tight">
        {name}
      </span>
      {!isActive && (
        <span className="text-[11px] text-muted-foreground">(EM BREVE)</span>
      )}
    </button>
  );
};

export default ToolCard;
