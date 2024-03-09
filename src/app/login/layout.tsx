import "../../sytles/globals.css";

export const metadata = {
  title: 'Login - Generator disney pixar ai posters',
  description: 'Login, The first step to unleash your dreams is to register an account with us, generator disney pixar ai posters',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
