import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      where: { isActive: true },
      orderBy: { orderNum: "asc" },
      select: { id: true, text: true, axis: true, direction: true },
    });

    return NextResponse.json(questions);
  } catch {
    return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
  }
}
