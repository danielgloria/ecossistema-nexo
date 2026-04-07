import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface EcosystemModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EcosystemModal = ({ open, onOpenChange }: EcosystemModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[620px] w-[90%] border-0 shadow-[0_24px_64px_rgba(15,24,41,0.18)] rounded-[20px] p-0 gap-0 bg-white overflow-hidden animate-in slide-in-from-bottom-5 duration-400"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <VisuallyHidden>
          <DialogTitle>Ecossistema NEXO SAÚDE</DialogTitle>
        </VisuallyHidden>

        <div className="px-14 pt-14 pb-12 text-center">
          {/* Badge */}
          <span
            className="inline-block text-[11px] font-semibold uppercase px-4 py-1.5 rounded-full mb-6"
            style={{
              letterSpacing: '3px',
              color: '#5BC5A7',
              background: 'rgba(91, 197, 167, 0.1)',
            }}
          >
            Ecossistema Integrado
          </span>

          {/* Headline */}
          <h2
            className="font-extrabold text-[32px] leading-[1.25] mb-6"
            style={{ color: '#1B2A4A', letterSpacing: '-0.5px' }}
          >
            Inteligência conectada para o<br />
            <span style={{ color: '#5BC5A7' }}>cuidado em saúde</span>
          </h2>

          {/* Description */}
          <p
            className="text-[15px] font-normal leading-[1.7] mb-9"
            style={{ color: '#5A6878' }}
          >
            <strong style={{ color: '#1B2A4A', fontWeight: 700 }}>NEXO SAÚDE</strong> é um
            ecossistema integrado que conecta dados, processos e pessoas em uma única
            plataforma — transformando a complexidade hospitalar em decisões clínicas de excelência.
          </p>

          {/* Pillars */}
          <div
            className="flex items-center justify-center gap-8 py-6 mb-8"
            style={{ borderTop: '1px solid #E8EBF0', borderBottom: '1px solid #E8EBF0' }}
          >
            <div className="flex-1 text-center">
              <div className="font-black text-4xl leading-none" style={{ color: '#1B2A4A' }}>06</div>
              <div
                className="text-[11px] font-medium uppercase mt-1.5"
                style={{ color: '#5A6878', letterSpacing: '1px' }}
              >
                Ferramentas integradas
              </div>
            </div>

            <div className="w-px h-10" style={{ background: '#E8EBF0' }} />

            <div className="flex-1 text-center">
              <div className="font-black text-4xl leading-none" style={{ color: '#1B2A4A' }}>01</div>
              <div
                className="text-[11px] font-medium uppercase mt-1.5"
                style={{ color: '#5A6878', letterSpacing: '1px' }}
              >
                Plataforma única
              </div>
            </div>

            <div className="w-px h-10" style={{ background: '#E8EBF0' }} />

            <div className="flex-1 text-center">
              <div className="font-black text-4xl leading-none" style={{ color: '#1B2A4A' }}>∞</div>
              <div
                className="text-[11px] font-medium uppercase mt-1.5"
                style={{ color: '#5A6878', letterSpacing: '1px' }}
              >
                Possibilidades clínicas
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => onOpenChange(false)}
            className="text-sm font-bold uppercase tracking-wider text-white px-10 py-4 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(91,197,167,0.3)]"
            style={{
              background: '#1B2A4A',
              letterSpacing: '1px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#5BC5A7')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1B2A4A')}
          >
            Conhecer o ecossistema
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EcosystemModal;
