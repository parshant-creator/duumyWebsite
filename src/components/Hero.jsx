import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImage = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Smart Watches Collection",
      subtitle: "Premium Quality Smart Watches",
      brand: "Apple",
      buttonText: "Shop Now",
      bgColor: "#F5F5F5",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Running Shoes",
      subtitle: "Comfort Meets Performance",
      brand: "Nike",
      buttonText: "Explore",
      bgColor: "#FFF4E6",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723",
      title: "Summer Fashion",
      subtitle: "Up to 50% OFF",
      brand: "Zara",
      buttonText: "Buy Now",
      bgColor: "#FDECEC",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518",
      title: "Men's T-Shirts",
      subtitle: "Latest Trend Collection",
      brand: "H&M",
      buttonText: "View Collection",
      bgColor: "#EEF7FF",
    },
  ];

  const heroSlider = heroImage[currentIndex];
const handleNextButton = () => {
  setCurrentIndex((prev) => (prev + 1) % heroImage.length);
};
  const handlePrevButton = () => {
    setCurrentIndex((prev)=>prev === 0? heroImage.length -1 : prev -1)
  };
    useEffect(()=>{
    const handleKeyDown = (e)=>{
      if(e.key ==="ArrowRight"){
        handleNextButton();
      }else if(e.key ==="ArrowLeft"){
        handlePrevButton();
      }
    }
    window.addEventListener("keydown",handleKeyDown);
    return ()=>{
      window.removeEventListener("keydown",handleKeyDown);
    } 
  },[]); 
   useEffect(()=>{
    const interval = setInterval(()=>{
      handleNextButton()
    },3000)
  return ()=> clearInterval(interval)
},[])
  return (
  <section className="relative h-[40vh] sm:h-[55vh] md:h-[65vh] bg-gradient-to-b from-green-600 via-green-400 to-green-200"
  style={{background:heroSlider.bgColor}}
  >
 <button
    onClick={handlePrevButton}
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
    className="w-full h-full object-contain"
  />
</div>
  </div>
   <button
    onClick={handleNextButton}
    className={`hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2
    h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg
    transition
`}
  >
    <ChevronRight size={24} />
  </button>
  <div className="flex items-center justify-center gap-1 sm:gap-2 mt-4">
  {heroImage.map((item, index) => (
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
