import { Link } from "react-router";
import { AebhLogoReal } from "./AebhLogoReal";
import { Instagram, Facebook, Mail, MapPin, Phone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#13112E", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <AebhLogoReal variant="positivo" height={44} />
          <p className="mt-5 text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            Associação das Pessoas com Espinha Bífida e Hidrocefalia do Rio de Janeiro. Entidade sem fins lucrativos desde 2008.
          </p>
          <div className="flex gap-3 mt-5">
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
                className="w-9 h-9 rounded-lg flex items-center justify-center transition hover:opacity-80"
                style={{ backgroundColor: "rgba(245,166,35,0.15)", color: "#F5A623" }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: "#F5A623" }}>
            Navegação
          </h4>
          <ul className="space-y-2.5">
            {[
              { to: "/sobre", label: "Sobre a AEBH" },
              { to: "/doencas", label: "Espinha Bífida e Hidrocefalia" },
              { to: "/acessibilidade", label: "Obras de Acessibilidade" },
              { to: "/blog", label: "Blog & Eventos" },
              { to: "/voluntario", label: "Seja Voluntário/Parceiro" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[13px] transition hover:text-white"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: "#F5A623" }}>
            Contato
          </h4>
          <ul className="space-y-4">
            {[
              { Icon: MapPin, text: "R. João Silvares, 226 – Brasilândia,\nSão Gonçalo – RJ, CEP 24440-720" },
              { Icon: Phone, text: "+55 21 98664-3495" },
              { Icon: Mail, text: "contato@aebhrj.org.br" },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <Icon size={14} className="mt-0.5 shrink-0" style={{ color: "#F5A623" }} />
                <span className="text-[13px] whitespace-pre-line" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="py-5 text-center text-[12px]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)" }}
      >
        <p className="flex items-center justify-center gap-1.5">
          © 2026 AEBH-RJ — Todos os direitos reservados. Feito com{" "}
          <Heart size={11} style={{ color: "#E8683A" }} /> para quem mais precisa.
        </p>
        <p className="mt-1">CNPJ: 04.854.941/0001-43 · Entidade sem fins lucrativos</p>
      </div>
    </footer>
  );
}
