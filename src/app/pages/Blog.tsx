import { useState, useEffect } from "react";
import { Calendar, ArrowRight, Share2, X } from "lucide-react";
import { toast } from "sonner";

// Imports das imagens locais
import plImg from "../../imports/PL51732023.jpg";
import drAndreImg from "../../imports/dr andre.png";
import diaPaisImg from "../../imports/dia dos pais.png";
import quintaImg from "../../imports/quinta.png";
import leandroImg from "../../imports/leandro.png";
import pascoaImg from "../../imports/pascoa 2.jpg";
import natalImg from "../../imports/natal.png";

interface Post {
  id: number;
  imagem: string;
  tag: string;
  titulo: string;
  resumo: string;
  conteudoCompleto: string[];
  objectPosition?: string; // Posição customizada para evitar cortes indesejados
}

const posts: Post[] = [
  {
    id: 1,
    imagem: "PL51732023.jpg",
    tag: "Conscientização",
    titulo: "PL 5173/2023 – Dia Nacional da Mielomeningocele",
    resumo: "A AEBH esteve no Senado Federal defendendo a criação do Dia Nacional. O presidente Julio Cesar e seu filho Gabriel discursaram sobre a urgência de políticas públicas.",
    conteudoCompleto: [
      "A AEBH participou ativamente dos debates para a criação do Dia Nacional de Conscientização sobre a Mielomeningocele, proposto pelo Projeto de Lei PL 5173/2023, de autoria do Senador Romário.",
      "No dia 22 de abril de 2025, o Presidente da AEBH, Julio Cesar Moreno Lucena, esteve presente na Audiência Pública da Comissão de Assuntos Sociais do Senado Federal, representando nossa associação e defendendo a importância dessa data para a causa.",
      "Ao seu lado, esteve seu filho, Gabriel Lucena, de 19 anos, que também nasceu com mielomeningocele e defendeu o reconhecimento da doença em nível nacional. Com coragem e propriedade, Gabriel falou sobre sua própria trajetória e a necessidade de políticas públicas que garantam dignidade, acesso à saúde e inclusão.",
      "O Presidente Julio Cesar é pai de Gabriel e voluntário há mais de 13 anos. É com esse olhar de pai — e agora também com a força do filho — que ele leva ao poder público a urgência de políticas voltadas para quem vive com má formações congênitas e suas consequências, como a incontinência urinária.",
      "O projeto foi aprovado pela Comissão de Assuntos Sociais em caráter terminativo no dia 7 de maio de 2025 e segue agora para análise da Câmara dos Deputados, propondo instituir o dia 25 de outubro como a data oficial no Brasil.",
      "A AEBH segue na luta para que esse dia se torne realidade em todo o território nacional, levando informação, prevenção e esperança a milhares de famílias."
    ],
    objectPosition: "object-center"
  },
  {
    id: 2,
    imagem: "dr andre.png",
    tag: "Informativo",
    titulo: "Qualidade de Vida e Bexiga Neurogênica",
    resumo: "Em alusão ao Dia Estadual da Mielomeningocele, realizamos uma palestra especial com o Dr. Ailton Fernandes, urologista referência.",
    conteudoCompleto: [
      "A AEBH realizou com grande sucesso a palestra especial em alusão ao Dia Estadual da Mielomeningocele, instituído pela Lei Estadual nº 8.130/2018. O evento aconteceu na OAB/8ª Seção, em São Gonçalo, e reuniu associados, familiares e profissionais da saúde.",
      "Tivemos a honra de receber o Dr. Ailton Fernandes, Urologista referência nacional e internacional, Professor da UERJ e Chefe do Departamento de Uroneurologia da SBU.",
      "Com o tema 'Qualidade de vida para pessoas com deficiência. Qual é o papel da família, da sociedade e do Estado?', o Dr. Ailton trouxe uma palestra enriquecedora, cheia de conhecimento técnico e sensibilidade humana.",
      "Além da palestra, a AEBH segue proporcionando regularmente consultas com o Dr. Ailton Fernandes. Essas consultas têm transformado a realidade dos nossos associados com bexiga neurogênica e incontinência urinária, levando mais saúde e dignidade.",
      "A AEBH agradece imensamente ao Dr. Ailton pela disponibilidade, à OAB/8ª Seção pelo acolhimento, e a todos que fizeram desse dia um marco em nossa trajetória."
    ],
    objectPosition: "object-[center_15%]"
  },
  {
    id: 3,
    imagem: "dia dos pais.png",
    tag: "Integração",
    titulo: "Festa Agostina e Dia dos Pais",
    resumo: "Um dia de muita alegria, confraternização e união. Celebramos a força das famílias com abraços e muito pertencimento.",
    conteudoCompleto: [
      "Um dia de muita alegria e confraternização na AEBH! Celebramos com grande emoção a Festa Agostina em homenagem ao Dia dos Pais.",
      "Foi um momento especial de união, amor e gratidão entre associados, voluntários, amigos e, principalmente, as famílias que fazem parte da nossa história.",
      "O evento reuniu pais, mães, crianças e colaboradores em um ambiente de pura confraternização. Houve alegria, risadas, abraços apertados e aquela sensação gostosa de pertencimento que só quem vive a luta diária da inclusão conhece.",
      "A diretoria da AEBH agradece de coração aos associados, voluntários e amigos. Como nosso Presidente frisou: 'Que Deus abençoe cada um que contribuiu para esse momento maravilhoso! Dias como esse nos mostram o verdadeiro sentido da palavra inclusão.'",
      "Em meio à luta diária por políticas públicas, acesso à saúde e dignidade, momentos como a Festa Agostina nos lembram que celebrar a vida também é resistir."
    ],
    objectPosition: "object-top"
  },
  {
    id: 4,
    imagem: "quinta.png",
    tag: "Conscientização",
    titulo: "Passeio à Quinta da Boa Vista",
    resumo: "Em comemoração ao Dia da Mielomeningocele (25 de outubro), promoveremos um encontro especial de lazer e integração.",
    conteudoCompleto: [
      "Passeio à Quinta da Boa Vista - Dia da Mielomeningocele (25 de outubro)",
      "Por motivo de força maior, neste ano será realizado apenas um passeio externo da AEBH: uma visita à Quinta da Boa Vista, marcada para o segundo semestre, em comemoração ao Dia Internacional da Mielomeningocele.",
      "A atividade promete momentos inesquecíveis de lazer, integração e muito contato com a natureza.",
      "Será uma oportunidade especial para nossos associados e suas famílias desfrutarem de um dia agradável, cheio de alegria e convivência, celebrando juntos essa data tão importante para a nossa luta e para a conscientização sobre a condição.",
      "Fiquem atentos às nossas redes e canais de comunicação para mais informações sobre a data oficial, horário e a programação detalhada. Vamos juntos celebrar a vida, a inclusão e o amor!"
    ],
    objectPosition: "object-center"
  },
  {
    id: 5,
    imagem: "leandro.png",
    tag: "Parceria",
    titulo: "Momento Retrô: Show de Leandro Hassum",
    resumo: "Relembrando o momento histórico em que Leandro Hassum levou nossa causa para os EUA, gerando grande visibilidade.",
    conteudoCompleto: [
      "Em maio de 2019, a AEBH viveu um momento verdadeiramente histórico e emocionante. O ator e humorista Leandro Hassum realizou um show beneficente em Orlando, na Flórida (EUA), levando consigo o nome da AEBH e da má formação congênita Mielomeningocele para além das fronteiras do Brasil.",
      "Ao lado de sua equipe e amigos, Hassum não apenas entreteve o público com seu talento inigualável, mas também divulgou a nossa causa, espalhando conscientização e informação em solo americano.",
      "Além de toda a visibilidade gerada, ele doou generosamente US$ 7.780 (sete mil, setecentos e oitenta dólares) para a instituição. Um gesto que fez e ainda faz enorme diferença na vida de nossos associados.",
      "Ainda naquele mês, tivemos a honra de agradecer pessoalmente ao ator e seus amigos durante um evento especial no Teatro Abel, em Niterói (RJ).",
      "A AEBH é eternamente grata pelo carinho, pela parceria e pela solidariedade. Que venham mais anos de união e amor ao próximo!"
    ],
    objectPosition: "object-[center_15%]"
  },
  {
    id: 6,
    imagem: "pascoa 2.jpg",
    tag: "Integração",
    titulo: "Páscoa AEBH: Gratidão que Alimenta",
    resumo: "Mais um evento regado a amor e carinho! Agradecemos aos nossos padrinhos que tornaram esse dia possível.",
    conteudoCompleto: [
      "Páscoa AEBH - Gratidão que alimenta a alma!",
      "Realizamos mais uma Páscoa da AEBH e foi um dia regado com o que há de mais importante: amor e carinho. Vocês, nossos padrinhos e madrinhas, fizeram a diferença com bombons, lanches, brindes, algodão doce, bolo e enfeites.",
      "Tudo isso foi possível porque vocês estavam ao nosso lado. Lembrando que não temos nenhuma ajuda do Estado - sobrevivemos apenas da generosidade de amigos e das vendas de tampinhas recicláveis.",
      "A Páscoa faz parte da nossa agenda oficial de eventos de conscientização, assim como o Dia das Mães, Pais, Dia da Mielomeningocele e o Encerramento de ano.",
      "Seguimos firmes! Para que possamos fazer o Natal da AEBH e os próximos eventos, continuamos precisando do seu apoio. Um forte abraço e um nó no coração; que Deus retribua com muita saúde!"
    ],
    objectPosition: "object-[center_20%]"
  },
  {
    id: 7,
    imagem: "natal.png",
    tag: "Campanha",
    titulo: "Vem aí o Natal Solidário AEBH",
    resumo: "Guiados pelo lema 'Acolher para conscientizar', já estamos preparando nossa grande festa de fim de ano. Seja um padrinho!",
    conteudoCompleto: [
      "Com o coração cheio de esperança, a AEBH já se prepara para mais um Natal Solidário. Contamos com você, padrinho e madrinha, para fazermos deste ano um momento especial.",
      "O tema continua o mesmo que nos guia em todos os nossos encontros: 'Acolher para conscientizar'. Porque inclusão é atitude, e solidariedade transforma vidas.",
      "Durante a campanha, arrecadamos e doamos: Cestas natalinas, Cestas básicas, Panetones, Presentes para crianças e adultos, além da nossa Ceia de Natal para a confraternização das famílias.",
      "Sua contribuição faz toda a diferença. Com o seu apoio, podemos garantir que nenhum dos nossos associados fique sem un Natal digno, cheio de sabor e, principalmente, AMOR.",
      "Entre em contato conosco e saiba como se tornar um padrinho ou madrinha da AEBH. Toda doação é bem-vinda e fará a diferença no coração de uma família. Juntos, vamos fazer um Natal inesquecível!"
    ],
    objectPosition: "object-[center_20%]"
  }
];

