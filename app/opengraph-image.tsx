import { ImageResponse } from "next/og";

export const alt = "Simflow Bureau - AI, CRM & Business Automation Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse at 20% 0%, #1b1b1b 0%, #111111 55%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              background: "#ffa500",
              display: "flex",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            Simflow Bureau
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "78px",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "#ffffff",
            maxWidth: "960px",
          }}
        >
          Automate your business. Scale without the&nbsp;
          <span style={{ color: "#ffa500" }}>chaos.</span>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#bfbfbf",
              letterSpacing: "1px",
            }}
          >
            AI · CRM · Automation Agency
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "26px",
              color: "#808080",
            }}
          >
            simflowbureau.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
