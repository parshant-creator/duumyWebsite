import { useState } from "react";
import categories from '../data/categories'
import products from '../data/products'
import ProductCard from "./ProductCard";
export default function Categories() {
  const [activeTab, setActiveTab] = useState("For You");

 
  const handleClick =(category)=>{
    setActiveTab(category)
    console.log(activeTab)
  }
  return (
    <section className=" mt-12">
      <div className="max-w-7xl mx-auto">
        <ul className="flex gap-6 overflow-x-auto whitespace-nowrap hider-scrollbar">
       {categories.map((item,index)=>(
        <li onClick={()=>handleClick(item)} key={index} className={`cursor-pointer transition-all duration-300 ${activeTab===item?"underline decoration-yellow-500 font-semibold":"text-gary-600"}`}>{item}</li>
       ))}
       </ul>
       {products.map((product)=>(
        <ProductCard product={product}/>
       ))}
      </div>
    </section>
  );
}
