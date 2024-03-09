import "../../sytles/globals.css";
import SelfNavbar from "@/components/navbarLogout";
import Footer from "@/components/footer";

export const metadata = {
  title: 'Pricing - Generator disney pixar ai posters',
  description: 'Little money, big dreams. Easy way to generator disney pixar ai posters',
}

export default function Layout({
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
