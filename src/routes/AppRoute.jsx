import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../components/ProductDetail'

export default function AppRoute() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home />} />
         <Route path={'/product/:id'} element={<ProductDetail />} />
    </Routes>
    </BrowserRouter>
  )
}
