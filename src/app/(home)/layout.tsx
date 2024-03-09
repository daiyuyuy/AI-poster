import "../../sytles/globals.css";
import SelfNavbar from "@/components/navbarLogout";
import Footer from "@/components/footer";
import {getCurrentUser} from "@/lib/session";
import {UserInfo} from "@/types/user";
import {redirect} from "next/navigation";

export const metadata = {
    title: 'Disney Pixar AI Posters Generator',
    description: 'This ai powered generator tool allows you to effortlessly transform your ideas and real-life photos into Disney style or Pixar style posters.',
}

export default async function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {

    return (
        <>
            <SelfNavbar/>
            {children}
            <Footer/>
        </>
    )
}
