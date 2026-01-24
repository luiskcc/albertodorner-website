import "./globals.css";
import { Cormorant } from 'next/font/google'
import LoadingScreen from './components/LoadingScreen'
import { SidebarProvider } from './context/SidebarContext'


const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'Alberto Dorner',
  description: 'Luxury Villa Rentals, Boat Rentals, and Car Adventures',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${cormorant.className} scroll-smooth`}>
      <body className="relative">
        <SidebarProvider>
          <LoadingScreen />
          {children}
        </SidebarProvider>
      </body>
    </html>
  )
}
