import iphone15 from "../assets/images/iphone-15.jpg";
import macbookAirM3 from "../assets/images/macbookAirM3.jpg";
import samsung24 from "../assets/images/samsung24.avif";
import sonyWH from "../assets/images/Sony WH-1000XM5.avif";
import nikeAirMax from "../assets/images/Nike Air Max.avif";
import casio from "../assets/images/Casio Edifice.avif";
import mensHoodie from "../assets/images/Men's Hoodie.avif";
import womenKurti from "../assets/images/Women's Kurti.avif";
import lipstickSet from "../assets/images/Lipstick Set.avif";
import WoodenChai from "../assets/images/Wooden Chai.avif";
import remoteControlCar from "../assets/images/RemoteControlCar.webp";
import KidsSchoolBag from "../assets/images/Kids SchoolBag.avif";
const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    image: iphone15,
    category: "Mobile",
    rating: 4.8,
    inStock: true,
    discount: 10,
    brand: "Apple",
    description:
      "The Apple iPhone 15 features a 6.1-inch Super Retina XDR display, A16 Bionic chip, 48MP main camera, Dynamic Island, USB-C connectivity, and all-day battery life. It delivers smooth performance, excellent photography, and a premium design for everyday use.",
  },
  {
    id: 2,
    name: "iPhone 15 Plus",
    price: 89999,
    image: iphone15,
    category: "Mobile",
    rating: 4.7,
    inStock: true,
    discount: 12,
    brand: "Apple",
    description:
      "The Apple iPhone 15 Plus features a stunning 6.7-inch Super Retina XDR display, A16 Bionic chip, and a 48MP advanced camera system. With long-lasting battery life, Dynamic Island, and USB-C charging, it is built for smooth performance, photography, and everyday productivity.",
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 129999,
    image: iphone15,
    category: "Mobile",
    rating: 4.9,
    inStock: true,
    discount: 5,
    brand: "Apple",
    description:
      "The iPhone 15 Pro is powered by the A17 Pro chip and features a lightweight titanium design with a 48MP Pro camera system. It delivers exceptional gaming performance, professional photography, and premium build quality for power users.",
  },
  {
    id: 4,
    name: "iPhone 16",
    price: 84999,
    image: iphone15,
    category: "Mobile",
    rating: 4.8,
    inStock: true,
    discount: 8,
    brand: "Apple",
    description:
      "The Apple iPhone 16 offers a vibrant Super Retina display, next-generation performance, improved cameras, and intelligent AI-powered features. It combines a sleek design with reliable battery life for work, entertainment, and everyday use.",
  },
  {
    id: 5,
    name: "Samsung Galaxy S24",
    price: 74999,
    image: samsung24,
    category: "Mobile",
    rating: 4.8,
    inStock: true,
    discount: 15,
    brand: "Samsung",
    description:
      "The Samsung Galaxy S24 features a brilliant AMOLED display, powerful Snapdragon processor, and a versatile triple-camera setup. It provides smooth performance, advanced Galaxy AI features, and long-lasting battery life in a premium design.",
  },
  {
    id: 6,
    name: "Samsung Galaxy S24+",
    price: 82999,
    image: samsung24,
    category: "Mobile",
    rating: 4.7,
    inStock: true,
    discount: 10,
    brand: "Samsung",
    description:
      "The Samsung Galaxy S24+ comes with a larger AMOLED display, powerful performance, and enhanced Galaxy AI capabilities. Its high-resolution cameras, fast charging, and premium build make it an excellent choice for productivity and entertainment.",
  },
  {
    id: 7,
    name: "Samsung Galaxy S25",
    price: 89999,
    image: samsung24,
    category: "Mobile",
    rating: 4.9,
    inStock: true,
    discount: 5,
    brand: "Samsung",
    description:
      "The Samsung Galaxy S25 delivers flagship performance with the latest processor, intelligent AI features, and an advanced camera system. Its premium display, all-day battery, and smooth user experience make it ideal for everyday use.",
  },
  {
    id: 8,
    name: "OnePlus 13",
    price: 65999,
    image: samsung24,
    category: "Mobile",
    rating: 4.6,
    inStock: true,
    discount: 10,
    brand: "OnePlus",
    description:
      "The OnePlus 13 combines a fast Snapdragon processor, smooth 120Hz display, and Hasselblad-powered cameras for an exceptional smartphone experience. It offers ultra-fast charging, premium design, and reliable all-day performance.",
  },
  {
    id: 9,
    name: "Google Pixel 9",
    price: 74999,
    image: samsung24,
    category: "Mobile",
    rating: 4.8,
    inStock: true,
    discount: 8,
    brand: "Google",
    description:
      "The Google Pixel 9 features a clean Android experience, Google's latest AI features, and an industry-leading camera system. It captures stunning photos, offers smooth performance, and receives timely software and security updates.",
  },
  {
    id: 10,
    name: "Nothing Phone 3",
    price: 49999,
    image: samsung24,
    category: "Mobile",
    rating: 4.5,
    inStock: true,
    discount: 12,
    brand: "Nothing",
    description:
      "The Nothing Phone 3 stands out with its unique transparent design and Glyph interface. It offers a smooth AMOLED display, reliable performance, clean Nothing OS, and excellent cameras, making it a stylish and capable everyday smartphone.",
  },
  {
    id: 11,
    name: "Xiaomi 15",
    price: 55999,
    image: samsung24,
    category: "Mobile",
    rating: 4.4,
    inStock: true,
    discount: 18,
    brand: "Xiaomi",
    // id: 11
    description:
      "The Xiaomi 15 features a vibrant AMOLED display, flagship Snapdragon processor, and Leica-powered camera system for stunning photography. With fast charging, premium design, and smooth HyperOS performance, it delivers an excellent flagship smartphone experience.",
  },
  {
    id: 12,
    name: "Realme GT 7",
    price: 39999,
    image: samsung24,
    category: "Mobile",
    rating: 4.4,
    inStock: true,
    discount: 20,
    brand: "Realme",
    description:
      "The Realme GT 7 offers powerful performance with a high-refresh-rate AMOLED display and a fast flagship chipset. Its large battery, ultra-fast charging, and advanced cooling system make it perfect for gaming, streaming, and everyday multitasking.",
  },
  {
    id: 13,
    name: "Vivo X200",
    price: 62999,
    image: samsung24,
    category: "Mobile",
    rating: 4.5,
    inStock: false,
    discount: 10,
    brand: "Vivo",
    description:
      "The Vivo X200 combines a premium curved display with ZEISS-powered cameras for exceptional photography and videography. It delivers smooth performance, reliable battery life, and a stylish design built for modern smartphone users.",
  },
  {
    id: 14,
    name: "Oppo Find X8",
    price: 69999,
    image: samsung24,
    category: "Mobile",
    rating: 4.6,
    inStock: true,
    discount: 7,
    brand: "Oppo",
    description:
      "The OPPO Find X8 features a premium AMOLED display, flagship-level performance, and an advanced Hasselblad camera system. With AI-powered photography, fast charging, and a sleek design, it offers an outstanding smartphone experience.",
    // id 14
  },
  {
    id: 15,
    name: "Motorola Edge 60",
    price: 35999,
    image: samsung24,
    category: "Mobile",
    rating: 4.3,
    inStock: true,
    discount: 15,
    brand: "Motorola",
    description:
      "The Motorola Edge 60 comes with a smooth pOLED display, clean Android experience, and reliable Snapdragon performance. Its high-resolution camera, fast charging support, and lightweight design make it a great choice for everyday use.",
  },

  {
    id: 16,
    name: "MacBook Air M3",
    price: 114999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.9,
    inStock: true,
    discount: 8,
    brand: "Apple",
    description:
      "The MacBook Air M3 features Apple's powerful M3 chip, a stunning Liquid Retina display, and an ultra-thin lightweight design. It delivers exceptional battery life, silent performance, and seamless multitasking for students, professionals, and creators.",
    // id 16
  },
  {
    id: 17,
    name: "MacBook Pro M4",
    price: 169999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.9,
    inStock: true,
    discount: 5,
    brand: "Apple",
    description:
      "The MacBook Pro M4 is designed for professionals who need extreme performance for video editing, software development, and creative workflows. It features the powerful M4 chip, brilliant Liquid Retina XDR display, and all-day battery life.",
  },
  {
    id: 18,
    name: "Dell XPS 15",
    price: 149999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.8,
    inStock: true,
    discount: 10,
    brand: "Dell",
    description:
      "The Dell XPS 15 combines premium craftsmanship with high-end performance, featuring a stunning InfinityEdge display and powerful Intel processor. It is built for professionals, creators, and users who demand speed, reliability, and portability.",
    // id 18
  },
  {
    id: 19,
    name: "HP Spectre x360",
    price: 139999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.7,
    inStock: true,
    discount: 10,
    brand: "HP",
    description:
      "The HP Spectre x360 is a premium 2-in-1 convertible laptop featuring a vibrant touchscreen display, powerful Intel processor, and elegant design. Its flexible form factor makes it perfect for productivity, creativity, and entertainment.",
    // id 19
  },
  {
    id: 20,
    name: "Lenovo Yoga 9i",
    price: 129999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.7,
    inStock: true,
    discount: 12,
    brand: "Lenovo",
    description:
      "The Lenovo Yoga 9i is a premium convertible laptop with a high-resolution touchscreen, powerful Intel processor, and long-lasting battery life. Designed for work and creativity, it offers smooth performance, excellent audio, and a versatile 360-degree hinge.",
    // id 20
  },
  {
    id: 21,
    name: "ASUS ROG Zephyrus",
    price: 159999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.8,
    inStock: true,
    discount: 7,
    brand: "ASUS",
    description:
      "The ASUS ROG Zephyrus is a premium gaming laptop featuring a powerful AMD/Intel processor, NVIDIA GeForce RTX graphics, and a high refresh rate display. It delivers exceptional gaming performance, advanced cooling, and a lightweight design for gamers and creators.",
    // id 21
  },
  {
    id: 22,
    name: "Sony WH-1000XM5",
    price: 24999,
    image: sonyWH,
    category: "Electronics",
    rating: 4.8,
    inStock: true,
    discount: 15,
    brand: "Sony",
    description:
      "The Sony WH-1000XM5 wireless headphones offer industry-leading noise cancellation, crystal-clear audio, and up to 30 hours of battery life. Their lightweight design and premium comfort make them ideal for travel, work, and everyday listening.",
    // id 22
  },
  {
    id: 23,
    name: "Apple AirPods Pro",
    price: 22999,
    image: sonyWH,
    category: "Electronics",
    rating: 4.7,
    inStock: true,
    discount: 10,
    brand: "Apple",
    description:
      "The Apple AirPods Pro feature Active Noise Cancellation, Adaptive Audio, Transparency Mode, and Personalized Spatial Audio. Powered by the H2 chip, they provide immersive sound, comfortable fit, and seamless integration with Apple devices.",
    // id 23
  },
  {
    id: 24,
    name: "JBL Flip 6",
    price: 9999,
    image: sonyWH,
    category: "Electronics",
    rating: 4.5,
    inStock: true,
    discount: 18,
    brand: "JBL",
    description:
      "The JBL Flip 6 is a portable Bluetooth speaker with powerful JBL Original Pro Sound, deep bass, and IP67 water and dust resistance. Its long-lasting battery and rugged design make it perfect for indoor and outdoor entertainment.",
    // id 24
  },
  {
    id: 25,
    name: "Acer Predator Helios",
    price: 134999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.7,
    inStock: true,
    discount: 9,
    brand: "Acer",
    // id: 25
    description:
      "The Acer Predator Helios is a high-performance gaming laptop equipped with powerful Intel processors, NVIDIA RTX graphics, and a high refresh rate display. Advanced cooling and premium build quality ensure smooth gaming and demanding workloads.",
  },
  {
    id: 26,
    name: "Nike Air Max",
    price: 6999,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.7,
    inStock: true,
    discount: 10,
    brand: "Nike",
    description:
      "The Nike Air Max combines iconic style with lightweight cushioning and breathable materials for superior comfort. Designed for everyday wear, walking, and casual sports activities, it delivers excellent support and modern street style.",
    // id 26
    // id 35
  },
  {
    id: 27,
    name: "Nike Revolution 7",
    price: 4999,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.5,
    inStock: true,
    discount: 15,
    brand: "Nike",
    description:
      "The Nike Revolution 7 is a lightweight running shoe featuring soft foam cushioning, breathable mesh upper, and durable rubber outsole. It provides lasting comfort and support for workouts, walking, and daily wear.",

    // id 27
  },
  {
    id: 28,
    name: "Adidas Ultraboost",
    price: 8999,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.8,
    inStock: true,
    discount: 8,
    brand: "Adidas",
    description:
      "The Adidas Ultraboost features responsive Boost cushioning, a breathable Primeknit upper, and a flexible outsole for maximum comfort. Perfect for running or everyday wear, it delivers premium performance with a stylish design.",

    // id 28
  },
  {
    id: 29,
    name: "Puma RS-X",
    price: 6499,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.6,
    inStock: true,
    discount: 12,
    brand: "Puma",
    // id: 28

    // id: 29
    description:
      "The Puma RS-X sneakers feature bold styling, lightweight cushioning, and durable construction for all-day comfort. Their sporty design and premium materials make them ideal for casual wear and everyday activities.",
    // id 29
  },
  {
    id: 30,
    name: "Reebok Classic",
    price: 5999,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.4,
    inStock: true,
    discount: 20,
    brand: "Reebok",
    description:
      "The Reebok Classic offers timeless design, soft cushioning, and durable leather construction. Built for everyday comfort and versatile styling, it pairs easily with casual outfits while providing reliable support.",
    // id 30
  },
  {
    id: 31,
    name: "Campus Sneakers",
    price: 2499,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.3,
    inStock: true,
    discount: 18,
    brand: "Campus",
    description:
      "The Campus Sneakers provide lightweight comfort, breathable materials, and a flexible sole for daily use. Their modern design and affordable price make them an excellent choice for students and everyday wear.",
    // id 31
  },
  {
    id: 32,
    name: "Woodland Boots",
    price: 7999,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.6,
    inStock: false,
    discount: 10,
    brand: "Woodland",
    // id: 32
    description:
      "The Woodland Boots are built with premium leather, rugged soles, and durable construction for outdoor adventures. They provide excellent grip, long-lasting comfort, and reliable performance across different terrains.",
    // id 32
  },
  {
    id: 33,
    name: "Bata Sports Shoes",
    price: 2999,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.2,
    inStock: true,
    discount: 25,
    brand: "Bata",
    // id: 33
    description:
      "The Bata Sports Shoes feature lightweight construction, comfortable cushioning, and a breathable upper for everyday activities. Designed for walking, casual workouts, and daily use, they offer excellent value and durability.",
    // id 33
  },
  {
    id: 34,
    name: "Skechers Go Walk",
    price: 7499,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.8,
    inStock: true,
    discount: 10,
    brand: "Skechers",
    description:
      "The Skechers Go Walk shoes are designed with responsive cushioning, breathable fabric, and lightweight construction. They provide exceptional walking comfort, making them ideal for long hours of everyday use.",
    // id 34
  },
  {
    id: 35,
    name: "New Balance 574",
    price: 8599,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.7,
    inStock: true,
    discount: 5,
    brand: "New Balance",
    // id: 35
    description:
      "The New Balance 574 combines classic design with premium comfort and durable construction. Featuring soft cushioning and excellent support, these sneakers are perfect for casual wear and all-day comfort.",
  },

  // =========================
  // Men (36-45)
  // =========================

  {
    id: 36,
    name: "Men's Hoodie",
    price: 1499,
    image: mensHoodie,
    category: "Men",
    rating: 4.5,
    inStock: true,
    discount: 10,
    brand: "H&M",
    // id: 36
    description:
      "This men's hoodie is crafted from soft cotton-blend fabric for warmth and everyday comfort. Featuring a relaxed fit, adjustable hood, and spacious front pocket, it is perfect for casual outings and winter wear.",
    // id 36
    // id 45
  },
  {
    id: 37,
    name: "Men's T-Shirt",
    price: 799,
    image: mensHoodie,
    category: "Men",
    rating: 4.4,
    inStock: true,
    discount: 20,
    brand: "Levi's",
    description:
      "This men's T-shirt is made from breathable cotton fabric with a comfortable regular fit. Its lightweight construction and classic design make it suitable for daily wear, travel, and casual occasions.",
  },
  {
    id: 38,
    name: "Denim Jacket",
    price: 2499,
    image: mensHoodie,
    category: "Men",
    rating: 4.6,
    inStock: true,
    discount: 15,
    brand: "Levi's",
    description:
      "This denim jacket features premium-quality fabric, durable stitching, and a timeless design. It provides a stylish layered look while offering comfort for both casual outings and cooler weather.",
  },
  {
    id: 39,
    name: "Formal Shirt",
    price: 1299,
    image: mensHoodie,
    category: "Men",
    rating: 4.3,
    inStock: true,
    discount: 10,
    brand: "Peter England",
    description:
      "This formal shirt is tailored with premium fabric for a crisp and professional appearance. It offers a comfortable fit, elegant styling, and is ideal for office meetings, business events, and formal occasions.",
  },
  {
    id: 40,
    name: "Casual Jeans",
    price: 1899,
    image: mensHoodie,
    category: "Men",
    rating: 4.5,
    inStock: true,
    discount: 12,
    brand: "Wrangler",
    // id: 40
    description:
      "These casual jeans are made from durable stretch denim, providing comfort and flexibility throughout the day. Their modern fit and versatile style make them suitable for everyday casual wear.",
    // id 40
  },
  {
    id: 41,
    name: "Cargo Pants",
    price: 1699,
    image: mensHoodie,
    category: "Men",
    rating: 4.4,
    inStock: true,
    discount: 18,
    brand: "Roadster",
    description:
      "These cargo pants feature multiple utility pockets, durable fabric, and a comfortable relaxed fit. Designed for everyday wear, they combine functionality with modern streetwear style.",
  },
  {
    id: 42,
    name: "Winter Sweater",
    price: 1999,
    image: mensHoodie,
    category: "Men",
    rating: 4.5,
    inStock: false,
    discount: 15,
    brand: "Allen Solly",
    description:
      "This winter sweater is made from soft knit fabric that provides warmth and lasting comfort during colder months. Its classic design makes it perfect for casual wear and layering.",
    // id 42
  },
  {
    id: 43,
    name: "Track Suit",
    price: 2299,
    image: mensHoodie,
    category: "Men",
    rating: 4.6,
    inStock: true,
    discount: 8,
    brand: "Nike",
    description:
      "This track suit is made from breathable, lightweight fabric designed for workouts, sports, and casual wear. It offers excellent comfort, flexibility, and a modern athletic look.",
    // id 43
  },
  {
    id: 44,
    name: "Leather Jacket",
    price: 3499,
    image: mensHoodie,
    category: "Men",
    rating: 4.8,
    inStock: true,
    discount: 10,
    brand: "Zara",
    // id: 44
    description:
      "This leather jacket features premium-quality materials, durable craftsmanship, and a stylish modern fit. It offers warmth, comfort, and a timeless look suitable for every season.",
    // id 44
  },
  {
    id: 45,
    name: "Polo T-Shirt",
    price: 999,
    image: mensHoodie,
    category: "Men",
    rating: 4.3,
    inStock: true,
    discount: 20,
    brand: "U.S. Polo",
    description:
      "This polo T-shirt combines soft cotton fabric with a classic collared design for a smart casual look. It offers breathable comfort, durability, and versatility for everyday wear.",
  },
  {
    id: 46,
    name: "Women's Kurti",
    price: 999,
    image: womenKurti,
    category: "Women",
    rating: 4.5,
    inStock: true,
    discount: 10,
    brand: "Biba",
    // id: 46
    description:
      "This women's kurti is crafted from soft, breathable fabric with elegant prints and a comfortable fit. Perfect for daily wear, office use, and festive occasions, it combines traditional style with modern comfort.",
    // id 46
    // id 50
  },
  {
    id: 47,
    name: "Floral Dress",
    price: 1799,
    image: womenKurti,
    category: "Women",
    rating: 4.6,
    inStock: true,
    discount: 12,
    brand: "Zara",
    description:
      "This floral dress features lightweight fabric, beautiful floral prints, and a flattering silhouette. It is designed for comfort and style, making it ideal for casual outings, vacations, and special occasions.",
    // id 47
  },
  {
    id: 48,
    name: "Silk Saree",
    price: 2999,
    image: womenKurti,
    category: "Women",
    rating: 4.8,
    inStock: true,
    discount: 15,
    brand: "Libas",
    description:
      "This silk saree is crafted from premium-quality fabric with elegant detailing and a graceful drape. Perfect for weddings, festivals, and celebrations, it offers a timeless traditional look.",
    // id 48
  },
  {
    id: 49,
    name: "Cotton Top",
    price: 899,
    image: womenKurti,
    category: "Women",
    rating: 4.4,
    inStock: true,
    discount: 20,
    brand: "H&M", // id 49
    // id: 48

    // id: 49
    description:
      "This cotton top is made from soft, breathable fabric that ensures all-day comfort. Its modern fit and versatile design make it suitable for casual outings, office wear, and everyday styling.",
  },
  {
    id: 50,
    name: "Palazzo Set",
    price: 1599,
    image: womenKurti,
    category: "Women",
    rating: 4.5,
    inStock: true,
    discount: 10,
    brand: "W",
    description:
      "This palazzo set features a beautifully coordinated kurta and palazzo crafted from soft fabric for maximum comfort. Its elegant design makes it perfect for festive celebrations, family gatherings, and everyday ethnic wear.",
  },
];

export default products;

// id: 34

// id: 37
