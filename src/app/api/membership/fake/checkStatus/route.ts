import { checkStatus } from "@/lib/membership/checkStatus";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { userId } = await req.json();
        const res = await checkStatus({ userId })
        return NextResponse.json(res)
    } catch (e) {
        return NextResponse.json({ error: "failed to upgrade" }, { status: 500 });
    }
}