const imageMap: Record<string, string> = {
  "PL51732023.jpg": plImg,
  "dr andre.png": drAndreImg,
  "dia dos pais.png": diaPaisImg,
  "quinta.png": quintaImg,
  "leandro.png": leandroImg,
  "pascoa 2.jpg": pascoaImg,
  "natal.png": natalImg,
};

const categorias = ["Todos", "Conscientização", "Informativo", "Integração", "Parceria", "Campanha"];

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  Conscientização: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  Informativo:     { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Integração:      { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Parceria:        { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  Campanha:        { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};

// Mapeamento aproximado de datas realistas para exibição no card
const dateMap: Record<number, string> = {
  1: "14 Nov 2023",
  2: "25 Out 2025",
  3: "10 Ago 2025",
  4: "25 Out 2026",
  5: "15 Mai 2024",
  6: "05 Abr 2026",
  7: "Dez 2026",
};

export function Blog() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [postSelecionado, setPostSelecionado] = useState<Post | null>(null);

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

  const eventosFiltrados =
    categoriaAtiva === "Todos"
      ? posts
      : posts.filter((post) => post.tag === categoriaAtiva);

  const handleShare = (titulo: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: titulo,
          text: `Confira esta matéria no Blog da AEBH: ${titulo}`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${titulo} - ${window.location.href}`);
      toast.success("Link copiado para a área de transferência!");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans" id="main-content">
      {/* 2. Hero Section */}
      <section
        className="w-full text-white text-center py-20 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1E1B4B 0%, #13112E 100%)",
        }}
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
            style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Blog & Eventos
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed">
            Acompanhe nossas ações, encontros e lutas por políticas públicas. Nosso maior lema é:{" "}
            <span className="font-semibold text-[#F5A623]">Acolher para Conscientizar.</span>
          </p>
        </div>
      </section>

      {/* Sistema de Filtros */}
      <nav
        className="max-w-7xl mx-auto w-full px-6 py-8"
        aria-label="Filtro de publicações por categoria"
      >
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {categorias.map((cat) => {
            const isSelected = categoriaAtiva === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 cursor-pointer shadow-sm hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:ring-offset-2 ${
                  isSelected
                    ? "bg-[#3C3489] text-white border-[#3C3489] shadow-md"
                    : "bg-white text-[#3C3489] border-gray-200 hover:border-[#3C3489] hover:bg-indigo-50/20"
                }`}
                aria-pressed={isSelected}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Grid de Cards */}
      <section className="max-w-7xl mx-auto w-full px-6 pb-20 flex-grow" aria-label="Lista de publicações">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventosFiltrados.map((post) => {
            const colors = tagColors[post.tag] ?? {
              bg: "bg-gray-100",
              text: "text-gray-700",
              border: "border-gray-200",
            };
            const dataExibicao = dateMap[post.id] ?? "2026";
            return (
              <article
                key={post.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group border border-gray-100"
              >
                {/* Imagem do Card */}
                <div className="aspect-video w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={imageMap[post.imagem]}
                    alt={post.titulo}
                    className={`w-full h-full object-cover ${post.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                    loading="lazy"
                  />
                  {post.id === 1 && (
                    <span className="absolute top-3 right-3 bg-[#F5A623] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Corpo do Card */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Tag da Categoria */}
                  <div className="mb-3">
                    <span
                      className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {post.tag}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-[#1E1B4B] mb-3 leading-snug group-hover:text-[#3C3489] transition-colors duration-200">
                    {post.titulo}
                  </h3>

                  {/* Resumo */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                    {post.resumo}
                  </p>

                  {/* Rodapé do Card */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Calendar size={13} className="text-gray-400" />
                      {dataExibicao}
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleShare(post.titulo)}
                        className="p-1.5 rounded-full text-gray-400 hover:text-[#3C3489] hover:bg-indigo-50/50 transition-colors duration-200"
                        title="Compartilhar matéria"
                        aria-label={`Compartilhar: ${post.titulo}`}
                      >
                        <Share2 size={14} />
                      </button>
                      <button
                        onClick={() => setPostSelecionado(post)}
                        className="text-sm font-bold text-[#F5A623] hover:text-[#d98c1a] transition-colors duration-200 flex items-center gap-1 cursor-pointer focus:outline-none focus:underline"
                        aria-label={`Ler matéria completa: ${post.titulo}`}
                      >
                        Ler matéria completa <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {eventosFiltrados.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            Nenhuma publicação encontrada nesta categoria.
          </div>
        )}
      </section>

      {/* 1. Funcionalidade de Leitura (Modal/Dialog Overlay) */}
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
                src={imageMap[postSelecionado.imagem]}
                alt={postSelecionado.titulo}
                className={`w-full h-full object-cover ${postSelecionado.objectPosition || "object-center"}`}
              />
            </div>

            {/* Conteúdo Textual do Modal */}
            <div className="p-6 md:p-8">
              {/* Tag da Categoria */}
              <div className="mb-3">
                <span
                  className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                    (tagColors[postSelecionado.tag] ?? tagColors["Conscientização"]).bg
                  } ${(tagColors[postSelecionado.tag] ?? tagColors["Conscientização"]).text} ${
                    (tagColors[postSelecionado.tag] ?? tagColors["Conscientização"]).border
                  }`}
                >
                  {postSelecionado.tag}
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
                {postSelecionado.conteudoCompleto.map((paragrafo, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
