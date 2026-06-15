const RED    = "#e4312a";
const YELLOW = "#f9ce20";
const PURPLE = "#412b6b";

// 8 large dots (alternating yellow/red) + 8 small purple dots between them
// angles: 0° = top, clockwise
const LARGE_R = 13;
const SMALL_R = 5;
const RING_R  = 60;

function buildDots() {
  const dots: { x: number; y: number; r: number; fill: string }[] = [];
  const cx = 110, cy = 102;

  for (let i = 0; i < 8; i++) {
    const largeAngle = i * 45; // 0, 45, 90, 135, 180, 225, 270, 315
    const smallAngle = largeAngle + 22.5;
    const lr = (a: number) => ({
      x: cx + RING_R * Math.sin((a * Math.PI) / 180),
      y: cy - RING_R * Math.cos((a * Math.PI) / 180),
    });

    // Large: alternating yellow (even i) and red (odd i)
    const lp = lr(largeAngle);
    dots.push({ ...lp, r: LARGE_R, fill: i % 2 === 0 ? YELLOW : RED });

    // Small purple between large dots
    const sp = lr(smallAngle);
    dots.push({ ...sp, r: SMALL_R, fill: PURPLE });
  }
  return dots;
}

const DOTS = buildDots();

const CX = 110;
const CY = 102;

interface AebhLogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export function AebhLogo({ size = 130, showText = true, className = "" }: AebhLogoProps) {
  const viewH = showText ? 255 : 195;
  const h = (size * viewH) / 220;

  return (
    <svg
      width={size}
      height={h}
      viewBox={`0 0 220 ${viewH}`}
      className={className}
      aria-label="Logo AEBH"
    >
      {/* ── Coloured dot ring ── */}
      {DOTS.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill={d.fill} />
      ))}

      {/* ── Purple figure ── */}

      {/* Head */}
      <circle cx={CX} cy={CY - 36} r={11.5} fill={PURPLE} />

      {/* Body: arms raised ~45° up-outward, narrow waist, legs spread down */}
      <path
        fill={PURPLE}
        d={`
          M ${CX}      ${CY - 24}
          C ${CX - 5}  ${CY - 24}
            ${CX - 19} ${CY - 28}
            ${CX - 32} ${CY - 36}
          C ${CX - 38} ${CY - 40}
            ${CX - 37} ${CY - 33}
            ${CX - 31} ${CY - 28}
          C ${CX - 22} ${CY - 22}
            ${CX - 13} ${CY - 14}
            ${CX - 10} ${CY - 5}
          C ${CX - 8}  ${CY + 2}
            ${CX - 9}  ${CY + 8}
            ${CX - 17} ${CY + 21}
          C ${CX - 22} ${CY + 30}
            ${CX - 22} ${CY + 37}
            ${CX - 17} ${CY + 39}
          C ${CX - 13} ${CY + 41}
            ${CX - 9}  ${CY + 37}
            ${CX - 7}  ${CY + 31}
          C ${CX - 3}  ${CY + 22}
            ${CX - 1}  ${CY + 16}
            ${CX}      ${CY + 12}
          C ${CX + 1}  ${CY + 16}
            ${CX + 3}  ${CY + 22}
            ${CX + 7}  ${CY + 31}
          C ${CX + 9}  ${CY + 37}
            ${CX + 13} ${CY + 41}
            ${CX + 17} ${CY + 39}
          C ${CX + 22} ${CY + 37}
            ${CX + 22} ${CY + 30}
            ${CX + 17} ${CY + 21}
          C ${CX + 9}  ${CY + 8}
            ${CX + 8}  ${CY + 2}
            ${CX + 10} ${CY - 5}
          C ${CX + 13} ${CY - 14}
            ${CX + 22} ${CY - 22}
            ${CX + 31} ${CY - 28}
          C ${CX + 37} ${CY - 33}
            ${CX + 38} ${CY - 40}
            ${CX + 32} ${CY - 36}
          C ${CX + 19} ${CY - 28}
            ${CX + 5}  ${CY - 24}
            ${CX}      ${CY - 24}
          Z
        `}
      />

      {/* ── AEBH text ── */}
      {showText && (
        <text
          x={CX}
          y={238}
          textAnchor="middle"
          fill={PURPLE}
          style={{
            fontFamily: "'Arial Black', 'Arial Bold', Arial, sans-serif",
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: 3,
          }}
        >
          AEBH
        </text>
      )}
    </svg>
  );
}
