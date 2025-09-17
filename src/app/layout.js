import Navbar from "@/components/templates/Navbar";
import "./globals.css";
import localFont from 'next/font/local'
import Footer from "@/components/templates/Footer";

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
        <div className="container">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
