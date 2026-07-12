import { NextRequest, NextResponse } from "next/server";
import { eq, sql } from "drizzle-orm";

import { db } from "@/db";
import { visitors } from "@/db/schema";

import { hashIP } from "@/lib/visitor";

export async function GET(request: NextRequest) {
  try {
    const forwarded =
      request.headers.get("x-forwarded-for");

    const ip =
      forwarded?.split(",")[0].trim() ??
      "unknown";

    const ipHash = hashIP(ip);

    const existing = await db
      .select()
      .from(visitors)
      .where(eq(visitors.ipHash, ipHash))
      .limit(1);

    if (existing.length === 0) {
      await db.insert(visitors).values({
        ipHash,
      });
    }

    const result = await db
      .select({
        count: sql<number>`count(*)`,
      })
      .from(visitors);

    return NextResponse.json({
      count: Number(result[0].count),
    });
  } catch {
    return NextResponse.json(
      {
        count: 0,
      },
      {
        status: 500,
      }
    );
  }
}