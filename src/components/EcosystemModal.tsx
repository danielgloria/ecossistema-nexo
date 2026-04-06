import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface EcosystemModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EcosystemModal = ({ open, onOpenChange }: EcosystemModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-0 shadow-2xl rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-primary text-xl font-bold">
            O Ecossistema Nexo Saúde
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm leading-relaxed pt-2">
            O Nexo Saúde é uma plataforma integrada de ferramentas digitais para
            gestão hospitalar. Nosso ecossistema conecta profissionais de saúde a
            soluções inteligentes de redação clínica, comunicação estruturada,
            governança, linhas de cuidado e muito mais — tudo em um único portal
            seguro e intuitivo.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="rounded-xl">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EcosystemModal;
