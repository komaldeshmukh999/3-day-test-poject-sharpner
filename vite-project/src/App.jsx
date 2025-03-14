import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Category from "./components/Category/Category"
import SingleProduct from "./components/SingleProduct/SingleProduct"
import NewSletter from "./components/Footer/NewSletter"
import AppContext from "./components/utils/context"
// import Signup from "./components/Authentication/SignUp"
import Login from "./components/Authentication/Login"
import ForgotPassword from "./components/Authentication/ForgotPassword"


function App() {

  return (
    <BrowserRouter>
    <AppContext>
  
    <Header/>
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/category/:id" element={<Category/>}/>
     <Route path="/product/:id" element={<SingleProduct/>}/>
    </Routes>
    <NewSletter/>
    <Footer/>
    </AppContext>
   </BrowserRouter>
  )
}

export default App
