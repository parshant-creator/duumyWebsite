import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import CartItem from "../components/CartItem"
import Search from '../components/Search'
import ProductDescription from '../components/ProductDescription'
export default function AppRoute() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home />} />
          <Route path={'/product/:id'} element={<ProductDescription />} />
         <Route path="/search" element={<Search />} />
          <Route path={'/cart'} element={<CartItem />} />
    </Routes>
    </BrowserRouter>
  )
}
