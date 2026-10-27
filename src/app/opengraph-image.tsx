import { ImageResponse } from "next/og";

export const alt = "James Muguiyi, Forward-Deployed / Applied AI Engineer";
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
          justifyContent: "center",
          padding: "80px",
          background: "#000",
          color: "#fff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 700 }}>James Muguiyi</div>
        <div style={{ fontSize: 40, color: "#d1d5db", marginTop: 24 }}>
          Forward-Deployed / Applied AI Engineer
        </div>
        <div style={{ fontSize: 28, color: "#9ca3af", marginTop: 40 }}>
          Agents, integrations and automations · New York, NY · jmuguiyi.com
        </div>
      </div>
    ),
    size
  );
}
