import { useState } from "react";
import { Link } from "react-router";
import { AebhLogoReal } from "../components/AebhLogoReal";
import { Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [logado, setLogado] = useState(false);
  const [esqueceu, setEsqueceu] = useState(false);
  const [emailRecup, setEmailRecup] = useState("");
  const [recuperado, setRecuperado] = useState(false);
  const [erro, setErro] = useState("");

  if (logado) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#FDF6EC" }}>
        <div
          className="bg-white rounded-3xl p-10 shadow-lg text-center max-w-md w-full"
          style={{ border: "1px solid rgba(60,52,137,0.08)" }}
        >
          <div className="flex justify-center mb-5">
            <AebhLogoReal variant="colorido" height={64} />
          </div>
          <h2
            className="text-2xl font-black mb-2"
            style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Bem-vindo(a) de volta!
          </h2>
          <p className="mb-2" style={{ color: "#26215C" }}>
            Você está na <strong>Área do Associado</strong>.
          </p>
          <p className="text-sm mb-6" style={{ color: "#7a6e5a" }}>
            Em breve esta área terá materiais exclusivos, documentos e comunicados internos.
          </p>
          <div className="space-y-3 text-left mb-6">
            <div className="rounded-xl p-4" style={{ backgroundColor: "#FDF6EC" }}>
              <div className="text-xs mb-1" style={{ color: "#7a6e5a" }}>Logado como</div>
              <div className="font-semibold text-sm" style={{ color: "#3C3489" }}>{email}</div>
            </div>
          </div>
          <button
            onClick={() => setLogado(false)}
            className="w-full py-3 rounded-xl font-semibold text-white hover:opacity-90 transition"
            style={{ backgroundColor: "#E8683A", borderRadius: "12px" }}
          >
            Sair (Logout)
          </button>
        </div>
      </div>
    );
  }

  if (esqueceu) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: "#FDF6EC" }}>
        <div
          className="bg-white rounded-3xl p-10 shadow-lg max-w-md w-full"
          style={{ border: "1px solid rgba(60,52,137,0.08)" }}
        >
          <h2
            className="text-xl font-black mb-2"
            style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Recuperar senha
          </h2>
          <p className="text-sm mb-5" style={{ color: "#26215C" }}>
            Informe seu e-mail e enviaremos as instruções de redefinição.
          </p>
          {recuperado ? (
            <div className="text-center py-4">
              <p className="font-semibold mb-4" style={{ color: "#2e7d32" }}>
                ✅ E-mail enviado para <strong>{emailRecup}</strong>
              </p>
              <button
                onClick={() => { setEsqueceu(false); setRecuperado(false); }}
                className="text-sm underline font-semibold"
                style={{ color: "#3C3489" }}
              >
                Voltar ao login
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setRecuperado(true); }} className="space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="recup-email" className="text-sm font-bold" style={{ color: "#3C3489" }}>
                  E-mail cadastrado *
                </label>
                <input
                  id="recup-email"
                  type="email"
                  value={emailRecup}
                  onChange={(e) => setEmailRecup(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={{ borderColor: "rgba(60,52,137,0.2)" }}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-white hover:opacity-90 transition"
                style={{ backgroundColor: "#F5A623", borderRadius: "12px" }}
              >
                Enviar instruções
              </button>
              <button
                type="button"
                onClick={() => setEsqueceu(false)}
                className="w-full text-sm text-center font-semibold underline"
                style={{ color: "#3C3489" }}
              >
                Voltar ao login
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{ backgroundColor: "#FDF6EC" }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-5">
            <AebhLogoReal variant="colorido" height={72} />
          </div>
          <h1
            className="text-2xl font-black"
            style={{ color: "#3C3489", fontFamily: "var(--font-display, 'Playfair Display', serif)" }}
          >
            Área do Associado
          </h1>
          <p className="text-sm mt-1" style={{ color: "#26215C" }}>
            Acesse com seu e-mail e senha cadastrados
          </p>
        </div>

        <div
          className="bg-white rounded-2xl p-8 shadow-sm"
          style={{ border: "1px solid rgba(60,52,137,0.08)" }}
        >
          {erro && (
            <div
              className="mb-4 p-3 rounded-xl flex items-center gap-2 text-sm font-semibold"
              style={{ backgroundColor: "#fff5f2", color: "#E8683A", border: "1px solid #E8683A30" }}
              role="alert"
            >
              <AlertCircle size={16} />
              {erro}
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email || !senha) {
                setErro("Preencha todos os campos para continuar.");
                return;
              }
              setErro("");
              setLogado(true);
            }}
            noValidate
            className="space-y-4"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="login-email" className="text-sm font-bold" style={{ color: "#3C3489" }}>
                E-mail *
              </label>
              <div className="relative">
                <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#7a6e5a" }} />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={{ borderColor: "rgba(60,52,137,0.2)" }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="login-senha" className="text-sm font-bold" style={{ color: "#3C3489" }}>
                Senha *
              </label>
              <div className="relative">
                <Lock size={17} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#7a6e5a" }} />
                <input
                  id="login-senha"
                  type={mostrarSenha ? "text" : "password"}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  className="w-full pl-11 pr-11 py-3 rounded-xl border-2 outline-none text-sm transition focus:border-[#3C3489]"
                  style={{ borderColor: "rgba(60,52,137,0.2)" }}
                />
                <button
                  type="button"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition"
                  style={{ color: "#7a6e5a" }}
                  aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
                >
                  {mostrarSenha ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={() => setEsqueceu(true)}
                className="text-xs underline font-semibold"
                style={{ color: "#3C3489" }}
              >
                Esqueci minha senha
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl font-black text-white transition hover:opacity-90 active:scale-95 shadow-md"
              style={{
                backgroundColor: "#F5A623",
                borderRadius: "14px",
                boxShadow: "0 4px 14px rgba(245,166,35,0.35)",
              }}
            >
              Entrar
            </button>
          </form>

          <div
            className="mt-6 pt-5 text-center text-sm"
            style={{ borderTop: "1px solid rgba(60,52,137,0.1)", color: "#26215C" }}
          >
            Ainda não é associado?{" "}
            <Link to="/contato" className="font-black underline" style={{ color: "#F5A623" }}>
              Entre em contato
            </Link>
          </div>
        </div>

        <p className="text-center text-xs mt-5" style={{ color: "#7a6e5a" }}>
          🔒 Seus dados estão protegidos.{" "}
          <Link to="/" className="underline">Voltar ao site</Link>
        </p>
      </div>
    </div>
  );
}
