import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/providers/ThemeProvider'


const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['vietnamese'] })

export const metadata = {
  title: 'Charity App',
  description: 'The best charity app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className} >
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container fontFamily'>
              <div className='wrapper'>
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
