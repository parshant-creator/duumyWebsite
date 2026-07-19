import {useDispatch, useSelector} from "react-redux"
import { removeFromCart } from "../redux/slices/cartSlice"
export default function CartItem() {
  const dispatch = useDispatch()
  const {cartItems}= useSelector((state)=>state.cart)  

  return (
    <div className="max-w-7xl mx-auto py-16 px-8 flex flex-wrap gap-6">
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8">
      {cartItems.map((item)=>(
        <div key={item.id} className="border border-gray-100 rounded-2xl shadow-2xl p-4 flex flex-col">
          <div className="h-44 w-56 md:h-72 md:w-60 ">
                      <img className="h-full w-full object-contain rounded-2xl" src={item.image} />
          </div>
          <h4 className="mb-2 text-start font-semibold text-gray-600">{item.name}</h4>
          <span> ₹{item.price * item.quantity}</span>
          <button className="bg-amber-400 rounded-2xl p-2 mt-2 text-white">Buy Now</button>
          <button onClick={()=>dispatch(removeFromCart({id:item.id}))} className="p-2 mt-2 rounded-2xl w-full bg-black text-white">Remove</button>
          </div>
      ))
      }</div></div>
  )
}
