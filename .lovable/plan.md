
## Nexo Saúde Ecosystem Landing Page

### Overview
Single-page landing page for the Nexo Saúde digital healthcare ecosystem — a portal hub with an orbital layout of 6 tool cards around a central logo/network sphere.

### Structure
1. **Background**: Light gray (#F5F5F5) with subtle hexagonal geometric pattern in semi-transparent gray (#E8E8E8, 30% opacity) as SVG background
2. **Central Logo**: SVG network sphere (interconnected nodes in dark blue #1B2A4A and teal #5BC5A7), with "NEXO" (bold 48px) and "SAÚDE" (light 28px, letter-spacing 4px) below
3. **6 Orbital Tool Cards** arranged around center:
   - **NEXO REDATOR** (top-left, active) — PenTool icon
   - **NEXO SBAR** (top-right, active) — ShieldCheck icon
   - **NEXO GOVERNANÇA** (mid-left, coming soon) — Landmark icon
   - **NEXO SEGURANÇA** (mid-right, coming soon) — Lock icon
   - **NEXO LINHA DE CUIDADO** (bottom-left, coming soon) — Stethoscope icon
   - **NEXO TRILHA DE ATENDIMENTO** (bottom-right, coming soon) — Workflow icon

### Card Component
- Reusable `ToolCard` with props: name, icon, status ('active' | 'coming_soon'), onClick
- White background, rounded corners (16px), soft shadow, ~160px width
- Hover: translateY(-4px) + deeper shadow; active cards get teal border on hover
- Coming soon cards: 75% opacity, returns to full on hover

### Interactivity
- **Active cards** (Redator, SBAR): Click opens a Dialog with tool name, placeholder description, "Acessar" button (teal #5BC5A7), and "Fechar" button
- **Coming soon cards**: Click shows toast notification "Esta ferramenta estará disponível em breve."

### Responsive
- Desktop (>1024px): Full orbital layout with absolute positioning
- Tablet (768–1024px): Smaller orbital radius
- Mobile (<768px): Logo on top, cards in 2×3 grid below

### Design Tokens
- Colors: dark blue #1B2A4A, teal #5BC5A7, bg #F5F5F5, cards #FFFFFF, muted text #9E9E9E
- Font: Inter (already available), bold 800 for "NEXO", 400 for "SAÚDE"
- Lucide React icons throughout

### Files to Create/Modify
- `src/pages/Index.tsx` — Main landing page with orbital layout + hex background
- `src/components/ToolCard.tsx` — Reusable card component
- `src/components/NetworkSphere.tsx` — SVG network globe
- `src/components/HexBackground.tsx` — Hexagonal pattern background
- `src/index.css` — Custom color variables
