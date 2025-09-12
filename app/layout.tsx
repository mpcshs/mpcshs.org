import "./globals.css"
import { Toaster } from "@/components/ui/toaster"


export const metadata = {
  title: "MPCSHS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
} 