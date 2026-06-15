import { useState, useEffect } from "react";
import { Link } from "react-router";
import heroImg from "../../imports/Head_hero_-_AEBHRJ.jpg";
import plImg from "../../imports/PL51732023.jpg";
import drAndreImg from "../../imports/dr andre.png";
import diaPaisImg from "../../imports/dia dos pais.png";
import quintaImg from "../../imports/quinta.png";
import {
  Heart, Users, Briefcase, Building, ArrowRight,
  ChevronLeft, ChevronRight, Quote, Calendar, X,
} from "lucide-react";

/* ─── DADOS ─────────────────────────────────────────────────────────────────── */

const impacto = [
  { valor: "16+", label: "Anos de atuação" },
  { valor: "450+", label: "Famílias cadastradas" },
  { valor: "50+", label: "Voluntários ativos" },
];

const noticias = [
  {
    id: 1,
    titulo: "PL 5173/2023 – Dia Nacional da Mielomeningocele",
    descricao: "A AEBH esteve no Senado Federal defendendo a criação do Dia Nacional. O presidente Julio Cesar e seu filho Gabriel discursaram na Comissão de Assuntos Sociais sobre a urgência de políticas públicas e inclusão.",
    categoria: "Conscientização",
    img: plImg,
    objectPosition: "object-center",
    conteudoCompleto: [
      "A AEBH participou ativamente dos debates para a criação do Dia Nacional de Conscientização sobre a Mielomeningocele, proposto pelo Projeto de Lei PL 5173/2023, de autoria do Senador Romário.",
      "No dia 22 de abril de 2025, o Presidente da AEBH, Julio Cesar Moreno Lucena, esteve presente na Audiência Pública da Comissão de Assuntos Sociais do Senado Federal, representando nossa associação e defendendo a importância dessa data para a causa.",
      "Ao seu lado, esteve seu filho, Gabriel Lucena, de 19 anos, que também nasceu com mielomeningocele e defendeu o reconhecimento da doença em nível nacional. Com coragem e propriedade, Gabriel falou sobre sua própria trajetória e a necessidade de políticas públicas que garantam dignidade, acesso à saúde e inclusão.",
      "O Presidente Julio Cesar é pai de Gabriel e voluntário há mais de 13 anos. É com esse olhar de pai — e agora também com a força do filho — que ele leva ao poder público a urgência de políticas voltadas para quem vive com má formações congênitas e suas consequências, como a incontinência urinária.",
      "O projeto foi aprovado pela Comissão de Assuntos Sociais em caráter terminativo no dia 7 de maio de 2025 e segue agora para análise da Câmara dos Deputados, propondo instituir o dia 25 de outubro como a data oficial no Brasil.",
      "A AEBH segue na luta para que esse dia se torne realidade em todo o território nacional, levando informação, prevenção e esperança a milhares de famílias."
    ]
  },
  {
    id: 2,
    titulo: "Qualidade de Vida e Bexiga Neurogênica",
    descricao: "Em alusão ao Dia Estadual da Mielomeningocele, realizamos uma palestra especial com o Dr. Ailton Fernandes, urologista referência, abordando os desafios e possibilidades para nossos associados.",
    categoria: "Informativo",
    img: drAndreImg,
    objectPosition: "object-[center_15%]",
    conteudoCompleto: [
      "A AEBH realizou com grande sucesso a palestra especial em alusão ao Dia Estadual da Mielomeningocele, instituído pela Lei Estadual nº 8.130/2018. O evento aconteceu na OAB/8ª Seção, em São Gonçalo, e reuniu associados, familiares e profissionais da saúde.",
      "Tivemos a honra de receber o Dr. Ailton Fernandes, Urologista referência nacional e internacional, Professor da UERJ e Chefe do Departamento de Uroneurologia da SBU.",
      "Com o tema 'Qualidade de vida para pessoas com deficiência. Qual é o papel da família, da sociedade e do Estado?', o Dr. Ailton trouxe uma palestra enriquecedora, cheia de conhecimento técnico e sensibilidade humana.",
      "Além da palestra, a AEBH segue proporcionando regularmente consultas com o Dr. Ailton Fernandes. Essas consultas têm transformado a realidade dos nossos associados com bexiga neurogênica e incontinência urinária, levando mais saúde e dignidade.",
      "A AEBH agradece imensamente ao Dr. Ailton pela disponibilidade, à OAB/8ª Seção pelo acolhimento, e a todos que fizeram desse dia um marco em nossa trajetória."
    ]
  },
  {
    id: 3,
    titulo: "Festa Agostina e Dia dos Pais",
    descricao: "Um dia de muita alegria, confraternização e união. Celebramos a força das famílias com abraços, brincadeiras e o verdadeiro sentimento de pertencimento que guia nossa instituição.",
    categoria: "Integração",
    img: diaPaisImg,
    objectPosition: "object-top",
    conteudoCompleto: [
      "Um dia de muita alegria e confraternização na AEBH! Celebramos com grande emoção a Festa Agostina em homenagem ao Dia dos Pais.",
      "Foi um momento especial de união, amor e gratidão entre associados, voluntários, amigos e, principalmente, as famílias que fazem parte da nossa história.",
      "O evento reuniu pais, mães, crianças e colaboradores em um ambiente de pura confraternização. Houve alegria, risadas, abraços apertados e aquela sensação gostosa de pertencimento que só quem vive a luta diária da inclusão conhece.",
      "A diretoria da AEBH agradece de coração aos associados, voluntários e amigos. Como nosso Presidente frisou: 'Que Deus abençoe cada um que contribuiu para esse momento maravilhoso! Dias como esse nos mostram o verdadeiro sentido da palavra inclusão.'",
      "Em meio à luta diária por políticas públicas, acesso à saúde e dignidade, momentos como a Festa Agostina nos lembram que celebrar a vida também é resistir."
    ]
  },
  {
    id: 4,
    titulo: "Passeio à Quinta da Boa Vista",
    descricao: "Em comemoração ao Dia da Mielomeningocele (25 de outubro), promoveremos um encontro especial de lazer, integração e contato com a natureza para nossos associados e familiares.",
    categoria: "Conscientização",
    img: quintaImg,
    objectPosition: "object-center",
    conteudoCompleto: [
      "Passeio à Quinta da Boa Vista - Dia da Mielomeningocele (25 de outubro)",
      "Por motivo de força maior, neste ano será realizado apenas um passeio externo da AEBH: uma visita à Quinta da Boa Vista, marcada para o segundo semestre, em comemoração ao Dia Internacional da Mielomeningocele.",
      "A atividade promete momentos inesquecíveis de lazer, integração e muito contato com a natureza.",
      "Será uma oportunidade especial para nossos associados e suas famílias desfrutarem de um dia agradável, cheio de alegria e convivência, celebrando juntos essa data tão importante para a nossa luta e para a conscientização sobre a condição.",
      "Fiquem atentos às nossas redes e canais de comunicação para mais informações sobre a data oficial, horário e a programação detalhada. Vamos juntos celebrar a vida, a inclusão e o amor!"
    ]
  },
];

