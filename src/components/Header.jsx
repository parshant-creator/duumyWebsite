import { ShoppingCart, Search , UserRound,  X} from "lucide-react";
import { useState } from "react";
import { useSelector} from 'react-redux'
export default function Header({searchTerm,setSearchTerm}) {
    const {totalQuantity} = useSelector((state)=>state.cart)
  const[menuItem , setMenuItem]=useState(false)

  const handleMenuItem = ()=>{
   setMenuItem(!menuItem) 

  }
  return (
    <nav className="bg-gray-100 w-full shadow-md sticky top-0 z-50">
        <div className="flex h-16 max-w-7xl mx-auto p-4 items-center justify-between">
            <h1 className="font-bold text-2xl">🛍 ShopKart</h1>
            <div className="sm:flex w-96 items-center px-2 py-2 border border-gray-300 focus:outline-none focus-within:ring-2 focus-within:ring-orange-400 rounded-full hidden">
                <Search className="border-r border-gray-400" />
                <input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search Products..."  className="outline-none w-full px-2"/>
            </div>
            
            <div className="flex gap-4 items-center cursor-pointer font-medium">
                <span className="flex relative gap-2 hover:text-orange-500">
                    <span className="absolute top-0 left-4 bg-red-500 text-xs px-1 py-0.1 text-white rounded-full">{totalQuantity}</span>
                    <ShoppingCart />Cart</span> 
                <button onClick={handleMenuItem} className="flex bg-orange-400  py-2 px-2 rounded-xl hover:bg-orange-500 hover:shadow-lg transition-all duration-300 text-white cursor-pointer"> {menuItem ?<X />: <UserRound />}</button>
            </div>
            </div>{menuItem &&(
               <div className="absolute top-16 z-50 right-0 w-40 transition-all duration-300 opacity-50 hover:translate-y-1">
                <ul className="text-md bg-gray-400 text-white font-medium flex-1 flex-col rounded-xl">
                    <li className="hover:bg-gray-300 hover:text-orange-500 px-4 py-2"><a href="/about">Account</a></li>
                    <li className="hover:bg-gray-300 hover:text-orange-500 px-4 py-2"><a href="/about">Order</a></li>
                    <li className="hover:bg-gray-300 hover:text-orange-500 px-4 py-2"><a href="/about">Wishlist</a></li>
                    <li className="hover:bg-gray-300 hover:text-orange-500 px-4 py-2"><a href="/category">customare care</a></li>
                    <li className="hover:bg-gray-300 hover:text-orange-500 px-4 py-2"><a href="/about">Setting</a></li>
                </ul>
            </div> 
            )}
            <div className="sm:hidden px-4 pb-3">
            <div className=" flex items-center border border-gray-300 bg-white rounded-full focus-within:ring-1  focus-within:ring-orange-200 px-3 py-2">
                <Search className="border-r border-gray-400" />
                <input value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)} className="w-full flex items-center text-xs  px-3 py-2 outline-none" placeholder="search..." type="text" />
            </div></div>
    </nav>
  );
}
