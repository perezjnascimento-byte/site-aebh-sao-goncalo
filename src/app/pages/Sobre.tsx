import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Target, Eye, Heart, ArrowRight, FileText, BarChart2, ChevronLeft, ChevronRight } from "lucide-react";
import equipeSobreImg from "../../imports/equipe-sobre.jpg";
import carrossel1 from "../../imports/carrossel-1.jpg";
import carrossel2 from "../../imports/carrossel-2.jpg";
import carrossel3 from "../../imports/carrossel-3.jpg";
import carrossel4 from "../../imports/carrossel-4.jpg";
import carrossel5 from "../../imports/carrossel-5.jpg";

import fotoJulio from "../../imports/equipe-julio.jpg";
import fotoClaudete from "../../imports/equipe-claudete.png";
import fotoLiliane from "../../imports/equipe-liliane.jpg";
import fotoRosana from "../../imports/equipe-rosana.jpg";
import fotoSueli from "../../imports/equipe-sueli.png";

const equipe = [
  {
    nome: "Júlio Lucena",
    cargo: "Presidente",
    iniciais: "JL",
    foto: fotoJulio,
    bio: "Fundador da AEBH-RJ e defensor incansável dos direitos das pessoas com Espinha Bífida e Hidrocefalia no Rio de Janeiro.",
    cor: "#F5A623",
  },
  {
    nome: "Claudete",
    cargo: "Diretora",
    iniciais: "C",
    foto: fotoClaudete,
    bio: "Atua ativamente nas decisões e projetos da associação, garantindo acolhimento e suporte constante às famílias.",
    cor: "#F5A623",
  },
  {
    nome: "Liliane Barbosa",
    cargo: "Diretora",
    iniciais: "LB",
    foto: fotoLiliane,
    bio: "Dedica-se a estruturar e expandir as atividades da AEBH, focando sempre na qualidade de vida dos associados.",
    cor: "#F5A623",
  },
  {
    nome: "Rosana da Silva",
    cargo: "Membro da Diretoria",
    iniciais: "RS",
    foto: fotoRosana,
    bio: "Apoia o planejamento e execução das ações da associação, trazendo voz e forte representatividade.",
    cor: "#F5A623",
  },
  {
    nome: "Sueli Muniz",
    cargo: "Membro da Diretoria",
    iniciais: "SM",
    foto: fotoSueli,
    bio: "Contribui diretamente no suporte diário, mobilização de recursos e no acolhimento institucional.",
    cor: "#F5A623",
  },
  {
    nome: "Gabriel Lucena",
    cargo: "Assessor e Membro da Diretoria",
    iniciais: "GL",
    foto: null,
    bio: "Responsável pela articulação institucional e parcerias estratégicas da associação com órgãos públicos e privados.",
    cor: "#F5A623",
  },
];

const mvv = [
  {
    icon: Target,
    title: "Missão",
    text: "Acolher pessoas afetadas pela Mielomeningocele e suas famílias, proporcionando apoio, orientação e compartilhamento de experiências.",
    cor: "#3C3489",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência nacional no acolhimento e suporte a pessoas com condições neurológicas congênitas, promovendo uma sociedade mais inclusiva.",
    cor: "#F5A623",
  },
  {
    icon: Heart,
    title: "Valores",
    text: (
      <>
        <strong style={{ display: "block", marginBottom: "4px" }}>
          "Acolher para Conscientizar"
        </strong>
        Solidariedade, respeito à diversidade, transparência, inclusão, amor ao próximo e comprometimento com a dignidade humana.
      </>
    ),
    cor: "#E8683A",
  },
];

// Fotos reais enviadas pelo usuário
export const fotosHistoria = [
  carrossel1,
  carrossel2,
  carrossel3,
  carrossel4,
  carrossel5
];