const categoriaCores: Record<string, { bg: string; text: string }> = {
  Conscientização: { bg: "#5c3a99", text: "#fff" },
  Informativo:     { bg: "#3C3489", text: "#fff" },
  Integração:      { bg: "#1b7a1b", text: "#fff" },
  Parceria:        { bg: "#c44e20", text: "#fff" },
  Campanha:        { bg: "#E8683A", text: "#fff" },
};

const depoimentos = [
  {
    texto: "A AEBH mudou minha vida. Consegui orientação e apoio para minha filha desde o nascimento.",
    autor: "Maria da Silva",
    cargo: "Mãe de associada",
  },
  {
    texto: "Graças à associação, meu filho tem acesso a fisioterapia e um ambiente acolhedor toda semana.",
    autor: "João Pereira",
    cargo: "Pai de associado",
  },
  {
    texto: "Encontrei aqui uma família. As pessoas entendem o que vivemos diariamente.",
    autor: "Ana Souza",
    cargo: "Associada",
  },
];

const formasAjudar = [
  { icon: Heart,     title: "Faça uma Doação",      desc: "Contribua financeiramente para obras e programas de apoio às famílias.", link: "/doacoes" },
  { icon: Users,     title: "Seja Voluntário",       desc: "Dedique seu tempo e habilidades para transformar vidas na nossa comunidade.", link: "/voluntario" },
  { icon: Briefcase, title: "Profissional Pro Bono", desc: "Médicos, advogados e especialistas que ofereçam serviços gratuitos.", link: "/voluntario" },
  { icon: Building,  title: "Empresa Parceira",      desc: "Patrocine eventos ou adote nossa campanha. Emitimos certificado de parceria.", link: "/voluntario" },
];

