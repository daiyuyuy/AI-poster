import "../../sytles/globals.css";
import SelfNavbar from "@/components/navbarLogout";
import Footer from "@/components/footer";
import {getCurrentUser} from "@/lib/session";
import {UserInfo} from "@/types/user";
import {redirect} from "next/navigation";

export const metadata = {
  title: 'Playground - Generator disney pixar ai posters',
  description: 'Playground, easy way to free use and generator disney pixar ai posters, disney ai covers',
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
    const user = (await getCurrentUser()) as UserInfo;
    if (user?.username) {
        redirect('/apps')
    }
    else {
        return (
            <>
                <SelfNavbar/>
                {children}
                <Footer/>
            </>
        )
    }
}