function CarouselHistoria() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fotosHistoria.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % fotosHistoria.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + fotosHistoria.length) % fotosHistoria.length);

  return (
    <div className="relative rounded-2xl overflow-hidden group shadow-lg" style={{ aspectRatio: "4/3", backgroundColor: "#e0d8f5" }}>
      {fotosHistoria.map((foto, index) => (
        <img
          key={index}
          src={foto}
          alt={`História AEBH ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === currentIndex ? 1 : 0, zIndex: index === currentIndex ? 10 : 0 }}
        />
      ))}
      
      {/* Overlay gradient para os botões ficarem mais visíveis */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.3) 100%)", zIndex: 15 }}></div>

      {/* Controles (aparecem no hover) */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ zIndex: 20 }}>
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
          aria-label="Foto anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
          aria-label="Próxima foto"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2" style={{ zIndex: 20 }}>
        {fotosHistoria.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: index === currentIndex ? "#F5A623" : "rgba(255,255,255,0.5)",
              transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
              boxShadow: index === currentIndex ? "0 0 8px rgba(245,166,35,0.8)" : "none"
            }}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Sobre() {
  return (
    <div style={{ backgroundColor: "#F8F7FF", fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ══ HERO — imagem em tela cheia ══════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "60vh" }}
        aria-label="Sobre a AEBH-RJ"
      >
        {/* Imagem da equipe enviada */}
        <img
          src={equipeSobreImg}
          alt="Equipe AEBH"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(20,18,60,0.84) 0%, rgba(20,18,60,0.60) 32%, rgba(20,18,60,0.12) 58%, transparent 74%)",
          }}
          aria-hidden="true"
        />

        <div
          className="relative z-10 flex flex-col justify-end w-full max-w-7xl mx-auto px-6"
          style={{ minHeight: "60vh", paddingBottom: "3.5rem" }}
        >
          <div style={{ maxWidth: 560 }}>
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
              style={{
                backgroundColor: "#F5A623",
                color: "#1E1B4B",
              }}
            >
              Nossa história
            </span>
            <h1
              className="text-4xl md:text-5xl xl:text-[54px] font-black text-white leading-[1.07] mb-4"
              style={{ letterSpacing: "-0.025em" }}
            >
              Sobre a AEBH
            </h1>
            <p
              className="text-[15px] md:text-[16px] leading-relaxed mb-7"
              style={{ color: "rgba(255,255,255,0.80)", maxWidth: 560 }}
            >
              Conheça nossa trajetória, missão e as pessoas que tornam possível o cuidado de centenas de famílias no Rio de Janeiro.
            </p>
          </div>
        </div>
      </section>

      {/* ── Nossa História — 2 colunas ─────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>
              Desde 2008
            </span>
            <h2
              className="text-3xl font-black mt-2 mb-6"
              style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}
            >
              Nossa História
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#4B4580" }}>
              <p>
                A <strong style={{ color: "#1E1B4B" }}>AEBH-RJ</strong> foi fundada em 2008 por um grupo de famílias que buscavam apoio mútuo e informação de qualidade sobre Espinha Bífida e Hidrocefalia.
              </p>
              <p>
                Ao longo de mais de 16 anos, tornamo-nos referência no Rio de Janeiro, oferecendo orientação médica, suporte psicológico, atividades físicas adaptadas e um espaço de convivência e acolhimento.
              </p>
              <p>
                Somos uma entidade sem fins lucrativos, financiada inteiramente por doações voluntárias e parcerias com a comunidade. Cada real doado vai diretamente para nossas atividades e obras.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <Link
                to="/doacoes"
                className="inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3 rounded-xl text-white transition hover:opacity-90"
                style={{ backgroundColor: "#F5A623", boxShadow: "0 4px 14px rgba(245,166,35,0.35)" }}
              >
                <Heart size={15} /> Apoie nossa causa
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3 rounded-xl transition hover:opacity-80"
                style={{ color: "#3C3489", backgroundColor: "rgba(60,52,137,0.06)" }}
              >
                Fale conosco <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Carrossel histórico */}
          <CarouselHistoria />
        </div>
      </section>

      {/* ── Missão / Visão / Valores ────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>
              Nosso propósito
            </span>
            <h2
              className="text-3xl font-black mt-1"
              style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}
            >
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mvv.map(({ icon: Icon, title, text, cor }) => (
              <div
                key={title}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "#F8F7FF", border: "1px solid rgba(30,27,75,0.06)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${cor}18` }}
                >
                  <Icon size={22} style={{ color: cor }} />
                </div>
                <h3 className="text-[17px] font-bold mb-3" style={{ color: "#1E1B4B" }}>{title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: "#6B6999" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipe Diretora ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1E1B4B" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>
              Liderança
            </span>
            <h2
              className="text-3xl font-black mt-1 text-white"
              style={{ letterSpacing: "-0.02em" }}
            >
              Nossa Equipe Diretora
            </h2>
            <p className="mt-3 text-[14px]" style={{ color: "rgba(255,255,255,0.55)" }}>
              Voluntários dedicados que lideram nossa associação com propósito e transparência.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {equipe.map((m) => (
              <div
                key={m.nome}
                className="p-8 rounded-2xl text-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {/* Imagem real ou Placeholder circular */}
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-black border-4 overflow-hidden relative"
                  style={{
                    backgroundColor: `${m.cor}22`,
                    borderColor: `${m.cor}44`,
                  }}
                  aria-label={`Foto de ${m.nome}`}
                >
                  {m.foto ? (
                    <img src={m.foto} alt={m.nome} className="w-full h-full object-cover" />
                  ) : (
                    <span
                      className="font-black text-2xl"
                      style={{ color: m.cor }}
                    >
                      {m.iniciais}
                    </span>
                  )}
                </div>
                <div className="font-black text-[18px] text-white mb-1">{m.nome}</div>
                <div
                  className="text-[12px] font-semibold uppercase tracking-wider mb-4"
                  style={{ color: m.cor }}
                >
                  {m.cargo}
                </div>
                <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {m.bio}
                </p>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* ── Transparência ──────────────────────────────────────────────────── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>
            Prestação de contas
          </span>
          <h2
            className="text-3xl font-black mt-1 mb-3"
            style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}
          >
            Transparência Total
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: "#6B6999" }}>
            Nossa meta é alcançar a autossuficiência financeira para garantir que as portas da AEBH continuem abertas. Todas as doações arrecadadas são destinadas integralmente à manutenção estrutural da associação e ao suporte direto e contínuo dos nossos associados.
          </p>
        </div>
      </section>

      {/* ── Como Ajudar / Doar ─────────────────────────────────────────────── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#FFF8ED" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F5A623" }}>
              Participe
            </span>
            <h2 className="text-3xl font-black mt-1 mb-2" style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}>
              Como Ajudar / Doar
            </h2>
            <p className="text-[15px] max-w-xl mx-auto" style={{ color: "#6B6999" }}>
              Sua contribuição é fundamental para mantermos nosso acolhimento e suporte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna 1: Doações Financeiras */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[rgba(60,52,137,0.08)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(245,166,35,0.15)" }}>
                  <Heart size={20} style={{ color: "#F5A623" }} />
                </div>
                <h3 className="text-[18px] font-black" style={{ color: "#1E1B4B" }}>
                  Doações Financeiras
                </h3>
              </div>
              <p className="text-[14px] leading-relaxed mb-6" style={{ color: "#6B6999" }}>
                Contribua via Pix ou Transferência Bancária para nos ajudar com a manutenção estrutural da associação.
              </p>
              <div className="bg-[#F8F7FF] p-5 rounded-xl border border-[#e0d8f5]">
                <p className="text-[14px] leading-relaxed" style={{ color: "#3C3489" }}>
                  <strong>Banco do Brasil</strong><br/>
                  Agência: <strong>3096-1</strong><br/>
                  Conta Corrente: <strong>15.198-0</strong><br/>
                  CNPJ / Chave PIX: <strong>04.854.941/0001-43</strong>
                </p>
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/doacoes"
                  className="inline-block px-7 py-3 rounded-xl font-bold text-white transition hover:opacity-90 text-[14px]"
                  style={{ backgroundColor: "#F5A623", boxShadow: "0 4px 14px rgba(245,166,35,0.35)" }}
                >
                  Conhecer outras formas de doar
                </Link>
              </div>
            </div>

            {/* Coluna 2: Doações em Espécie */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[rgba(60,52,137,0.08)]">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(60,52,137,0.1)" }}>
                  <Target size={20} style={{ color: "#3C3489" }} />
                </div>
                <h3 className="text-[18px] font-black" style={{ color: "#1E1B4B" }}>
                  Doações em Espécie
                </h3>
              </div>
              <p className="text-[14px] leading-relaxed mb-6" style={{ color: "#6B6999" }}>
                Recebemos doações físicas diretamente em nossa sede. Temos necessidades contínuas de:
              </p>
              <ul className="space-y-3 text-[14px] leading-relaxed" style={{ color: "#4B4580" }}>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0" style={{ color: "#F5A623" }} />
                  <span>Fraldas infantis e geriátricas (todos os tamanhos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0" style={{ color: "#F5A623" }} />
                  <span>Sondas uretrais (nº 8, 10, 12 e 14)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0" style={{ color: "#F5A623" }} />
                  <span>Cadeiras de rodas e andadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0" style={{ color: "#F5A623" }} />
                  <span>Cestas básicas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="mt-0.5 shrink-0" style={{ color: "#F5A623" }} />
                  <span>Materiais de construção para reforma da sede</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
