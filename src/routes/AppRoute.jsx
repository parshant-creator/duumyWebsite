// import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import Home from '../pages/Home'
// import CartItem from "../components/CartItem"
// import Search from '../components/Search'
// import ProductDescription from '../components/ProductDescription'
// import ScrollToTop from '../components/ScrollToTop'
// import Register from '../pages/Register'
// import MainLayout from '../components/layouts/MainLayout'
// export default function AppRoute() {
//   return (
//     <BrowserRouter>
//     <ScrollToTop />
//     <Routes>
//       <Route element={<MainLayout />} />
//        <Route path={'/register'} element={<Register />} />
//         <Route path={'/'} element={<Home />} />
//           <Route path={'/product/:id'} element={<ProductDescription />} />
//          <Route path="/search" element={<Search />} />
//           <Route path={'/cart'} element={<CartItem />} />
//     </Routes>
//     </BrowserRouter>
//   )
// }

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import CartItem from "../components/CartItem"
import Search from '../components/Search'
import ProductDescription from '../components/ProductDescription'
import ScrollToTop from '../components/ScrollToTop'
import Register from '../pages/Register'
import MainLayout from '../components/layouts/MainLayout'
import Login from '../pages/Login'
export default function AppRoute() {
  return (
    <>
    <ScrollToTop />
   <Routes>
  <Route element={<MainLayout />}>
    <Route path="/register" element={<Register />} />
     <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/product/:id" element={<ProductDescription />} />
    <Route path="/search" element={<Search />} />
    <Route path="/cart" element={<CartItem />} />
  </Route>
</Routes></>
    
  )
}
