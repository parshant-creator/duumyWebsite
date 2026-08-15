import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { clearCart, clearBuyNow } from "../redux/slices/cartSlice";
import { useSelector , useDispatch } from "react-redux";
import { createOrder } from "../api/orderApi";
import { createOrderPayment, verifyPayment } from "../api/paymentApi";
export default function Checkout() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const buyNowItem = useSelector((state) => state.cart.buyNowItem);
const [paymentStatus, setPaymentStatus] = useState("");
  const checkoutItems = buyNowItem ? [buyNowItem] : cartItems;
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login", {
        state: { from: "/checkout" },
      });
    }
  }, [user, loading, navigate]);
  const totalAmount = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handlePayment = async () => {
    try {
      const response = await createOrderPayment(totalAmount);
      const rajorpayOredr = response.data.order;
      const options = {
        key: import.meta.env.VITE_TEST_API_KEY,
        amount: rajorpayOredr.amount,
        currency: rajorpayOredr.currency,
        name: "Dummy E-Commerce",
        description: "test-payment",
        order_id: rajorpayOredr.id,
        handler: async function (paymentResponse) {
          try {
            console.log(paymentResponse);
            const verifyResponse = await verifyPayment(paymentResponse);
            if (verifyResponse.data.success) {
              setPaymentStatus("success");
              await handlePlaceOrder(paymentResponse)
            }
          } catch (error) {
            setPaymentStatus("failed");
            console.log(error);
          }
        },
        prefill: {
          name: user.name,
          contact: user.phone,
        },
        theme: {
          color: "#f97316",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.on("payment.failed", function (response) {
  console.log("Payment Failed:", response.error);
  setPaymentStatus("failed");
});
      razorpay.open();
    } catch (error) {
      console.log(error);
    }
  };
  const handlePlaceOrder = async (paymentResponse) => {
    try {
      const orderData = {
        items: checkoutItems.map((item) => ({
          product: item._id,
          name: item.name,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
        totalAmount: totalAmount,
         paymentId: paymentResponse.razorpay_payment_id,
  razorpayOrderId: paymentResponse.razorpay_order_id,
  paymentStatus: "Paid",
      };
      const response = await createOrder(orderData);
      if (response.data.success) {
         if (buyNowItem) {
        dispatch(clearBuyNow());
      } else {
        dispatch(clearCart());
      }
        navigate("/order");
      }
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  if (loading) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center">
        <p className="text-gray-500 mb-4">Your cart is empty</p>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-6 py-2 rounded-md"
        >
          Continue Shoping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address */}
            <div className="bg-white rounded-lg p-5">
              <h2 className="text-lg font-semibold mb-4">
                1. Delivery Address
              </h2>

              <p className="font-medium">{user.name}</p>
              <p className="text-gray-600">{user.phone}</p>

              <button className="mt-4 text-blue-600 font-medium">
                Add / Change Address
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-5">
              <h2 className="text-lg font-semibold mb-4">2. Order Summary</h2>

              {checkoutItems.map((item) => (
                <div key={item._id} className="flex gap-4 py-4 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain"
                  />

                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>

                    <p className="text-gray-500 text-sm">₹{item.price}</p>

                    <p className="font-semibold">Quantity: {item.quantity}</p>

                    <p className="font-semibold">
                      Total Amount: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-1">
            <div className="sticky top-18 p-5 rounded-lg bg-white">
              <h2 className="text-lg font-semibold mb-5">Price Details</h2>

              <div className="flex justify-between mb-3">
                <span>Items</span>
                <span>{checkoutItems.length}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Delivery</span>
                <span className="text-green-600">FREE</span>
              </div>

              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>
{paymentStatus === "failed" && (
  <p className="mt-4 text-red-600 text-sm">
    Payment failed. Please try again.
  </p>
)}
              <button
                onClick={handlePayment}
                className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md font-medium"
              >
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
