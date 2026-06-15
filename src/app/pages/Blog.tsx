import { useState } from "react";
import { Calendar, ArrowRight, Share2 } from "lucide-react";
import { toast } from "sonner";

// Imports das imagens locais
import plImg from "../../imports/PL51732023.jpg";
import drAndreImg from "../../imports/dr andre.png";
import diaPaisImg from "../../imports/dia dos pais.png";
import quintaImg from "../../imports/quinta.png";
import leandroImg from "../../imports/leandro.png";
import pascoaImg from "../../imports/pascoa 2.jpg";
import natalImg from "../../imports/natal.png";

const eventosData = [
  {
    id: 1,
    titulo: "PL 5173/2023 – Dia Nacional da Mielomeningocele",
    tag: "Conscientização",
    imagem: plImg,
    resumo: "A AEBH esteve no Senado Federal defendendo a criação do Dia Nacional. O presidente Julio Cesar e seu filho Gabriel discursaram na Comissão de Assuntos Sociais sobre a urgência de políticas públicas e inclusão.",
    data: "14 Nov 2023",
    destaque: true,
  },
  {
    id: 2,
    titulo: "Qualidade de Vida e Bexiga Neurogênica",
    tag: "Informativo",
    imagem: drAndreImg,
    resumo: "Em alusão ao Dia Estadual da Mielomeningocele, realizamos uma palestra especial com o Dr. Ailton Fernandes, urologista referência, abordando os desafios e possibilidades para nossos associados.",
    data: "25 Out 2025",
    destaque: false,
  },
  {
    id: 3,
    titulo: "Festa Agostina e Dia dos Pais",
    tag: "Integração",
    imagem: diaPaisImg,
    resumo: "Um dia de muita alegria, confraternização e união. Celebramos a força das famílias com abraços, brincadeiras e o verdadeiro sentimento de pertencimento que guia nossa instituição.",
    data: "10 Ago 2025",
    destaque: false,
  },
  {
    id: 4,
    titulo: "Passeio à Quinta da Boa Vista",
    tag: "Conscientização",
    imagem: quintaImg,
    resumo: "Em comemoração ao Dia da Mielomeningocele (25 de outubro), promoveremos um encontro especial de lazer, integração e contato com a natureza para nossos associados e familiares.",
    data: "25 Out 2026",
    destaque: false,
  },
  {
    id: 5,
    titulo: "Show Beneficente: Leandro Hassum",
    tag: "Parceria",
    imagem: leandroImg,
    resumo: "Relembrando o momento histórico em que Leandro Hassum levou nossa causa para os EUA. O espetáculo gerou visibilidade internacional e uma generosa doação de US$ 7.780 para a manutenção das nossas atividades.",
    data: "15 Mai 2024",
    destaque: false,
  },
  {
    id: 6,
    titulo: "Páscoa AEBH: Gratidão que Alimenta",
    tag: "Integração",
    imagem: pascoaImg,
    resumo: "Mais um evento regado a amor e carinho! Agradecemos aos nossos padrinhos e madrinhas que tornaram esse dia possível com chocolates, lanches e muita alegria para nossas crianças.",
    data: "05 Abr 2026",
    destaque: false,
  },
  {
    id: 7,
    titulo: "Vem aí o Natal Solidário AEBH",
    tag: "Campanha",
    imagem: natalImg,
    resumo: "Guiados pelo lema \"Acolher para conscientizar\", já estamos preparando nossa grande festa de fim de ano. Seja um padrinho e nos ajude a garantir cestas, presentes e dignidade para as famílias.",
    data: "Dez 2026",
    destaque: false,
  },
];

const categorias = ["Todos", "Conscientização", "Informativo", "Integração", "Parceria", "Campanha"];

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  Conscientização: { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  Informativo:     { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  Integração:      { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200" },
  Parceria:        { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  Campanha:        { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};

export function Blog() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const eventosFiltrados =
    categoriaAtiva === "Todos"
      ? eventosData
      : eventosData.filter((evento) => evento.tag === categoriaAtiva);

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
      {/* 1. Hero Section (Cabeçalho da Página) */}
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

      {/* 2. Sistema de Filtros (Tags) */}
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

      {/* 3. Grid e Cards */}
      <section className="max-w-7xl mx-auto w-full px-6 pb-20 flex-grow" aria-label="Lista de publicações">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventosFiltrados.map((evento) => {
            const colors = tagColors[evento.tag] ?? {
              bg: "bg-gray-100",
              text: "text-gray-700",
              border: "border-gray-200",
            };
            return (
              <article
                key={evento.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group border border-gray-100"
              >
                {/* Imagem do Card */}
                <div className="aspect-video w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={evento.imagem}
                    alt={evento.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {evento.destaque && (
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
                      {evento.tag}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-[#1E1B4B] mb-3 leading-snug group-hover:text-[#3C3489] transition-colors duration-200">
                    {evento.titulo}
                  </h3>

                  {/* Resumo */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4 flex-grow">
                    {evento.resumo}
                  </p>

                  {/* Rodapé do Card */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Calendar size={13} className="text-gray-400" />
                      {evento.data}
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleShare(evento.titulo)}
                        className="p-1.5 rounded-full text-gray-400 hover:text-[#3C3489] hover:bg-indigo-50/50 transition-colors duration-200"
                        title="Compartilhar matéria"
                        aria-label={`Compartilhar: ${evento.titulo}`}
                      >
                        <Share2 size={14} />
                      </button>
                      <button
                        className="text-sm font-bold text-[#F5A623] hover:text-[#d98c1a] transition-colors duration-200 flex items-center gap-1 cursor-pointer focus:outline-none focus:underline"
                        aria-label={`Ler matéria completa: ${evento.titulo}`}
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
    </main>
  );
}
