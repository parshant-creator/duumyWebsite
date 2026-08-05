import Footer from "./components/Footer"
import AppRoute from "./routes/AppRoute"
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div>
       <Toaster position="top-center" />
      <AppRoute/>
      <Footer />
    </div>
  )
}

export default App
