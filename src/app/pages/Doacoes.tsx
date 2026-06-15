import { useState } from "react";
import { Heart, CreditCard, QrCode, FileText, CheckCircle, AlertCircle } from "lucide-react";

const valorSugerido = [20, 50, 100, 200];

export function Doacoes() {
  const [valorSel, setValorSel] = useState<number | null>(50);
  const [valorCustom, setValorCustom] = useState("");
  const [forma, setForma] = useState<"pix" | "cartao" | "boleto" | "transferencia">("pix");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [concluido, setConcluido] = useState(false);
  const [erros, setErros] = useState<{ nome?: string; email?: string }>({});

  const valorFinal = valorSel ?? Number(valorCustom);

  const validate = () => {
    const e: { nome?: string; email?: string } = {};
    if (!nome.trim()) e.nome = "Por favor, informe seu nome.";
    if (!email.trim()) e.email = "Por favor, informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "E-mail inválido.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (valorFinal <= 0) return;
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErros(errs); return; }
    setConcluido(true);
  };

  if (concluido) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#FDF6EC" }}>
        <div
          className="bg-white rounded-3xl p-10 shadow-lg text-center max-w-md w-full"
          style={{ border: "1px solid rgba(60,52,137,0.08)" }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "#e8f5e9" }}>
            <CheckCircle size={40} style={{ color: "#2e7d32" }} />
          </div>
          <h2
            className="text-2xl font-black mb-2"
            style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Muito obrigado!
          </h2>
          <p className="mb-2" style={{ color: "#26215C" }}>
            Sua doação de{" "}
            <strong style={{ color: "#F5A623" }}>R$ {valorFinal}</strong> foi registrada com sucesso.
          </p>
          <p className="text-sm mb-6" style={{ color: "#7a6e5a" }}>
            {forma === "pix"
              ? "O QR Code do Pix será exibido em instantes."
              : forma === "cartao"
              ? "Você será redirecionado para o gateway de pagamento em instantes."
              : forma === "transferencia"
              ? "Os dados para transferência foram exibidos na tela anterior. Envie o comprovante."
              : "O boleto será enviado para seu e-mail em instantes."}
          </p>
          <p className="text-sm" style={{ color: "#7a6e5a" }}>
            Confirmação enviada para: <strong style={{ color: "#3C3489" }}>{email}</strong>
          </p>
          <button
            onClick={() => { setConcluido(false); setErros({}); }}
            className="mt-6 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition"
            style={{ backgroundColor: "#3C3489", borderRadius: "12px" }}
          >
            Fazer outra doação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FDF6EC" }}>
      <div
        className="py-20 px-4 text-white text-center"
        style={{ background: "linear-gradient(135deg, #3C3489 0%, #26215C 100%)" }}
      >
        <h1
          className="text-4xl md:text-5xl font-black mb-3 text-white"
          style={{ fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
        >
          Faça sua Doação
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
          Sua contribuição ajuda diretamente nas obras de acessibilidade e no apoio a famílias com Espinha Bífida e Hidrocefalia.
        </p>
      </div>

      <section className="py-14 px-4">
        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl p-8 shadow-sm"
            style={{ border: "1px solid rgba(60,52,137,0.08)" }}
          >
            {/* Valor */}
            <div className="mb-7">
              <p className="font-black mb-3" style={{ color: "#3C3489" }}>
                Escolha o valor da doação
              </p>
              <div className="grid grid-cols-4 gap-3 mb-3">
                {valorSugerido.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => { setValorSel(v); setValorCustom(""); }}
                    className="py-3 rounded-xl font-black text-sm transition border-2"
                    style={
                      valorSel === v
                        ? { backgroundColor: "#3C3489", color: "#fff", borderColor: "#3C3489" }
                        : { backgroundColor: "#fff", color: "#3C3489", borderColor: "rgba(60,52,137,0.3)" }
                    }
                  >
                    R$ {v}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="doe-custom" className="text-sm font-bold" style={{ color: "#3C3489" }}>
                  Outro valor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold" style={{ color: "#7a6e5a" }}>R$</span>
                  <input
                    id="doe-custom"
                    type="number"
                    min="1"
                    value={valorCustom}
                    onChange={(e) => { setValorCustom(e.target.value); setValorSel(null); }}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                    style={{ borderColor: "rgba(60,52,137,0.2)" }}
                    placeholder="Digite um valor"
                  />
                </div>
              </div>
            </div>

            {/* Forma de pagamento */}
            <div className="mb-7">
              <p className="font-black mb-3" style={{ color: "#3C3489" }}>
                Forma de pagamento
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="group" aria-label="Forma de pagamento">
                {([
                  { id: "pix", label: "Pix", icon: QrCode },
                  { id: "cartao", label: "Cartão", icon: CreditCard },
                  { id: "boleto", label: "Boleto", icon: FileText },
                  { id: "transferencia", label: "Transferência", icon: FileText },
                ] as const).map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setForma(id)}
                    className="flex flex-col items-center gap-2 py-4 rounded-xl border-2 transition font-semibold text-sm"
                    style={
                      forma === id
                        ? { backgroundColor: "#3C3489", color: "#fff", borderColor: "#3C3489" }
                        : { backgroundColor: "#fff", color: "#26215C", borderColor: "rgba(60,52,137,0.2)" }
                    }
                    aria-pressed={forma === id}
                  >
                    <Icon size={22} />
                    {label}
                  </button>
                ))}
              </div>
              {forma === "pix" && (
                <div className="mt-4 p-4 rounded-xl text-center" style={{ backgroundColor: "#F0FAF0", border: "1px solid #b8e0b8" }}>
                  <p className="text-sm" style={{ color: "#26215C" }}>
                    Chave Pix (CNPJ): <strong>04.854.941/0001-43</strong>
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#7a6e5a" }}>
                    Você também pode usar a chave enviada no seu e-mail após confirmar.
                  </p>
                </div>
              )}
              {forma === "transferencia" && (
                <div className="mt-4 p-4 rounded-xl text-center" style={{ backgroundColor: "#EEF0FF", border: "1px solid #c2c9ff" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "#26215C" }}>
                    <strong>Banco do Brasil</strong><br/>
                    Agência: <strong>3096-1</strong><br/>
                    C/C: <strong>15.198-0</strong><br/>
                    CNPJ: <strong>04.854.941/0001-43</strong>
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#7a6e5a" }}>
                    Após a transferência, por favor envie o comprovante para o nosso WhatsApp.
                  </p>
                </div>
              )}
            </div>

            {/* Dados pessoais */}
            <div className="mb-7 space-y-4">
              <p className="font-black" style={{ color: "#3C3489" }}>Seus dados (para recibo)</p>

              <div className="flex flex-col gap-1">
                <label htmlFor="doe-nome" className="text-sm font-bold" style={{ color: "#3C3489" }}>
                  Nome completo *
                </label>
                <input
                  id="doe-nome"
                  type="text"
                  value={nome}
                  onChange={(e) => { setNome(e.target.value); setErros({ ...erros, nome: undefined }); }}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={erros.nome ? { borderColor: "#E8683A", backgroundColor: "#fff5f2" } : { borderColor: "rgba(60,52,137,0.2)" }}
                  aria-invalid={!!erros.nome}
                />
                {erros.nome && (
                  <p className="text-xs flex items-center gap-1 font-semibold" style={{ color: "#E8683A" }} role="alert">
                    <AlertCircle size={12} /> {erros.nome}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="doe-email" className="text-sm font-bold" style={{ color: "#3C3489" }}>
                  E-mail *
                </label>
                <input
                  id="doe-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErros({ ...erros, email: undefined }); }}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={erros.email ? { borderColor: "#E8683A", backgroundColor: "#fff5f2" } : { borderColor: "rgba(60,52,137,0.2)" }}
                  aria-invalid={!!erros.email}
                />
                {erros.email && (
                  <p className="text-xs flex items-center gap-1 font-semibold" style={{ color: "#E8683A" }} role="alert">
                    <AlertCircle size={12} /> {erros.email}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={!valorFinal || valorFinal <= 0}
              className="w-full py-4 rounded-xl font-black text-white text-lg transition hover:opacity-90 active:scale-95 disabled:opacity-40 flex items-center justify-center gap-2 shadow-lg"
              style={{
                backgroundColor: "#F5A623",
                borderRadius: "14px",
                boxShadow: "0 6px 20px rgba(245,166,35,0.4)",
              }}
            >
              <Heart size={20} />
              Doar R$ {valorFinal || "—"} agora
            </button>
            <p className="text-xs text-center mt-3" style={{ color: "#7a6e5a" }}>
              🔒 Pagamento seguro · Entidade sem fins lucrativos · CNPJ 04.854.941/0001-43
            </p>
          </form>

          {/* Por que doar */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { val: "R$ 20", desc: "custeia material de fisioterapia" },
              { val: "R$ 50", desc: "apoia uma família por um mês" },
              { val: "R$ 100", desc: "contribui com a obra de rampa" },
            ].map((i) => (
              <div
                key={i.val}
                className="bg-white rounded-xl p-4 shadow-sm"
                style={{ border: "1px solid rgba(60,52,137,0.08)" }}
              >
                <div
                  className="font-black text-lg"
                  style={{ color: "#F5A623", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
                >
                  {i.val}
                </div>
                <div className="text-xs mt-1" style={{ color: "#26215C" }}>{i.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
