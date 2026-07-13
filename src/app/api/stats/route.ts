import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const totalUsers = await prisma.user.count();
    const totalTests = await prisma.testResult.count();

    // Eng ko'p chiqadigan shaxsiyat turlari
    const typeDistribution = await prisma.testResult.groupBy({
      by: ["personalityCode"],
      _count: { personalityCode: true },
      orderBy: { _count: { personalityCode: "desc" } },
    });

    const topTypes = typeDistribution.slice(0, 5).map((t) => ({
      code: t.personalityCode,
      count: t._count.personalityCode,
    }));

    return NextResponse.json({
      totalUsers,
      totalTests,
      topTypes,
    });
  } catch {
    return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
  }
}
