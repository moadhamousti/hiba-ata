import './login.css';
import { Inter } from 'next/font/google';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='min-h-[auto]'>
              <div className='max-w-screen-2xl ml-auto mr-auto pl-[80px] pr-[80px]'>
                {children}
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
