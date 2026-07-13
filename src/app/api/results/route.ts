import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserIdFromRequest } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const userId = getUserIdFromRequest(req);
    if (!userId) {
      return NextResponse.json({ error: "Avtorizatsiya talab qilinadi" }, { status: 401 });
    }

    const { personalityCode, axisPercentages, answers } = await req.json();

    if (!personalityCode || !axisPercentages || !answers) {
      return NextResponse.json({ error: "Ma'lumotlar to'liq emas" }, { status: 400 });
    }

    const result = await prisma.testResult.create({
      data: {
        userId,
        personalityCode,
        axisPercentages: JSON.stringify(axisPercentages),
        answers: JSON.stringify(answers),
      },
    });

    return NextResponse.json({ id: result.id, personalityCode: result.personalityCode });
  } catch {
    return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = getUserIdFromRequest(req);
    if (!userId) {
      return NextResponse.json({ error: "Avtorizatsiya talab qilinadi" }, { status: 401 });
    }

    const results = await prisma.testResult.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });

    const parsed = results.map((r) => ({
      id: r.id,
      personalityCode: r.personalityCode,
      axisPercentages: JSON.parse(r.axisPercentages),
      createdAt: r.createdAt,
    }));

    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
  }
}
