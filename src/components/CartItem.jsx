import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import Header from "./Header";

export default function CartItem() {
  const dispatch = useDispatch();

const { cartItems, totalQuantity } = useSelector((state) => state.cart);
const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">

        <h2 className="text-3xl font-bold mb-8">
          Shopping Cart
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Cart Items */}
          <div className="flex-1 space-y-5">

            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-20">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-5 bg-white border rounded-xl shadow p-4"
                >
                  <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">

                    <div>

                      <h3 className="text-xl font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        Quantity : {item.quantity}
                      </p>

                      <p className="text-2xl font-bold text-orange-500 mt-3">
                        ₹{item.price * item.quantity}
                      </p>

                    </div>

                    <div className="flex gap-3 mt-5">

                      <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
                        Buy Now
                      </button>

                      <button
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                        className="border border-red-500 text-red-500 px-5 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>
              ))
            )}

          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="lg:w-80 h-fit bg-white border rounded-xl shadow p-6">

              <h3 className="text-2xl font-bold mb-6">
                Order Summary
              </h3>

             <div className="flex justify-between mb-3">
  <span>Total Quantity</span>
  <span>{totalQuantity}</span>
</div>

<div className="flex justify-between mb-6">
  <span>Total Price</span>
  <span className="font-bold text-orange-500">
    ₹{totalPrice}
  </span>
</div>

              <div className="flex justify-between mb-6">
                <span>Total Price</span>
                <span className="font-bold text-orange-500">
                  ₹{totalPrice}
                </span>
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
                Proceed to Checkout
              </button>

            </div>
          )}

        </div>

      </div>
    </>
  );
}