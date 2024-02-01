import {getCurrentUser} from "./lib/session";
import {NextResponse} from 'next/server'
import type { NextRequest } from "next/server";
// import {UserInfo} from "./types/user";
// export {default} from "next-auth/middleware"


// export async function middleware1(request) {
//
//     if (request.nextUrl.pathname === '/playground') {
//         const user = (await getCurrentUser()) as UserInfo;
//         if (user?.username) {
//             return NextResponse.redirect('/apps');
//         }
//     }
// }

export default function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    if (request.nextUrl.pathname.startsWith("/blogs/"))
        requestHeaders.set("x-next-article-slug", request.nextUrl.pathname.replace("/blogs/", ""));

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: "/blogs/:path*",
};
