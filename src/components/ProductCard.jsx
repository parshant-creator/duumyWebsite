
export default function ProductCard({product}) {
    console.log(product)
  return (
    <div className="max-w-3xl">
      <p>Name:{product.name}</p>
      <span>Price:{product.price}</span>
      <span>Category:{product.category}</span>
    </div>
  )
}
