import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 45%, #111827 100%)",
          color: "#f8fafc",
          padding: 64,
          fontSize: 56,
          fontWeight: 700
        }}
      >
        <span style={{ color: "#3b82f6", fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          AI-Native Meta Dashboard
        </span>
        <span style={{ marginTop: 24 }}>Shizzle Dashboard</span>
        <span style={{ marginTop: 8, color: "#8b5cf6" }}>Built by AI</span>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
