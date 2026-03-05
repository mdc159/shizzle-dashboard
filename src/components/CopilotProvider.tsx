"use client";

import { useMemo } from "react";
import {
  CopilotKit,
  useCopilotAction,
  useCopilotReadable,
} from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

import { buildTimeline, costBreakdown, totalEstimatedCost } from "@/data/buildData";

type Props = {
  children: React.ReactNode;
  copilotEnabled: boolean;
};

function BuildContextRegistration() {
  const readablePayload = useMemo(
    () => ({
      timeline: buildTimeline,
      costs: costBreakdown,
      totalEstimatedCost
    }),
    []
  );

  useCopilotReadable({
    description: "Timeline and cost data for the shizzle dashboard build process.",
    value: readablePayload
  });

  useCopilotAction({
    name: "explain_build_step",
    description: "Explain what happened in a given build step number.",
    parameters: [
      {
        name: "stepNumber",
        type: "number",
        description: "Timeline step ID to explain",
        required: true
      }
    ],
    handler: async (params: { stepNumber: number }): Promise<string> => {
      const matched = buildTimeline.find((step) => step.id === params.stepNumber);

      if (!matched) {
        return `Step ${params.stepNumber} does not exist. Try a number from 1 to ${buildTimeline.length}.`;
      }

      return `${matched.title}. Time: ${matched.timestamp}. Duration: ${matched.duration}. Tool: ${matched.tool}. ${matched.description}`;
    }
  });

  return null;
}

export function DashboardCopilotProvider({ children, copilotEnabled }: Props) {
  const missingOpenAiKey = !copilotEnabled;

  return (
    <CopilotKit runtimeUrl="/api/copilotkit">
      <BuildContextRegistration />
      {missingOpenAiKey ? (
        <div className="fixed bottom-4 right-4 z-50 max-w-xs rounded-lg border border-amber-500/50 bg-amber-500/10 px-3 py-2 text-xs text-amber-300">
          OPENAI_API_KEY is not configured on the server. Copilot is in limited demo mode.
        </div>
      ) : null}
      <CopilotSidebar
        defaultOpen={false}
        instructions="You are helping users understand how this dashboard was built. Prioritize the timeline and cost data."
        labels={{
          title: "Shizzle Copilot",
          initial: "Ask how this dashboard was built, deployed, or costed."
        }}
      />
      {children}
    </CopilotKit>
  );
}
