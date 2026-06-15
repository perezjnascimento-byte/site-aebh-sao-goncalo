import { Link } from "react-router";

interface Associado {
  nome: string;
  idade: string;
  responsavel: string;
  localidade: string;
}

const associados: Associado[] = [
  { nome: "Adelson Silva", idade: "34 anos", responsavel: "Ana Cláudia", localidade: "Mesquita, RJ" },
  { nome: "Agatha de Souza", idade: "24 anos", responsavel: "Claudete André", localidade: "Jardim Catarina, SG" },
  { nome: "Alice Albuquerque", idade: "9 anos", responsavel: "Ana Estela", localidade: "Engenhoca, Niterói" },
  { nome: "Ana Beatriz", idade: "21 anos", responsavel: "Denise Cristina", localidade: "Zé Garoto, SG" },
  { nome: "Anthony Samuel", idade: "6 anos", responsavel: "Raylane Francisco", localidade: "Boaçu, São Gonçalo" },
  { nome: "Bruna Karla", idade: "11 anos", responsavel: "Edna de Oliveira", localidade: "Pendotiba, Niterói" },
  { nome: "Cauã Emanuel", idade: "18 anos", responsavel: "Maria Aparecida", localidade: "Rio do Ouro, São Gonçalo" },
  { nome: "David Castro", idade: "10 anos", responsavel: "Andréa Luana", localidade: "Cabuçu, Itaboraí" },
  { nome: "Deiniel Richard", idade: "19 anos", responsavel: "Gerlucia", localidade: "São Gonçalo" },
  { nome: "Emanuel", idade: "8 anos", responsavel: "Sabrina e Jeferson", localidade: "Porto Novo, São Gonçalo" },
  { nome: "Enzo Surra", idade: "11 anos", responsavel: "Vânia Dutra", localidade: "Itambi, Itaboraí" },
  { nome: "Esperança da Conceição", idade: "20 anos", responsavel: "Barbara Cristina", localidade: "Jardim Penha, São Paulo" },
  { nome: "Gabriel Lucena", idade: "19 anos", responsavel: "Sueli Lucena", localidade: "Brasilândia, São Gonçalo" },
  { nome: "Gabriel Nepomuceno", idade: "28 anos", responsavel: "Cintia Fonseca", localidade: "Fonseca, Niterói" },
  { nome: "Geovanna Nunes", idade: "12 anos", responsavel: "Risalva", localidade: "Jardim Bom Retiro, SG" },
  { nome: "Inácio Lavrador", idade: "2 anos", responsavel: "Lívia Gadelha", localidade: "Vila Isabel, RJ" },
  { nome: "Isadora dos Santos", idade: "13 anos", responsavel: "Alessandra", localidade: "Arsenal, São Gonçalo" },
  { nome: "Isis Vitória", idade: "3 anos", responsavel: "Verônica Ribeiro", localidade: "Largo da Batalha, Niterói" },
  { nome: "Karine da Silva", idade: "29 anos", responsavel: "Rosana da Silva", localidade: "Avenida Central, SG" },
  { nome: "Laura Vitória", idade: "7 anos", responsavel: "Maika Cíntia", localidade: "Arraial do Cabo" },
  { nome: "Lucas Pedro", idade: "4 anos", responsavel: "Ilana Oliveira", localidade: "Santa luzia, São Gonçalo" },
  { nome: "Luiz Felipe", idade: "8 anos", responsavel: "Ariana Couto", localidade: "Lindo Parque, SG" },
  { nome: "Lyliane Alves", idade: "24 anos", responsavel: "Silvia Alves", localidade: "Mutuaguacu, SG" },
  { nome: "Marcos Antônio", idade: "12 anos", responsavel: "Denise e Maycon", localidade: "Portão do Rosa, SG" },
  { nome: "Maria Eduarda", idade: "19 anos", responsavel: "Célia e Davi", localidade: "Trindade, São Gonçalo" },
  { nome: "Matheus Steven", idade: "21 anos", responsavel: "Juliana Ribeiro", localidade: "Aldeia da Prata, Itaboraí" },
  { nome: "Maycon da Silva", idade: "2 anos", responsavel: "Patrícia da Silva", localidade: "Colubandê, SG" },
  { nome: "Miguel Alves", idade: "11 anos", responsavel: "Dinéia", localidade: "Maricá" },
  { nome: "Nicksson de Barros", idade: "16 anos", responsavel: "Adriana Pereira", localidade: "Maricá, RJ" },
  { nome: "Railany Vitoria", idade: "13 anos", responsavel: "Elaine Cristina", localidade: "Niterói" },
  { nome: "Sarah Vitória", idade: "17 anos", responsavel: "Zalônia", localidade: "Maricá, RJ" },
  { nome: "Tiely Vitória", idade: "17 anos", responsavel: "Gilmara ou Cristina", localidade: "São Gonçalo" },
  { nome: "Victória Mariana", idade: "21 anos", responsavel: "Luciane Conceição", localidade: "Manilha, Itaboraí" }
];

