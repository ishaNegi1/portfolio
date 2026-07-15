import { NextResponse } from "next/server";
import { sql } from "drizzle-orm";

import { db } from "@/db";
import { visitors } from "@/db/schema";

export async function GET() {
  try {
    // Count every visit
    await db.insert(visitors).values({});

    const result = await db
      .select({
        count: sql<number>`count(*)`,
      })
      .from(visitors);

    return NextResponse.json({
      count: Number(result[0].count),
    });
  } catch (error) {
    console.error(error);

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