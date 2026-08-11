import { getOrders } from "../api/orderApi";
import { useState, useEffect } from "react";
export default function MyOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await getOrders();
      setOrders(response.data.orders);
      console.log(response.data.orders);
    } catch (error) {
      setErrors(error.response?.error?.message || "failed to load order");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);
  if (loading) {
    return (
      <>
        <div className="min-h-[60vh] flex justify-center items-center">
          <p className="text-gray-500">Loading orders...</p>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">My orders</h1>
        {errors && <p className="text-red-500"> {errors} </p>}
        {!errors && orders.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">You haven't placed any orders yet.</p>
          </div>
        )}

        {orders.length > 0 && (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order._id} className="border rounded-lg p-5 bg-white">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="font-semibold">Order #{order._id}</p>
                    <p className="text-sm text-gray-500">
                      {" "}
                      {new Date(order.createdAt).toLocaleDateString()}{" "}
                    </p>
                  </div>
                  <p className="font-semibold"> ₹{order.totalAmount} </p>
                </div>
                {order.items.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain"
                    />
                    <div>
                      {" "}
                      <p className="font-medium"> {item.name} </p>{" "}
                      <p className="text-sm text-gray-500">
                        {" "}
                        ₹{item.price} × {item.quantity}{" "}
                      </p>{" "}
                    </div>
                    <div className="border-t pt-3 mt-2 flex justify-between">
                      {" "}
                      <span className="text-sm">
                        {" "}
                        Payment: {order.paymentStatus}{" "}
                      </span>{" "}
                      <span className="text-sm font-medium">
                        {" "}
                        Order Status: Placed{" "}
                      </span>{" "}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
