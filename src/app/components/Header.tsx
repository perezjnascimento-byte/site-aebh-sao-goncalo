import { useState } from "react";
import { Link, useLocation } from "react-router";
import { AebhLogoReal } from "./AebhLogoReal";
import { Menu, X, Instagram, Facebook, Phone, ChevronDown } from "lucide-react";

interface HeaderProps {
  altoContraste: boolean;
  setAltoContraste: (v: boolean) => void;
  tamanhoFonte: number;
  setTamanhoFonte: (v: number) => void;
}

function AccessibilityIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="4" r="2" />
      <path d="M19 9h-5l-1-2H9a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1l1 4h2l-1-4h3l1 4h2l-1-4.2A3 3 0 0 0 19 13V9z" />
    </svg>
  );
}

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/doencas", label: "Espinha Bífida" },
  { to: "/blog", label: "Blog & Eventos" },
  { to: "/voluntario", label: "Voluntariado" },
  { to: "/contato", label: "Contato" },
];

export function Header({ altoContraste, setAltoContraste, tamanhoFonte, setTamanhoFonte }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const location = useLocation();

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ── SUPER-HEADER: barra fina institucional ── */}
      <div
        className="hidden md:block"
        style={{ backgroundColor: altoContraste ? "#000" : "#1E1B4B" }}
      >
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">

          {/* Acessibilidade */}
          <div className="flex items-center gap-1">
            <span
              className="flex items-center gap-1.5 text-[11px] font-medium mr-2 px-2 py-0.5 rounded"
              style={{ color: "#F5A623", backgroundColor: "rgba(245,166,35,0.12)" }}
            >
              <AccessibilityIcon />
              Acessibilidade
            </span>
            {[
              { label: "Alto Contraste", action: () => setAltoContraste(!altoContraste), active: altoContraste },
              { label: "A+", action: () => setTamanhoFonte(Math.min(tamanhoFonte + 2, 24)), active: false },
              { label: "A−", action: () => setTamanhoFonte(Math.max(tamanhoFonte - 2, 14)), active: false },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                className="text-[11px] px-2 py-0.5 rounded transition"
                style={{
                  color: btn.active ? "#F5A623" : "rgba(255,255,255,0.75)",
                  backgroundColor: btn.active ? "rgba(245,166,35,0.15)" : "transparent",
                  border: `1px solid ${btn.active ? "rgba(245,166,35,0.4)" : "rgba(255,255,255,0.15)"}`,
                }}
                aria-label={btn.label}
                aria-pressed={btn.active}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Contato + redes */}
          <div className="flex items-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5521986643495&text=Ol%C3%A1!%20Eu%20gostaria%20de%20conhecer%20%2F%20contribuir%20com%20a%20AEBH!"
              className="flex items-center gap-1.5 text-[11px] transition hover:text-white"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <Phone size={11} />
              +55 21 98664-3495
            </a>
            <div className="w-px h-3" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            {[
              { href: "https://www.instagram.com/aebh.sg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D", label: "Instagram", Icon: Instagram },
              { href: "https://www.facebook.com/aebh.rj/", label: "Facebook", Icon: Facebook },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition hover:text-white"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN NAV: fundo branco, logo colorido ── */}
      <div
        className="w-full"
        style={{
          backgroundColor: altoContraste ? "#000" : "#ffffff",
          borderBottom: altoContraste ? "1px solid #ffff00" : "1px solid rgba(30,27,75,0.08)",
          boxShadow: altoContraste ? "none" : "0 1px 12px rgba(30,27,75,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between gap-8">

          {/* Logo colorido sobre fundo branco */}
          <Link
            to="/"
            className="flex-shrink-0"
            aria-label="AEBH-RJ — página inicial"
          >
            <AebhLogoReal variant="colorido" height={48} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Menu principal">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-3.5 py-2 rounded-lg text-[13.5px] font-medium transition-colors whitespace-nowrap"
                style={{
                  color: isActive(l.to) ? "#3C3489" : "#4B4580",
                  backgroundColor: isActive(l.to) ? "rgba(60,52,137,0.06)" : "transparent",
                  fontWeight: isActive(l.to) ? 600 : 500,
                }}
                onMouseEnter={(e) => {
                  if (!isActive(l.to)) (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(60,52,137,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive(l.to)) (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {l.label}
                {isActive(l.to) && (
                  <span
                    className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full"
                    style={{ backgroundColor: "#F5A623" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTAs desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              to="/associados"
              className="text-[13.5px] font-semibold px-4 py-2 rounded-lg transition whitespace-nowrap"
              style={{ color: "#3C3489", backgroundColor: "rgba(60,52,137,0.06)" }}
            >
              Nossos Associados
            </Link>
            <Link
              to="/doacoes"
              className="text-[13.5px] font-bold px-5 py-2.5 rounded-xl text-white transition hover:opacity-90 active:scale-95 whitespace-nowrap"
              style={{
                backgroundColor: "#F5A623",
                boxShadow: "0 4px 14px rgba(245,166,35,0.4)",
              }}
            >
              Doe Agora
            </Link>
          </div>

          {/* Botão hamburger mobile */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: "#1E1B4B" }}
            onClick={() => setMenuAberto(!menuAberto)}
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuAberto}
          >
            {menuAberto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── MENU MOBILE ── */}
      {menuAberto && (
        <div
          className="lg:hidden px-4 pb-6 pt-2 flex flex-col gap-1"
          style={{
            backgroundColor: altoContraste ? "#111" : "#ffffff",
            borderBottom: "1px solid rgba(30,27,75,0.08)",
            boxShadow: "0 8px 24px rgba(30,27,75,0.12)",
          }}
        >
          {/* Mobile acessibilidade */}
          <div className="flex gap-2 pb-3 mb-2" style={{ borderBottom: "1px solid rgba(30,27,75,0.08)" }}>
            {[
              { label: "Alto Contraste", action: () => setAltoContraste(!altoContraste) },
              { label: "A+", action: () => setTamanhoFonte(Math.min(tamanhoFonte + 2, 24)) },
              { label: "A−", action: () => setTamanhoFonte(Math.max(tamanhoFonte - 2, 14)) },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={btn.action}
                className="text-xs px-2 py-1 rounded border font-medium"
                style={{ color: "#3C3489", borderColor: "rgba(60,52,137,0.25)", backgroundColor: "rgba(60,52,137,0.04)" }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMenuAberto(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium transition"
              style={{
                color: isActive(l.to) ? "#3C3489" : "#4B4580",
                backgroundColor: isActive(l.to) ? "rgba(60,52,137,0.06)" : "transparent",
                fontWeight: isActive(l.to) ? 600 : 500,
              }}
            >
              {l.label}
            </Link>
          ))}

          <div className="mt-3 flex flex-col gap-2">
            <Link
              to="/associados"
              onClick={() => setMenuAberto(false)}
              className="text-center text-sm font-semibold px-4 py-2.5 rounded-xl"
              style={{ color: "#3C3489", backgroundColor: "rgba(60,52,137,0.06)" }}
            >
              Nossos Associados
            </Link>
            <Link
              to="/doacoes"
              onClick={() => setMenuAberto(false)}
              className="text-center text-sm font-bold px-4 py-3 rounded-xl text-white"
              style={{ backgroundColor: "#F5A623", boxShadow: "0 4px 12px rgba(245,166,35,0.35)" }}
            >
              Doe Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