const getFotoUrl = (nome: string) => {
  const slug = nome
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return `/images/associados/${slug}.jpg`;
};

export function Associados() {
  return (
    <div style={{ backgroundColor: "#FDF6EC" }} className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Hero Section */}
        <div
          className="py-20 px-4 text-white text-center"
          style={{ background: "linear-gradient(135deg, #3C3489 0%, #26215C 100%)" }}
        >
          <h1
            className="text-4xl md:text-5xl font-black mb-3 text-white"
            style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Nossos Associados
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Conheça as crianças, jovens e adultos que fazem parte da nossa família. O acolhimento é o primeiro passo para a inclusão e a dignidade de vida.
          </p>
        </div>

        {/* Grid Container */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {associados.map((a) => {
                const fotoUrl = getFotoUrl(a.nome);

                return (
                  <div
                    key={a.nome}
                    className="bg-white rounded-xl overflow-hidden shadow-md border flex flex-col justify-between"
                    style={{ borderColor: "rgba(60,52,137,0.06)" }}
                  >
                    <div>
                      {/* Área da Imagem (Corte de borda temática com zoom scale-[1.35]) */}
                      <div className="aspect-[3/4] w-full overflow-hidden bg-gray-100 relative">
                        <img
                          src={fotoUrl}
                          alt={`Foto de ${a.nome}`}
                          className="w-full h-full object-cover object-center transform scale-[1.35] transition-transform duration-300 hover:scale-[1.45]"
                        />
                      </div>

                      {/* Corpo do Texto */}
                      <div className="p-5 text-center flex flex-col gap-1.5">
                        <h3
                          className="text-lg font-black"
                          style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
                        >
                          {a.nome}
                        </h3>
                        
                        <p className="text-xs text-gray-500 font-semibold">
                          {a.idade}
                        </p>
                        
                        <p className="text-xs text-gray-500">
                          <span className="font-semibold text-gray-700">Responsável:</span> {a.responsavel}
                        </p>
                        
                        <p className="text-xs text-gray-500 mt-0.5">
                          <span className="inline-flex items-center gap-1 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E8683A]" />
                            {a.localidade}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* Bloco de Integração */}
      <section
        className="py-16 px-6 text-white text-center w-full"
        style={{ backgroundColor: "#3C3489" }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-black mb-3"
            style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Quer ajudar de outras formas?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8 text-base leading-relaxed">
            Doe seu tempo, suas habilidades profissionais ou torne sua empresa uma parceira oficial da AEBH.
          </p>
          <Link
            to="/voluntario"
            className="inline-block py-3.5 px-8 rounded-xl font-bold transition hover:opacity-90 active:scale-95 text-base border-2"
            style={{
              borderColor: "#F5A623",
              backgroundColor: "#F5A623",
              color: "#fff",
              boxShadow: "0 4px 14px rgba(245,166,35,0.35)",
            }}
          >
            Conhecer Voluntariado
          </Link>
        </div>
      </section>
    </div>
  );
}
