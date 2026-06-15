/**
 * AebhLogoReal - logos AEBH (novos arquivos 2024)
 *
 * variant "colorido"  - fundos claros/brancos  (Header nav, Login, páginas)
 * variant "positivo"  - fundos escuros/roxo    (Footer, super-header, seções escuras)
 */

type LogoVariant = "colorido" | "positivo";

interface AebhLogoRealProps {
  variant?: LogoVariant;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}

import logoColoridoUrl from "../../imports/logo-colorido.png";
import logoBrancoUrl from "../../imports/logo-branco.png";

function LogoColorido({ height, className, style }: AebhLogoRealProps) {
  return (
    <img 
      src={logoColoridoUrl} 
      alt="Logo AEBH-RJ colorido" 
      height={height}
      className={className}
      style={{ height, width: "auto", display: "block", ...style }}
    />
  );
}

function LogoPositivo({ height, className, style }: AebhLogoRealProps) {
  return (
    <img 
      src={logoBrancoUrl} 
      alt="Logo AEBH-RJ branco" 
      height={height}
      className={className}
      style={{ height, width: "auto", display: "block", ...style }}
    />
  );
}

export function AebhLogoReal({ variant = "colorido", height = 56, className = "", style }: AebhLogoRealProps) {
  if (variant === "positivo") return <LogoPositivo height={height} className={className} style={style} />;
  return <LogoColorido height={height} className={className} style={style} />;
}
