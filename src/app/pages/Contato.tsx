import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react";

interface FormErrors {
  nome?: string;
  email?: string;
  assunto?: string;
  mensagem?: string;
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
        <p className="text-xs" style={{ color: "#7a6e5a" }}>
          {helper}
        </p>
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

export function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [enviado, setEnviado] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.nome.trim()) e.nome = "Por favor, informe seu nome.";
    if (!form.email.trim()) e.email = "Por favor, informe seu e-mail.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido.";
    if (!form.assunto) e.assunto = "Selecione o assunto da mensagem.";
    if (!form.mensagem.trim()) e.mensagem = "Escreva sua mensagem antes de enviar.";
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

  const fieldStyle = (field: keyof FormErrors) =>
    `w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition ${
      errors[field]
        ? ""
        : "focus:border-[#3C3489]"
    }`;

  const fieldBorder = (field: keyof FormErrors) =>
    errors[field]
      ? { borderColor: "#E8683A", backgroundColor: "#fff5f2" }
      : { borderColor: "rgba(60,52,137,0.2)" };

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
          Fale Conosco
        </h1>
        <p className="text-white/80 max-w-xl mx-auto text-lg leading-relaxed">
          Tem dúvidas, quer se tornar associado ou precisa de informações? Entre em contato.
        </p>
      </div>

      <section className="py-14 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Informações */}
          <div>
            <h2
              className="text-xl font-black mb-6"
              style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
            >
              Informações de Contato
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  label: "Endereço",
                  value: "R. João Silvares, 226 – Brasilândia\nSão Gonçalo – RJ, CEP 24440-720",
                  cor: "#E8683A",
                },
                { icon: Phone, label: "Telefone / WhatsApp", value: "+55 21 98664-3495", cor: "#3C3489" },
                { icon: Mail, label: "E-mail", value: "contato@aebhrj.org.br", cor: "#F5A623" },
                {
                  icon: Clock,
                  label: "Horário de atendimento",
                  value: "Segunda a sexta: 9h às 17h\nSábado: 9h às 12h",
                  cor: "#E8683A",
                },
              ].map(({ icon: Icon, label, value, cor }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cor}18` }}
                  >
                    <Icon size={18} style={{ color: cor }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: "#3C3489" }}>
                      {label}
                    </div>
                    <div className="text-sm whitespace-pre-line" style={{ color: "#26215C" }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa Real */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-sm" style={{ height: 250, border: "1px solid rgba(60,52,137,0.08)" }}>
              <iframe
                src="https://maps.google.com/maps?q=R.%20Jo%C3%A3o%20Silvares,%20226%20-%20Brasil%C3%A2ndia,%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Sede AEBH-RJ"
              />
            </div>
          </div>

          {/* Formulário com labels externos */}
          <div>
            <h2
              className="text-xl font-black mb-6"
              style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
            >
              Envie uma Mensagem
            </h2>
            {enviado ? (
              <div
                className="bg-white rounded-2xl p-8 shadow-sm text-center"
                style={{ border: "1px solid rgba(60,52,137,0.08)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#e8f5e9" }}
                >
                  <CheckCircle size={32} style={{ color: "#2e7d32" }} />
                </div>
                <h3
                  className="font-black text-lg mb-2"
                  style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
                >
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-sm mb-5" style={{ color: "#26215C" }}>
                  Obrigado, <strong>{form.nome}</strong>! Responderemos em breve para{" "}
                  <strong>{form.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setEnviado(false);
                    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
                    setErrors({});
                  }}
                  className="px-5 py-2.5 rounded-xl font-semibold text-white text-sm hover:opacity-90 transition"
                  style={{ backgroundColor: "#3C3489", borderRadius: "12px" }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl p-7 shadow-sm space-y-4"
                style={{ border: "1px solid rgba(60,52,137,0.08)" }}
              >
                <FormField
                  id="nome"
                  label="Nome completo *"
                  helper="Como podemos chamá-lo?"
                  error={errors.nome}
                >
                  <input
                    id="nome"
                    type="text"
                    value={form.nome}
                    onChange={(e) => { setForm({ ...form, nome: e.target.value }); setErrors({ ...errors, nome: undefined }); }}
                    className={fieldStyle("nome")}
                    style={fieldBorder("nome")}
                    aria-describedby={errors.nome ? "nome-error" : undefined}
                    aria-invalid={!!errors.nome}
                  />
                </FormField>

                <FormField
                  id="email"
                  label="E-mail *"
                  helper="Usaremos apenas para responder sua mensagem."
                  error={errors.email}
                >
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                    className={fieldStyle("email")}
                    style={fieldBorder("email")}
                    aria-invalid={!!errors.email}
                  />
                </FormField>

                <FormField
                  id="assunto"
                  label="Assunto *"
                  helper="Selecione o tema da sua mensagem."
                  error={errors.assunto}
                >
                  <select
                    id="assunto"
                    value={form.assunto}
                    onChange={(e) => { setForm({ ...form, assunto: e.target.value }); setErrors({ ...errors, assunto: undefined }); }}
                    className={fieldStyle("assunto")}
                    style={{ ...fieldBorder("assunto"), backgroundColor: "#fff" }}
                    aria-invalid={!!errors.assunto}
                  >
                    <option value="">Selecione…</option>
                    <option>Quero me tornar associado</option>
                    <option>Dúvida sobre Espinha Bífida</option>
                    <option>Informações sobre doação</option>
                    <option>Voluntariado e parcerias</option>
                    <option>Outro</option>
                  </select>
                </FormField>

                <FormField
                  id="mensagem"
                  label="Mensagem *"
                  helper="Conte-nos como podemos ajudar."
                  error={errors.mensagem}
                >
                  <textarea
                    id="mensagem"
                    value={form.mensagem}
                    onChange={(e) => { setForm({ ...form, mensagem: e.target.value }); setErrors({ ...errors, mensagem: undefined }); }}
                    rows={4}
                    className={`${fieldStyle("mensagem")} resize-none`}
                    style={fieldBorder("mensagem")}
                    aria-invalid={!!errors.mensagem}
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
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

