
export default function SkeletonCard() {
  return (
    <div className="animate-pulse min-w-[200px] max-w-[240px] rounded-lg p-3 bg-gray-100">
        <div className="h-36 md:h-48 rounded-md bg-gray-300">
        </div>
        <div className="h-4 w-3/4 bg-gray-300 rounded mt-4"></div>
        {/* <p>rating</p>
        <span>category</span>
        <span>price</span> */}
        <div className="h-10 w-full rounded-md bg-gray-300 mt-6"></div>
    </div>
  )
}
