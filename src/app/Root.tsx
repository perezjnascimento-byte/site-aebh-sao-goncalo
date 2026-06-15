import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export function Root() {
  const [altoContraste, setAltoContraste] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(17);

  return (
    <div
      style={{
        fontSize: `${tamanhoFonte}px`,
        backgroundColor: altoContraste ? "#000" : undefined,
        color: altoContraste ? "#ffff00" : undefined,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ScrollRestoration />
      <Header
        altoContraste={altoContraste}
        setAltoContraste={setAltoContraste}
        tamanhoFonte={tamanhoFonte}
        setTamanhoFonte={setTamanhoFonte}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
