import { ImageResponse } from "next/og";

export const alt = "Jaísa — Seu estilo em movimento";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "flex-start",
        background: "#174d47",
        color: "#f7f3ec",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "70px 82px",
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: 42,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Jaísa
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontFamily: "serif", fontSize: 112, lineHeight: 0.92 }}>
          Seu estilo
        </div>
        <div
          style={{
            color: "#d9f35d",
            fontFamily: "serif",
            fontSize: 112,
            lineHeight: 0.92,
          }}
        >
          em movimento.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 24,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>Moda para toda a família</span>
        <span>Sinop — MT</span>
      </div>
    </div>,
    size,
  );
}
