import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Favorites from './Pages/Favorites/Favorites'
import Login from './Pages/Login/Login'
import MainProduct from './Pages/MainProduct/MainProduct'
import Notfound from './Pages/Notfound/Notfound'
import Product from './Pages/Product/Product'
import MainCategory from './Pages/MainCategory/MainCategory'
import Shuffle from './Pages/Shuffle/Shuffle'
import Contact from './Pages/Contact/Contact'
import Article from './Pages/Article/Article'
import Conditions from './Pages/Conditions/Conditions'
import Checkout from './Pages/Checkout/Checkout'
import Cart from './Pages/Cart/Cart'



let routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <Notfound /> },
    { path: '/product', element: <Product /> },
    { path: '/product/:productTitle', element: <MainProduct /> },
    { path: '/product/:categoriesTitle', element: <MainCategory /> },
    { path: '/shuffle', element: <Shuffle /> },
    { path: '/contact', element: <Contact /> },
    { path: '/article', element: <Article /> },
    { path: '/conditions', element: <Conditions /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/cart', element: <Cart /> },


]

export default routes