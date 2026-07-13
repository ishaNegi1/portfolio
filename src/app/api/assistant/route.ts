import { NextRequest, NextResponse } from "next/server";

import portfolioKnowledge from "@/data/portfolioKnowledge";

import { askOpenRouter } from "@/lib/openrouter";

export async function POST(
  request: NextRequest
) {
  try {
    const { message } =
      await request.json();

    const answer =
      await askOpenRouter(
        portfolioKnowledge,
        message
      );

    return NextResponse.json({
      answer,
    });
  } catch {
    return NextResponse.json(
      {
        answer:
          "Sorry, something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}