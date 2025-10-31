'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const featuredMovies = [
  {
    id: 1,
    title: "أفاتار: طريق الماء",
    titleEn: "Avatar: The Way of Water",
    genre: "خيال علمي، مغامرة",
    rating: 8.1,
    duration: "192 دقيقة",
    image: "https://images.unsplash.com/photo-1489599735734-79b4212bdd73?w=400&h=600&fit=crop",
    trailer: "https://www.youtube.com/watch?v=d9MyW72ELq0",
    description: "عودة جيك سولي وعائلته إلى عالم باندورا في مغامرة ملحمية جديدة تحت الماء"
  },
  {
    id: 2,
    title: "الأسود الخارق",
    titleEn: "Black Panther: Wakanda Forever",
    genre: "أكشن، مغامرة",
    rating: 7.3,
    duration: "161 دقيقة",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop",
    trailer: "https://www.youtube.com/watch?v=_Z3QKkl1WyM",
    description: "ملكة راموندا وشوري وأوكوي وميليكا يقاتلون لحماية أمتهم من القوى العالمية المتدخلة"
  },
  {
    id: 3,
    title: "توب غان: مافريك",
    titleEn: "Top Gun: Maverick",
    genre: "أكشن، دراما",
    rating: 8.7,
    duration: "130 دقيقة",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    trailer: "https://www.youtube.com/watch?v=qSqVVswa420",
    description: "بعد أكثر من ثلاثين عاماً من الخدمة، لا يزال بيت مافريك ميتشل يدفع الحدود كطيار اختبار شجاع"
  }
]

const upcomingMovies = [
  {
    id: 4,
    title: "فاست إكس",
    titleEn: "Fast X",
    genre: "أكشن، جريمة",
    releaseDate: "2024-05-19",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "إنديانا جونز 5",
    titleEn: "Indiana Jones 5",
    genre: "مغامرة، أكشن",
    releaseDate: "2024-06-30",
    image: "https://images.unsplash.com/photo-1489599735734-79b4212bdd73?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "مهمة مستحيلة 7",
    titleEn: "Mission: Impossible 7",
    genre: "أكشن، إثارة",
    releaseDate: "2024-07-12",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&h=600&fit=crop"
  }
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedMovie, setSelectedMovie] = useState(featuredMovies[0])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMovies.length)
      setSelectedMovie(featuredMovies[(currentSlide + 1) % featuredMovies.length])
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${selectedMovie.image})`,
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-cinzel font-bold mb-4 text-gold">
              {selectedMovie.title}
            </h1>
            <p className="text-xl text-gray-300 mb-2">{selectedMovie.titleEn}</p>
            <div className="flex items-center space-x-6 space-x-reverse mb-6">
              <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ {selectedMovie.rating}
              </span>
              <span className="text-gray-300">{selectedMovie.genre}</span>
              <span className="text-gray-300">{selectedMovie.duration}</span>
            </div>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {selectedMovie.description}
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <button className="bg-gold text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105">
                احجز الآن
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all">
                شاهد التريلر
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3 space-x-reverse">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-gold' : 'bg-white/50'
              }`}
              onClick={() => {
                setCurrentSlide(index)
                setSelectedMovie(featuredMovies[index])
              }}
            />
          ))}
        </div>
      </section>

      {/* Now Showing Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cinzel font-bold text-gold mb-4">الأفلام الحالية</h2>
            <p className="text-xl text-gray-300">اكتشف أحدث الأفلام المعروضة الآن</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <div key={movie.id} className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                    ⭐ {movie.rating}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gold">{movie.title}</h3>
                  <p className="text-gray-400 mb-2">{movie.titleEn}</p>
                  <p className="text-sm text-gray-500 mb-4">{movie.genre} • {movie.duration}</p>
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">{movie.description}</p>
                  
                  <div className="flex space-x-3 space-x-reverse">
                    <button className="flex-1 bg-gold text-black py-2 rounded-lg font-semibold hover:bg-gold/90 transition-colors">
                      احجز الآن
                    </button>
                    <button className="px-4 py-2 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition-colors">
                      التفاصيل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cinzel font-bold text-gold mb-4">قريباً في السينما</h2>
            <p className="text-xl text-gray-300">ترقب أحدث الإصدارات القادمة</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingMovies.map((movie) => (
              <div key={movie.id} className="group relative overflow-hidden rounded-xl bg-gray-800 hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    قريباً
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gold">{movie.title}</h3>
                  <p className="text-gray-400 mb-2">{movie.titleEn}</p>
                  <p className="text-sm text-gray-500 mb-4">{movie.genre}</p>
                  <p className="text-gold font-semibold">تاريخ العرض: {movie.releaseDate}</p>
                  
                  <button className="w-full mt-4 border border-gold text-gold py-2 rounded-lg hover:bg-gold hover:text-black transition-colors">
                    تذكيري عند العرض
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-cinzel font-bold text-gold mb-4">لماذا لولو سينما؟</h2>
            <p className="text-xl text-gray-300">تجربة سينمائية لا تُنسى</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎬</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold">أحدث الأفلام</h3>
              <p className="text-gray-300">نعرض أحدث وأفضل الأفلام العالمية والعربية</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">👑</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold">قاعات VIP</h3>
              <p className="text-gray-300">مقاعد جلدية فاخرة مع خدمة طعام وشراب مميزة</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🔊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold">صوت وصورة عالية الجودة</h3>
              <p className="text-gray-300">تقنية Dolby Atmos وشاشات 4K للحصول على أفضل تجربة</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl">🎫</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gold">حجز سهل وسريع</h3>
              <p className="text-gray-300">احجز تذكرتك أونلاين واختر مقعدك المفضل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-cinzel font-bold text-gold mb-6">
            جاهز لتجربة سينمائية استثنائية؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            احجز تذكرتك الآن واستمتع بأحدث الأفلام في أجواء مريحة وفاخرة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gold text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold/90 transition-all transform hover:scale-105">
              احجز تذكرتك الآن
            </button>
            <button className="border-2 border-gold text-gold px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gold hover:text-black transition-all">
              تصفح جميع الأفلام
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}