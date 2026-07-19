import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../components/ProductDetail'
import CartItem from "../components/CartItem"
import SearchPage from '../components/SearchPage'
export default function AppRoute() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home />} />
         <Route path={'/product/:id'} element={<ProductDetail />} />
         <Route path="/search" element={<SearchPage />} />
          <Route path={'/cart'} element={<CartItem />} />
    </Routes>
    </BrowserRouter>
  )
}
