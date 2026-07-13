import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroData from "../data/heroData";
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showImage, setShowImage] = useState(true);

  const heroSlider = heroData[currentIndex];
  const changeSlide = (direction) => {
    setShowImage(false);
    setTimeout(() => {
      if (direction === "next") {
        setCurrentIndex((prev) => (prev + 1) % heroData.length);
      } else {
        setCurrentIndex((prev) =>
          prev === 0 ? heroData.length - 1 : prev - 1,
        );
      }
      setShowImage(true);
    }, 500);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        changeSlide("next");
      } else if (e.key === "ArrowLeft") {
        changeSlide("prev");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const intervalRef = useRef(null);
  const startSlider = () => {
    clearInterval(intervalRef.current);
    const interval = setInterval(() => {
      changeSlide("next");
    }, 3000);
    intervalRef.current = interval;
  };
  const handlemouseHover = () => {
    clearInterval(intervalRef.current);
  };
  const handleMouseLeave = () => {
    startSlider();
  };
  useEffect(() => {
    startSlider();
    return () => clearInterval(intervalRef.current);
  }, []);

  const touchStart = useRef(0);
  const handleTouchStart = (e)=>{
    touchStart.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e)=>{
    const end = e.changedTouches[0].clientX
    const diff = touchStart.current - end;
    console.log(diff)
    if(diff > 50){
      changeSlide("next")
    }else if(diff < -50 ){
      changeSlide("prev")
    }
  }
  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={handlemouseHover}
      onMouseLeave={handleMouseLeave}
      className="relative h-[30vh] sm:h-[55vh] md:h-[65vh] bg-gradient-to-b from-green-600 via-green-400 to-green-200"
      style={{ background: heroSlider.bgColor }}
    >
      <button
        onClick={() => changeSlide("prev")}
        className={`hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2
    h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg
    transition`}
      >
        <ChevronLeft size={24} />
      </button>
      <div className="max-w-7xl mx-auto h-full sm:h-full flex items-center justify-between px-4">
        <div className="w-1/2 flex flex-col gap-2">
          <span className="text-red-500 font-semibold uppercase tracking-widest">
            {heroSlider.brand}
          </span>

          <h1 className="text-xl sm:text-3xl md:text-6xl font-bold leading-tight">
            {heroSlider.title}
          </h1>

          <p className="text-gray-700 text-xs sm:text-base md:text-lg">
            {heroSlider.subtitle}
          </p>

          <button className="bg-black text-white w-fit px-3 py-2 sm:px-4 rounded-lg text-xs sm:text-base hover:bg-gray-800 transition">
            {heroSlider.buttonText}
          </button>
        </div>
        <div className="w-1/2 h-[180px] sm:h-[250px] md:h-[400px] flex items-center justify-center">
          <img
            src={heroSlider.img}
            alt={heroSlider.title}
            className={`w-full h-full object-contain transition-opacity duration-500 ${showImage ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      </div>
      <button
        onClick={() => changeSlide("next")}
        className={`hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2
    h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg
    transition
`}
      >
        <ChevronRight size={24} />
      </button>
      <div className="flex items-center justify-center gap-1 sm:gap-2 mt-4">
        {heroData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 sm:w-8 bg-amber-600"
                : "w-2 bg-white border border-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
