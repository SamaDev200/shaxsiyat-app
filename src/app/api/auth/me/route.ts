import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getUserIdFromRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const userId = getUserIdFromRequest(req);
    if (!userId) {
      return NextResponse.json({ error: "Avtorizatsiya talab qilinadi" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, createdAt: true },
    });

    if (!user) {
      return NextResponse.json({ error: "Foydalanuvchi topilmadi" }, { status: 404 });
    }

    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ error: "Server xatosi" }, { status: 500 });
  }
}
