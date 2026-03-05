import { NextRequest, NextResponse } from "next/server";
import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint
} from "@copilotkit/runtime";

const runtime = new CopilotRuntime();

// OpenAIAdapter auto-reads OPENAI_API_KEY from env when no openai instance is passed
const serviceAdapter = process.env.OPENAI_API_KEY
  ? new OpenAIAdapter({
      model: process.env.COPILOTKIT_OPENAI_MODEL || "gpt-4o-mini",
    })
  : null;

export async function POST(req: NextRequest) {
  if (!serviceAdapter) {
    return NextResponse.json(
      {
        error:
          "OPENAI_API_KEY is not configured. Set it in your environment to enable Copilot runtime responses."
      },
      { status: 503 }
    );
  }

  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    endpoint: "/api/copilotkit",
    runtime,
    serviceAdapter
  });

  return handleRequest(req);
}
