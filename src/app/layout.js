import "./globals.css";
import localFont from 'next/font/local'

const yekan = localFont({
  src: [
    {
      path: '../../public/font/YekanBakhNoEn-Bold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/font/YekanBakhNoEn-Regular.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/YekanBakhNoEn-Light.woff',
      weight: '300',
      style: 'normal',
    },
  ],
})

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${yekan.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