/* ─── CARD DE NOTÍCIA ────────────────────────────────────────────────────────── */
function NewsCard({ n, onSelect }: { n: (typeof noticias)[0]; onSelect: () => void }) {
  const cor = categoriaCores[n.categoria] ?? { bg: "#3C3489", text: "#fff" };
  return (
    <article
      onClick={onSelect}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      aria-label={`Ler notícia: ${n.titulo}`}
      className="group flex flex-col rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:ring-offset-2"
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(30,27,75,0.07)",
        boxShadow: "0 1px 3px rgba(30,27,75,0.05), 0 2px 12px rgba(30,27,75,0.04)",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(30,27,75,0.14)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 1px 3px rgba(30,27,75,0.05), 0 2px 12px rgba(30,27,75,0.04)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Imagem 16:9 com tag flutuante — sem texto sobre rostos */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ paddingTop: "56.25%" }}>
        <img
          src={n.img}
          alt={n.titulo}
          className={`absolute inset-0 w-full h-full object-cover ${n.objectPosition || "object-center"} transition-transform duration-500 group-hover:scale-[1.05]`}
          loading="lazy"
        />
        {/* Gradiente base suave — não cobre a área central/rostos */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/4 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(20,18,60,0.22), transparent)" }}
        />
        {/* Tag flutuante: canto superior esquerdo da imagem */}
        <span
          className="absolute top-3 left-3 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full select-none"
          style={{
            backgroundColor: cor.bg,
            color: cor.text,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            letterSpacing: "0.03em",
          }}
        >
          {n.categoria}
        </span>
      </div>

      {/* Conteúdo textual */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="text-[15px] font-bold leading-snug mb-2"
          style={{ color: "#1E1B4B", letterSpacing: "-0.01em" }}
        >
          {n.titulo}
        </h3>
        <p className="text-[13px] leading-relaxed flex-1 text-gray-600 line-clamp-4">
          {n.descricao}
        </p>
        <div
          className="flex items-center justify-end mt-4 pt-4"
          style={{ borderTop: "1px solid rgba(30,27,75,0.07)" }}
        >
          <span
            className="text-[12px] font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
            style={{ color: "#F5A623" }}
          >
            Ler mais <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </article>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────────────────────── */
export function Home() {
  const [depoAtual, setDepoAtual] = useState(0);
  const [email, setEmail] = useState("");
  const [inscrito, setInscrito] = useState(false);
  const [catSel, setCatSel] = useState("Todos");
  const [postSelecionado, setPostSelecionado] = useState<(typeof noticias)[0] | null>(null);

  // Fechar o modal com a tecla Escape e travar o scroll da página de fundo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPostSelecionado(null);
      }
    };
    if (postSelecionado) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [postSelecionado]);

  const noticiasFiltradas =
    catSel === "Todos" ? noticias : noticias.filter((n) => n.categoria === catSel);

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#F8F7FF" }}>

      {/* ══ HERO — imagem em tela cheia, texto ancorado na base ═════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "82vh", maxHeight: "88vh" }}
        aria-label="Apresentação da AEBH-RJ"
      >
        {/* Foto: posição ajustada para mostrar a parte central/inferior,
            cortando o topo onde estão os rostos — rostos ficam visíveis
            na faixa central da imagem, acima do overlay de texto */}
        <img
          src={heroImg}
          alt="Associados da AEBH-RJ em momento de inclusão e bem-estar"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 65%" }}
        />

        {/* Overlay apenas na metade inferior — onde fica o texto.
            O terço superior da imagem permanece sem escurecimento,
            preservando a visibilidade dos rostos. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(20,18,60,0.84) 0%, rgba(20,18,60,0.60) 32%, rgba(20,18,60,0.12) 58%, transparent 74%)",
          }}
          aria-hidden="true"
        />

        {/* Texto ancorado na base da seção */}
        <div
          className="relative z-10 flex flex-col justify-end w-full max-w-7xl mx-auto px-6"
          style={{ minHeight: "82vh", paddingBottom: "3.5rem" }}
        >
          <div style={{ maxWidth: 560 }}>
            {/* Eyebrow */}
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
              style={{
                backgroundColor: "#F5A623",
                color: "#1E1B4B",
              }}
            >
              Há 16 anos apoiando quem precisa
            </span>

            <h1
              className="text-4xl md:text-5xl xl:text-[54px] font-black text-white leading-[1.07] mb-4"
              style={{ letterSpacing: "-0.025em" }}
            >
              Juntos pela{" "}
              <span style={{ color: "#F5A623" }}>inclusão</span>
              {" "}e dignidade de vida
            </h1>

            <p
              className="text-[15px] md:text-[16px] leading-relaxed mb-7"
              style={{ color: "rgba(255,255,255,0.80)", maxWidth: 460 }}
            >
              Apoiamos pessoas com Espinha Bífida e Hidrocefalia no Rio de Janeiro
              através de acolhimento, informação e inclusão.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/doacoes"
                className="inline-flex items-center gap-2 text-[14px] font-bold px-6 py-3.5 rounded-xl text-white transition hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#F5A623", boxShadow: "0 6px 20px rgba(245,166,35,0.44)" }}
              >
                <Heart size={16} /> Doe Agora
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-[14px] font-semibold px-6 py-3.5 rounded-xl text-white border transition hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.32)" }}
              >
                Conheça a AEBH <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* ══ NÚMEROS DE IMPACTO ════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#1E1B4B" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {impacto.map((n) => (
            <div key={n.label} className="text-center">
              <div
                className="text-5xl md:text-6xl font-black mb-2"
                style={{ color: "#F5A623", letterSpacing: "-0.03em" }}
              >
                {n.valor}
              </div>
              <div
                className="text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {n.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          NOTÍCIAS E EVENTOS — 4 cards com dados reais da AEBH
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ backgroundColor: "#F8F7FF" }}>
        <div className="max-w-7xl mx-auto">

          {/* Cabeçalho da seção */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div>
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "#F5A623" }}
              >
                Blog & Eventos
              </span>
              <h2
                className="text-3xl font-black mt-1 mb-2"
                style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}
              >
                Notícias e Eventos
              </h2>
              <p
                className="text-[14px] leading-relaxed"
                style={{ color: "#6B6999", maxWidth: 560 }}
              >
                Acompanhe nossos encontros e ações, porque o nosso maior lema é:{" "}
                <em className="font-semibold not-italic" style={{ color: "#3C3489" }}>
                  Acolher para Conscientizar.
                </em>
              </p>
            </div>
            <Link
              to="/blog"
              className="flex-shrink-0 flex items-center gap-1.5 text-[13px] font-semibold whitespace-nowrap"
              style={{ color: "#F5A623" }}
            >
              Ver todas <ArrowRight size={14} />
            </Link>
          </div>

          {/* Filtros de categoria */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {["Todos", "Conscientização", "Informativo", "Integração"].map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setCatSel(cat)}
                  className="text-[11.5px] font-bold px-4 py-1.5 rounded-full border transition hover:opacity-80"
                  style={
                    catSel === cat
                      ? { backgroundColor: "#1E1B4B", color: "#fff", borderColor: "#1E1B4B" }
                      : { backgroundColor: "#fff", color: "#1E1B4B", borderColor: "rgba(30,27,75,0.18)" }
                  }
                  aria-pressed={catSel === cat}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Grid 2×2 desktop, 1 col mobile */}
          {noticiasFiltradas.length > 0 ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {noticiasFiltradas.map((n) => (
                <NewsCard key={n.id} n={n} onSelect={() => setPostSelecionado(n)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-[14px]" style={{ color: "#6B6999" }}>
              Nenhuma publicação encontrada nesta categoria.
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-3 rounded-xl transition hover:opacity-80"
              style={{
                color: "#3C3489",
                backgroundColor: "rgba(60,52,137,0.06)",
                border: "1px solid rgba(60,52,137,0.14)",
              }}
            >
              Ver todas as publicações <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ DEPOIMENTOS ══════════════════════════════════════════════════════ */}
      <section
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,18,60,0.92) 0%, rgba(60,52,137,0.88) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Quote
            size={36}
            className="mx-auto mb-6"
            style={{ color: "#F5A623", opacity: 0.5 }}
          />
          <blockquote
            className="text-xl md:text-2xl font-medium leading-relaxed text-white mb-8"
            style={{ letterSpacing: "-0.01em" }}
          >
            "{depoimentos[depoAtual].texto}"
          </blockquote>
          <div>
            <div className="text-[14px] font-bold" style={{ color: "#F5A623" }}>
              {depoimentos[depoAtual].autor}
            </div>
            <div className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
              {depoimentos[depoAtual].cargo}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() =>
                setDepoAtual((d) => (d - 1 + depoimentos.length) % depoimentos.length)
              }
              className="w-10 h-10 rounded-full border flex items-center justify-center transition hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.22)", color: "#fff" }}
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {depoimentos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDepoAtual(i)}
                  className="rounded-full transition-all"
                  style={{
                    width: i === depoAtual ? 24 : 8,
                    height: 8,
                    backgroundColor:
                      i === depoAtual ? "#F5A623" : "rgba(255,255,255,0.28)",
                  }}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setDepoAtual((d) => (d + 1) % depoimentos.length)
              }
              className="w-10 h-10 rounded-full border flex items-center justify-center transition hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.22)", color: "#fff" }}
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ══ COMO AJUDAR — 4 cards ════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "#F5A623" }}
            >
              Participe
            </span>
            <h2
              className="text-3xl font-black mt-1"
              style={{ color: "#1E1B4B", letterSpacing: "-0.02em" }}
            >
              Como você pode ajudar
            </h2>
            <p
              className="mt-3 text-[15px] max-w-xl mx-auto"
              style={{ color: "#6B6999" }}
            >
              Cada contribuição transforma vidas. Escolha a forma de participar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formasAjudar.map(({ icon: Icon, title, desc, link }) => (
              <Link
                key={title}
                to={link}
                className="group flex flex-col p-6 rounded-2xl"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(30,27,75,0.08)",
                  boxShadow: "0 1px 4px rgba(30,27,75,0.06)",
                  transition: "box-shadow 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 32px rgba(30,27,75,0.12)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 1px 4px rgba(30,27,75,0.06)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(245,166,35,0.11)" }}
                >
                  <Icon size={22} style={{ color: "#F5A623" }} />
                </div>
                <h3
                  className="text-[15px] font-bold mb-2"
                  style={{ color: "#1E1B4B" }}
                >
                  {title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed flex-1"
                  style={{ color: "#6B6999" }}
                >
                  {desc}
                </p>
                <span
                  className="inline-flex items-center gap-1 mt-5 text-[12px] font-semibold group-hover:gap-2 transition-all"
                  style={{ color: "#F5A623" }}
                >
                  Saiba mais <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/doacoes"
              className="inline-flex items-center gap-2.5 text-[14.5px] font-bold px-8 py-4 rounded-xl text-white transition hover:opacity-90 active:scale-95"
              style={{
                backgroundColor: "#F5A623",
                boxShadow: "0 6px 20px rgba(245,166,35,0.4)",
              }}
            >
              <Heart size={17} /> Fazer uma doação agora
            </Link>
          </div>
        </div>
      </section>

      {/* ══ NEWSLETTER ════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6" style={{ backgroundColor: "#1E1B4B" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl font-black text-white mb-2"
            style={{ letterSpacing: "-0.02em" }}
          >
            Receba nossas novidades
          </h2>
          <p className="text-[14px] mb-8" style={{ color: "rgba(255,255,255,0.58)" }}>
            Cadastre seu e-mail e fique por dentro de eventos, campanhas e notícias da AEBH.
          </p>
          {inscrito ? (
            <p className="text-white font-bold text-lg">
              ✅ Obrigado! Em breve você receberá nossas novidades.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setInscrito(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  E-mail para newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  required
                  className="w-full px-5 py-3.5 rounded-xl text-[14px] outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.14)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl font-bold text-white transition hover:opacity-90 whitespace-nowrap"
                style={{
                  backgroundColor: "#F5A623",
                  boxShadow: "0 4px 12px rgba(245,166,35,0.32)",
                }}
              >
                Cadastrar
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Modal de Leitura Overlay */}
      {postSelecionado && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={() => setPostSelecionado(null)}
        >
          <div
            className="bg-white rounded-xl max-h-[90vh] overflow-y-auto max-w-3xl w-full relative shadow-2xl flex flex-col animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              onClick={() => setPostSelecionado(null)}
              className="absolute top-4 right-4 bg-white/85 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-2.5 transition-colors duration-200 cursor-pointer z-10 shadow-md border border-gray-100"
              aria-label="Fechar modal"
            >
              <X size={18} />
            </button>

            {/* Imagem do Modal no Topo */}
            <div className="w-full aspect-video bg-gray-100 relative overflow-hidden flex-shrink-0">
              <img
                src={postSelecionado.img}
                alt={postSelecionado.titulo}
                className={`w-full h-full object-cover ${postSelecionado.objectPosition || "object-center"}`}
              />
            </div>

            {/* Conteúdo Textual do Modal */}
            <div className="p-6 md:p-8">
              {/* Tag da Categoria */}
              <div className="mb-3">
                <span
                  className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border text-white select-none"
                  style={{
                    backgroundColor: categoriaCores[postSelecionado.categoria]?.bg || "#3C3489",
                    borderColor: "transparent",
                  }}
                >
                  {postSelecionado.categoria}
                </span>
              </div>

              {/* Título */}
              <h2
                id="modal-title"
                className="text-2xl md:text-3xl font-black text-[#1E1B4B] mb-6 leading-snug"
                style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
              >
                {postSelecionado.titulo}
              </h2>

              {/* Corpo de Parágrafos */}
              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px] md:text-base">
                {postSelecionado.conteudoCompleto?.map((paragrafo, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
