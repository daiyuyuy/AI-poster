import { upgrade } from "@/lib/membership/upgrade";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { userId, upgradeType } = await req.json();
        const res = await upgrade({ userId }, upgradeType) // upgrade是一个内部方法，后续接入支付可直接调用
        return NextResponse.json(res)
    } catch (e) {
        return NextResponse.json({ error: "failed to upgrade" }, { status: 500 });
    }
}