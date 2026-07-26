import { useParams } from "react-router-dom";
import products from "../data/products";
import Header from "./Header";
import { MapPin, Star, Van } from "lucide-react";
export default function ProductDescription() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  console.log(product);
  return (
    <div className="bg-gray-100 min-h-screen bg-gray-200">
      <Header />
      <div className="max-w-7xl  mx-auto h-[600px] grid lg:grid-cols-2 p-8 bg-white">
        <div className="h-full flex justify-center items-center  rounded-2xl">
            <img src={product.image}
            alt={product.name}
            className="max-w-full max-h-full object-contain " />
        </div>
        <div className="flex flex-col min-h-0 p-8">
            <div className=" flex-1 overflow-y-auto min-h-0 ">
                <h4 className="text-lg uppercase tracking-wide text-gray-500 font-semibold">{product.brand}</h4>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nemo sequi error obcaecati laborum consequuntur excepturi dolores, exercitationem fuga velit. Ab officiis quibusdam aspernatur harum aliquam accusamus sunt architecto nihil.
                Officiis nobis, expedita ullam libero tempore nemo cupiditate vero dolore illo qui accusamus veniam adipisci, praesentium itaque asperiores eius quidem voluptatum possimus facere perferendis! Nisi est labore ipsa iste consequatur.
                Fugiat, labore quasi vero similique nesciunt dicta maxime nihil incidunt quisquam dolores! Facere sequi maiores quis ad accusantium autem omnis soluta et temporibus esse vitae, impedit voluptatibus praesentium reiciendis perspiciatis.
                Distinctio, consequatur exercitationem voluptas ex dolorum amet voluptates quam consequuntur itaque harum, earum deserunt rem ipsum minus esse similique soluta laborum? Sunt dolorem numquam sit recusandae, quod aut doloribus cumque.
                Odit delectus quos aliquid animi ab assumenda, quas ut harum voluptates facere a quisquam facilis illo dolorum maiores doloribus tempore id fuga veniam, sequi iste ea nihil, saepe voluptate! Aspernatur?
                Ratione, illum dolor. Quibusdam natus vitae sint odio, aperiam vero magnam pariatur iste sunt facere quidem quasi ex voluptatum? Doloremque saepe nam deleniti veniam vitae sunt ab ducimus earum nostrum.
                Suscipit inventore nisi debitis, sapiente quibusdam quos est id? Culpa quas eveniet aspernatur nisi, numquam ea quibusdam, laboriosam explicabo, aut et sit voluptate labore veritatis possimus aliquid fuga molestiae quisquam!
                Explicabo, necessitatibus. Nostrum consectetur ad excepturi quis? Laboriosam porro minus dolor neque asperiores nam velit necessitatibus commodi eos natus eveniet atque totam non, provident ipsam quos explicabo maxime consequatur illum?
                Quam repudiandae aperiam repellendus magnam facilis laborum. Velit fuga reprehenderit incidunt est aperiam odio earum optio architecto aut. Ea veritatis delectus quisquam id? Deleniti, veritatis nulla debitis inventore sint eum.
                Saepe, maiores obcaecati iste nesciunt ullam sed nihil aspernatur distinctio ipsum excepturi dolore iure veniam velit quos doloremque aliquam sunt corrupti alias accusantium nobis! Nihil, eum. Maxime ratione minima ut!</p>
                <span>...more</span>
                <p className="flex items-center gap-1"><span><Star size={16} /></span><span>{product.rating}</span></p>
                 <h4 className="">₹{product.price}</h4>
                 <h4>Delivery Details</h4>
                <p className="flex gap-1 items-baseline-last"><span><MapPin  size={16} /></span><span>Location not set</span></p>
                <p className="flex items-center gap-1"><span><Van size={16} /></span><span>delivered by ...</span></p>

            </div>
                   <div className="flex justify-between items-center p-8">
                    <button className="bg-red-400">Add to Cart</button><button className="bg-red-400">Buy now <br />at ₹{product.price}</button>
                   </div>
        </div>
      </div>
    </div>
  );
}
