import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { DashboardCopilotProvider } from "@/components/CopilotProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shizzle Dashboard",
  description: "Meta-dashboard documenting its own AI-assisted creation process."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const copilotEnabled = Boolean(process.env.OPENAI_API_KEY);

  return (
    <html lang="en">
      <body>
        <DashboardCopilotProvider copilotEnabled={copilotEnabled}>{children}</DashboardCopilotProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
