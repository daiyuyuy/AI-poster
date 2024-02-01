import { signOut } from "next-auth/react"
import {NextRequest} from "next/server";
import {redirect} from "next/navigation";

export async function GET(req: NextRequest) {
    // fixme logout 暂时只是做个样子，并没有真正成功
    signOut()
    return redirect('/home')
}

