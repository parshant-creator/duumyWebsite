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
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 74999,
    image: samsung24,
    category: "Mobile",
    rating: 4.7,
    inStock: true,
    discount: 10,
  },
  {
    id: 3,
    name: "MacBook Air M3",
    price: 114999,
    image: macbookAirM3,
    category: "Electronics",
    rating: 4.9,
    inStock: true,
    discount: 10,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 24999,
    image: sonyWH,
    category: "Electronics",
    rating: 4.8,
    inStock: true,
    discount: 10,
  },
  {
    id: 5,
    name: "Nike Air Max",
    price: 6999,
    image: nikeAirMax,
    category: "Shoes",
    rating: 4.6,
    inStock: true,
    discount: 10,
  },
  {
    id: 6,
    name: "Casio Edifice",
    price: 8999,
    image: casio,
    category: "Watches",
    rating: 4.7,
    inStock: true,
    discount: 0,
  },
  {
    id: 7,
    name: "Men's Hoodie",
    price: 1499,
    image: mensHoodie,
    category: "Men",
    rating: 4.5,
    inStock: true,
    discount: 0,
  },
  {
    id: 8,
    name: "Women's Kurti",
    price: 999,
    image: womenKurti,
    category: "Women",
    rating: 4.4,
    inStock: true,
    discount: 0,
  },
  {
    id: 9,
    name: "Lipstick Set",
    price: 799,
    image: lipstickSet,
    category: "Beauty",
    rating: 4.3,
    inStock: true,
    discount: 0,
  },
  {
    id: 10,
    name: "Wooden Chair",
    price: 3499,
    image: WoodenChai,
    category: "Furniture",
    rating: 4.5,
    inStock: true,
    discount: 0,
  },
  {
    id: 11,
    name: "Remote Control Car",
    price: 1299,
    image: remoteControlCar,
    category: "Toys",
    rating: 4.6,
    inStock: true,
    discount: 10,
  },
  {
    id: 12,
    name: "Kids School Bag",
    price: 899,
    image: KidsSchoolBag,
    category: "Kids",
    rating: 4.4,
    inStock: false,
    discount: 10,
  },
];

export default products;
