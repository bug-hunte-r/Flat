import "./globals.css";
import localFont from 'next/font/local'

const yeakn = localFont({
  src: '../../public/font/YekanBakh-VF.ttf',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${yeakn.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
