import { Link } from "react-router";
import { Construction, CheckCircle, Clock, ArrowRight } from "lucide-react";

const obras = [
  { titulo: "Rampa de acesso principal", descricao: "Construção de rampa com corrimão e inclinação adequada para cadeirantes na entrada da sede.", status: "em-andamento", valor: "R$ 45.000" },
  { titulo: "Banheiro acessível", descricao: "Adaptação do banheiro com barras de apoio, espaço para cadeira de rodas e box acessível.", status: "planejada", valor: "R$ 32.000" },
  { titulo: "Acesso à piscina", descricao: "Elevador aquático ou rampa submersa para que cadeirantes acessem a piscina de forma autônoma.", status: "planejada", valor: "R$ 58.000" },
  { titulo: "Calçada e estacionamento", descricao: "Nivelamento da calçada e criação de vagas reservadas para pessoas com deficiência.", status: "planejada", valor: "R$ 15.000" },
];

const arrecadado = 48000;
const meta = 150000;
const percentual = Math.round((arrecadado / meta) * 100);

export function Acessibilidade() {
  return (
    <div style={{ backgroundColor: "#F8F7FF", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Hero */}
      <div className="relative overflow-hidden py-24 px-6 text-white" style={{ backgroundColor: "#1E1B4B" }}>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: "#F5A623" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>Campanha em andamento</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>
            Obras de Acessibilidade
          </h1>
          <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Precisamos tornar nossa sede completamente acessível. A maioria dos nossos associados são cadeirantes e dependem dessas obras.
          </p>
        </div>
      </div>

      {/* Campanha */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center" style={{ border: "1px solid rgba(30,27,75,0.07)", boxShadow: "0 1px 8px rgba(30,27,75,0.05)" }}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#FFF8ED" }}>
              <Construction size={28} style={{ color: "#F5A623" }} />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>Meta da Campanha</span>
            <p className="mt-2 mb-6 text-[14px]" style={{ color: "#6B6999" }}>
              Cada obra vai garantir que nossos associados tenham acesso pleno à nossa sede.
            </p>

            <div className="text-5xl font-black mb-1" style={{ color: "#F5A623", letterSpacing: "-0.03em" }}>
              R$ {arrecadado.toLocaleString("pt-BR")}
            </div>
            <div className="text-[14px] mb-6" style={{ color: "#9997B8" }}>
              de R$ {meta.toLocaleString("pt-BR")} necessários
            </div>

            {/* Barra: fundo Roxo Âncora, preenchimento Âmbar */}
            <div
              className="w-full rounded-full h-7 overflow-hidden mb-2 relative"
              style={{ backgroundColor: "#3C3489" }}
              role="progressbar"
              aria-valuenow={percentual}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${percentual}% da meta arrecadada`}
            >
              <div
                className="h-full rounded-full flex items-center justify-end pr-4"
                style={{ width: `${percentual}%`, backgroundColor: "#F5A623" }}
              >
                <span className="text-white text-[13px] font-black">{percentual}%</span>
              </div>
            </div>
            <div className="flex justify-between text-[12px] font-medium mb-8" style={{ color: "#9997B8" }}>
              <span>Arrecadado: R$ 48.000</span>
              <span>Faltam: R$ {(meta - arrecadado).toLocaleString("pt-BR")}</span>
            </div>

            <Link
              to="/doacoes"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-black text-white text-[16px] hover:opacity-90 active:scale-95 transition"
              style={{ backgroundColor: "#F5A623", boxShadow: "0 6px 20px rgba(245,166,35,0.4)" }}
            >
              💙 Contribuir com as Obras
            </Link>
          </div>
        </div>
      </section>

      {/* Obras previstas */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-8 text-center" style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}>
            O que será feito
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {obras.map((o) => (
              <div
                key={o.titulo}
                className="bg-white rounded-2xl p-6"
                style={{ border: "1px solid rgba(30,27,75,0.07)", boxShadow: "0 1px 4px rgba(30,27,75,0.05)" }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[15px] font-bold" style={{ color: "#1E1B4B" }}>{o.titulo}</h3>
                  <span
                    className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
                    style={
                      o.status === "em-andamento"
                        ? { backgroundColor: "#dcfce7", color: "#15803d" }
                        : { backgroundColor: "#FFF8ED", color: "#c47a00" }
                    }
                  >
                    {o.status === "em-andamento" ? <CheckCircle size={11} /> : <Clock size={11} />}
                    {o.status === "em-andamento" ? "Em andamento" : "Planejada"}
                  </span>
                </div>
                <p className="text-[13px] leading-relaxed mb-3" style={{ color: "#6B6999" }}>{o.descricao}</p>
                <div className="text-[13px] font-black" style={{ color: "#F5A623" }}>Estimativa: {o.valor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que importa */}
      <section className="py-14 px-6" style={{ background: "linear-gradient(135deg, #1E1B4B, #3C3489)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>Por que isso importa?</h2>
          <p className="text-[15px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            Nossa piscina é fundamental para a <strong className="text-white">fisioterapia aquática</strong> dos nossos associados. Sem a rampa e o elevador aquático, cadeirantes não conseguem acessá-la. Você pode mudar isso.
          </p>
          <Link
            to="/doacoes"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-white hover:opacity-90 transition"
            style={{ backgroundColor: "#F5A623", boxShadow: "0 6px 20px rgba(245,166,35,0.4)" }}
          >
            Fazer minha parte agora <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
