import { useState } from "react";
import { CheckCircle, Users, Briefcase, Building, AlertCircle } from "lucide-react";

interface FormErrors {
  nome?: string;
  email?: string;
}

function FormField({
  id,
  label,
  helper,
  error,
  children,
}: {
  id: string;
  label: string;
  helper?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-bold" style={{ color: "#3C3489" }}>
        {label}
      </label>
      {children}
      {helper && !error && (
        <p className="text-xs" style={{ color: "#7a6e5a" }}>{helper}</p>
      )}
      {error && (
        <p className="text-xs flex items-center gap-1 font-semibold" style={{ color: "#E8683A" }} role="alert">
          <AlertCircle size={12} />
          {error}
        </p>
      )}
    </div>
  );
}

export function Voluntario() {
  const [tipo, setTipo] = useState<"voluntario" | "parceiro" | "padrinho">("voluntario");
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", area: "", associado: "", mensagem: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [enviado, setEnviado] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.nome.trim()) {
      e.nome = tipo === "parceiro"
        ? "Por favor, informe o nome da empresa."
        : "Por favor, informe seu nome completo.";
    }
    if (!form.email.trim()) e.email = "Por favor, informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setEnviado(true);
  };

  const fieldBorder = (field: keyof FormErrors) =>
    errors[field]
      ? { borderColor: "#E8683A", backgroundColor: "#fff5f2" }
      : { borderColor: "rgba(60,52,137,0.2)" };

  if (enviado) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#FDF6EC" }}
      >
        <div
          className="bg-white rounded-3xl p-10 shadow-lg text-center max-w-md w-full"
          style={{ border: "1px solid rgba(60,52,137,0.08)" }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "#e8f5e9" }}
          >
            <CheckCircle size={40} style={{ color: "#2e7d32" }} />
          </div>
          <h2
            className="text-2xl font-black mb-2"
            style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Cadastro enviado com sucesso!
          </h2>
          <p className="mb-6" style={{ color: "#26215C" }}>
            Obrigado pelo interesse! Nossa equipe entrará em contato em breve pelo e-mail{" "}
            <strong>{form.email}</strong>.
          </p>
          <button
            onClick={() => {
              setEnviado(false);
              setForm({ nome: "", email: "", telefone: "", area: "", associado: "", mensagem: "" });
              setErrors({});
            }}
            className="px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition"
            style={{ backgroundColor: "#3C3489", borderRadius: "12px" }}
          >
            Novo cadastro
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
          Seja Voluntário, Parceiro ou Padrinho
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
          Sua habilidade, tempo, apoio empresarial ou apadrinhamento pode transformar vidas. Junte-se à nossa família!
        </p>
      </div>

      {/* Cards de benefícios */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: Users,
              title: "Voluntário Individual",
              desc: "Doe seu tempo e talento. Precisamos de fisioterapeutas, psicólogos, professores, auxiliares, motoristas e muito mais.",
              cor: "#3C3489",
            },
            {
              icon: Briefcase,
              title: "Profissional Voluntário",
              desc: "Advogados, contadores, médicos e especialistas que queiram oferecer serviços pro bono à nossa comunidade.",
              cor: "#E8683A",
            },
            {
              icon: Building,
              title: "Empresa Parceira",
              desc: "Sua empresa pode patrocinar eventos, doar materiais ou adotar nossa campanha de acessibilidade. Emitimos certificado.",
              cor: "#F5A623",
            },
          ].map(({ icon: Icon, title, desc, cor }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
              style={{ border: "1px solid rgba(60,52,137,0.08)" }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${cor}18` }}
              >
                <Icon size={22} style={{ color: cor }} />
              </div>
              <h3
                className="font-black mb-2"
                style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#26215C" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Formulário com labels externos */}
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-white rounded-2xl p-8 shadow-sm"
            style={{ border: "1px solid rgba(60,52,137,0.08)" }}
          >
            <h2
              className="text-xl font-black mb-6"
              style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
            >
              Cadastro de interesse
            </h2>

            {/* Tipo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6" role="group" aria-label="Tipo de cadastro">
              {(["voluntario", "parceiro", "padrinho"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTipo(t)}
                  className="py-3 rounded-xl font-semibold text-sm border-2 transition"
                  style={
                    tipo === t
                      ? { backgroundColor: "#3C3489", color: "#fff", borderColor: "#3C3489" }
                      : { backgroundColor: "#fff", color: "#3C3489", borderColor: "rgba(60,52,137,0.3)" }
                  }
                  aria-pressed={tipo === t}
                >
                  {t === "voluntario"
                    ? "👤 Voluntário / Profissional"
                    : t === "parceiro"
                    ? "🏢 Empresa Parceira"
                    : "❤️ Padrinho / Madrinha"}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <FormField
                id="vol-nome"
                label={tipo === "parceiro" ? "Nome da empresa *" : "Nome completo *"}
                helper={tipo === "parceiro" ? "Razão social ou nome fantasia." : "Como podemos chamá-lo?"}
                error={errors.nome}
              >
                <input
                  id="vol-nome"
                  type="text"
                  value={form.nome}
                  onChange={(e) => { setForm({ ...form, nome: e.target.value }); setErrors({ ...errors, nome: undefined }); }}
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={fieldBorder("nome")}
                  aria-invalid={!!errors.nome}
                />
              </FormField>

              <FormField
                id="vol-email"
                label="E-mail *"
                helper="Usaremos para confirmar seu cadastro."
                error={errors.email}
              >
                <input
                  id="vol-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={fieldBorder("email")}
                  aria-invalid={!!errors.email}
                />
              </FormField>

              <FormField id="vol-telefone" label="WhatsApp / Telefone" helper="Opcional, mas facilita o contato.">
                <input
                  id="vol-telefone"
                  type="tel"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={{ borderColor: "rgba(60,52,137,0.2)" }}
                />
              </FormField>

              {tipo !== "padrinho" && (
                <FormField
                  id="vol-area"
                  label={tipo === "parceiro" ? "Ramo de atividade" : "Área de atuação / habilidade"}
                  helper={tipo === "parceiro" ? "Ex: alimentação, saúde, construção…" : "Ex: fisioterapia, psicologia, educação…"}
                >
                  <input
                    id="vol-area"
                    type="text"
                    value={form.area}
                    onChange={(e) => setForm({ ...form, area: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                    style={{ borderColor: "rgba(60,52,137,0.2)" }}
                  />
                </FormField>
              )}

              {tipo === "padrinho" && (
                <FormField
                  id="vol-associado"
                  label="Nome do associado que deseja apadrinhar"
                  helper="Deixe em branco se quiser apadrinhar a fila de espera geral"
                >
                  <input
                    id="vol-associado"
                    type="text"
                    value={form.associado}
                    onChange={(e) => setForm({ ...form, associado: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                    style={{ borderColor: "rgba(60,52,137,0.2)" }}
                  />
                </FormField>
              )}

              <FormField
                id="vol-mensagem"
                label="Como gostaria de ajudar?"
                helper={
                  tipo === "padrinho"
                    ? "Ex: Doação mensal de fraldas, compra de sondas, presente de Natal..."
                    : "Opcional — descreva sua disponibilidade ou proposta."
                }
              >
                <textarea
                  id="vol-mensagem"
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition resize-none focus:border-[#3C3489]"
                  style={{ borderColor: "rgba(60,52,137,0.2)" }}
                />
              </FormField>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-black text-white transition hover:opacity-90 active:scale-95 shadow-md"
                style={{
                  backgroundColor: "#F5A623",
                  borderRadius: "14px",
                  boxShadow: "0 4px 14px rgba(245,166,35,0.35)",
                }}
              >
                Enviar cadastro
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
