import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import CartItem from "../components/CartItem"
import Search from '../components/Search'
import ProductDescription from '../components/ProductDescription'
import ScrollToTop from '../components/ScrollToTop'
export default function AppRoute() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
        <Route path={'/'} element={<Home />} />
          <Route path={'/product/:id'} element={<ProductDescription />} />
         <Route path="/search" element={<Search />} />
          <Route path={'/cart'} element={<CartItem />} />
    </Routes>
    </BrowserRouter>
  )
}
