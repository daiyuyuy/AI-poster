import {getCurrentUser} from "./lib/session";
import {NextResponse} from 'next/server'
// import {UserInfo} from "./types/user";
// export {default} from "next-auth/middleware"


// export async function middleware1(request) {
//
//     if (request.nextUrl.pathname === '/playground') {
//         const user = (await getCurrentUser()) as UserInfo;
//         if (user.username) {
//             return NextResponse.redirect('/apps');
//         }
//     }
// }

export function middleware(){

}
