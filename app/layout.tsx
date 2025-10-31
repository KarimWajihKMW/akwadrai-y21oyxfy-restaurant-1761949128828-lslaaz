import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'لولو سينما - تجربة سينمائية استثنائية',
  description: 'احجز تذاكرك الآن واستمتع بأحدث الأفلام في قاعات VIP مع أفضل تقنيات الصوت والصورة',
  keywords: 'سينما, أفلام, حجز تذاكر, VIP, ترفيه',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} ${cinzel.variable} font-sans bg-black text-white`}>
        <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gold/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8 space-x-reverse">
                <h1 className="text-2xl font-cinzel font-bold text-gold">لولو سينما</h1>
                <nav className="hidden md:flex space-x-6 space-x-reverse">
                  <a href="/" className="hover:text-gold transition-colors">الرئيسية</a>
                  <a href="/movies" className="hover:text-gold transition-colors">الأفلام</a>
                  <a href="/showtimes" className="hover:text-gold transition-colors">أوقات العرض</a>
                  <a href="/offers" className="hover:text-gold transition-colors">العروض</a>
                </nav>
              </div>
              <div className="flex items-center space-x-4 space-x-reverse">
                <button className="bg-gold text-black px-4 py-2 rounded-lg hover:bg-gold/90 transition-colors">
                  تسجيل الدخول
                </button>
                <button className="border border-gold text-gold px-4 py-2 rounded-lg hover:bg-gold hover:text-black transition-colors">
                  إنشاء حساب
                </button>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 border-t border-gold/20 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-cinzel font-bold text-gold mb-4">لولو سينما</h3>
                <p className="text-gray-400">تجربة سينمائية استثنائية مع أحدث التقنيات وأفضل الخدمات</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">روابط سريعة</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/movies" className="hover:text-gold transition-colors">الأفلام</a></li>
                  <li><a href="/showtimes" className="hover:text-gold transition-colors">أوقات العرض</a></li>
                  <li><a href="/tickets" className="hover:text-gold transition-colors">أسعار التذاكر</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">خدمة العملاء</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/contact" className="hover:text-gold transition-colors">اتصل بنا</a></li>
                  <li><a href="/faq" className="hover:text-gold transition-colors">الأسئلة الشائعة</a></li>
                  <li><a href="/support" className="hover:text-gold transition-colors">الدعم الفني</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">تابعنا</h4>
                <div className="flex space-x-4 space-x-reverse">
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors">فيسبوك</a>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors">تويتر</a>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors">انستغرام</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 لولو سينما. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}