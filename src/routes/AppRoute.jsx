import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../components/ProductDetail'
import CartItem from "../components/CartItem"
// import SearchPage from '../components/SearchPage'
import Search from '../components/Search'
export default function AppRoute() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home />} />
         <Route path={'/product/:id'} element={<ProductDetail />} />
         <Route path="/search" element={<Search />} />
          <Route path={'/cart'} element={<CartItem />} />
    </Routes>
    </BrowserRouter>
  )
}
