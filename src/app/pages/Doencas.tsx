import { Link } from "react-router";
import { AlertCircle, CheckCircle, Info, ArrowRight } from "lucide-react";

export function Doencas() {
  return (
    <div style={{ backgroundColor: "#F8F7FF", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* Hero */}
      <div className="relative overflow-hidden py-24 px-6 text-white" style={{ backgroundColor: "#1E1B4B" }}>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: "#F5A623" }} />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>
            Informação que salva vidas
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>
            Espinha Bífida e Hidrocefalia
          </h1>
          <p className="text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Entenda o que são essas condições, como afetam a vida das pessoas e o que pode ser feito para prevenir e tratar.
          </p>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Espinha Bífida */}
          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(30,27,75,0.07)", boxShadow: "0 1px 8px rgba(30,27,75,0.05)" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}>
              O que é Espinha Bífida?
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: "#4B4580" }}>
              <p>A <strong style={{ color: "#1E1B4B" }}>Espinha Bífida</strong> é uma má-formação congênita do tubo neural que ocorre nas primeiras semanas de gestação, quando a coluna vertebral não se fecha completamente ao redor da medula espinhal.</p>
              <p>Pode causar graus variados de paralisia, perda de sensibilidade nos membros inferiores, disfunções urinárias e intestinais, além de problemas ortopédicos. O tipo mais grave é a <strong style={{ color: "#1E1B4B" }}>mielomeningocele</strong>, onde parte da medula fica exposta.</p>
              <p>No Brasil, nascem aproximadamente <strong style={{ color: "#1E1B4B" }}>1 criança com Espinha Bífida a cada 1.000 nascimentos</strong>. Com tratamento adequado, as pessoas podem ter uma vida plena e produtiva.</p>
            </div>
          </div>

          {/* Hidrocefalia */}
          <div className="bg-white rounded-2xl p-8" style={{ border: "1px solid rgba(30,27,75,0.07)", boxShadow: "0 1px 8px rgba(30,27,75,0.05)" }}>
            <h2 className="text-2xl font-black mb-4" style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}>
              O que é Hidrocefalia?
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed" style={{ color: "#4B4580" }}>
              <p>A <strong style={{ color: "#1E1B4B" }}>Hidrocefalia</strong> é o acúmulo excessivo de líquido cefalorraquidiano (LCR) no interior do crânio, aumentando a pressão sobre o cérebro. Pode ocorrer isoladamente ou em associação com a Espinha Bífida.</p>
              <p>O principal tratamento é a implantação de uma <strong style={{ color: "#1E1B4B" }}>válvula (derivação ventrículo-peritoneal)</strong>, um dispositivo que drena o excesso de líquido para outra parte do corpo.</p>
              <p>Com acompanhamento médico regular e a válvula bem ajustada, a maioria das pessoas tem desenvolvimento cognitivo normal ou próximo do normal.</p>
            </div>
          </div>

          {/* Prevenção */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#F0FAF0", border: "1px solid #b8e0b8" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#dcf5dc" }}>
                <CheckCircle size={20} style={{ color: "#16a34a" }} />
              </div>
              <h2 className="text-xl font-black" style={{ color: "#14532d", letterSpacing: "-0.01em" }}>
                Prevenção da Espinha Bífida
              </h2>
            </div>
            <p className="text-[14px] leading-relaxed mb-4" style={{ color: "#166534" }}>
              Estudos científicos comprovam que a ingestão adequada de <strong>ácido fólico (vitamina B9)</strong> antes e durante o início da gravidez reduz em até <strong>70%</strong> o risco de Espinha Bífida.
            </p>
            <ul className="space-y-2.5">
              {[
                "Tomar 400mcg de ácido fólico diariamente, ao menos 3 meses antes de engravidar",
                "Manter a suplementação durante o primeiro trimestre da gravidez",
                "Consultar o médico ginecologista antes de planejar a gravidez",
                "Adotar alimentação rica em folato (feijão, lentilha, espinafre, brócolis)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px]" style={{ color: "#166534" }}>
                  <CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: "#16a34a" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sinais de Alerta */}
          <div className="rounded-2xl p-8" style={{ backgroundColor: "#FFF8ED", border: "1px solid #f5d9a0" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#fed7aa" }}>
                <AlertCircle size={20} style={{ color: "#ea580c" }} />
              </div>
              <h2 className="text-xl font-black" style={{ color: "#1E1B4B", letterSpacing: "-0.01em" }}>
                Sinais de Alerta na Criança
              </h2>
            </div>
            <ul className="space-y-2.5">
              {[
                "Cabeça crescendo mais rápido que o esperado",
                "Fontanela (moleira) abaulada ou pulsante",
                "Irritabilidade excessiva, choro persistente",
                "Dificuldade de movimentar membros inferiores",
                "Problemas urinários ou intestinais",
                "Atraso no desenvolvimento motor",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px]" style={{ color: "#4B4580" }}>
                  <AlertCircle size={14} className="mt-0.5 shrink-0" style={{ color: "#E8683A" }} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[13px] italic mt-4" style={{ color: "#9997B8" }}>
              Ao notar qualquer um desses sinais, procure imediatamente um médico pediatra ou neurologista infantil.
            </p>
          </div>

          {/* Convivendo — 2 colunas com foto lateral */}
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(30,27,75,0.07)", boxShadow: "0 1px 8px rgba(30,27,75,0.05)" }}>
            <div className="grid md:grid-cols-2">
              <div style={{ minHeight: 300, backgroundColor: "#e0d8f5" }}>
                <img
                  src="https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=600&h=400&fit=crop&auto=format"
                  alt="Criança em atividade física adaptada — associada da AEBH em momento de inclusão e alegria"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(60,52,137,0.1)" }}>
                    <Info size={20} style={{ color: "#3C3489" }} />
                  </div>
                  <h2 className="text-xl font-black" style={{ color: "#1E1B4B", letterSpacing: "-0.01em" }}>
                    Convivendo com a Condição
                  </h2>
                </div>
                <div className="space-y-3 text-[14px] leading-relaxed" style={{ color: "#4B4580" }}>
                  <p>Pessoas com Espinha Bífida e Hidrocefalia podem estudar, trabalhar, praticar esportes e ter vida social ativa. O acompanhamento multidisciplinar é fundamental para o desenvolvimento pleno.</p>
                  <p>A AEBH oferece suporte e orientação para famílias.{" "}
                    <Link to="/contato" className="font-semibold underline" style={{ color: "#3C3489" }}>
                      Entre em contato
                    </Link>{" "}conosco.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6" style={{ backgroundColor: "#1E1B4B" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-2" style={{ letterSpacing: "-0.02em" }}>Tem dúvidas? Fale conosco.</h2>
          <p className="mb-6 text-[14px]" style={{ color: "rgba(255,255,255,0.6)" }}>Nossa equipe está pronta para orientar você e sua família.</p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#F5A623", boxShadow: "0 4px 14px rgba(245,166,35,0.4)" }}
          >
            Entre em Contato <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
