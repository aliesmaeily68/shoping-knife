import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Favorites from './Pages/Favorites/Favorites'
import LoginRegister from './Pages/LoginRegister/LoginRegister' 
import LostAccount from './Pages/LoginRegister/LostAccount/LostAccount'
import MainProduct from './Pages/MainProduct/MainProduct'
import Notfound from './Pages/Notfound/Notfound'
import Product from './Pages/Product/Product'
import MainCategory from './Pages/MainCategory/MainCategory'
import Comparison from './Pages/Comparison/Comparison'
import Contact from './Pages/Contact/Contact'
import Article from './Pages/Article/Article'
import Checkout from './Pages/Checkout/Checkout'
import Cart from './Pages/Cart/Cart'
import ProposalProducts from './Pages/ProposalProducts/ProposalProducts'
import CommentsProduct from './Pages/MainProduct/Commentsproduct/CommentsProduct'
import DescriptionProduct from './Pages/MainProduct/DescriptionProduct/DescriptionProduct'


let routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/favorites', element: <Favorites /> },
    { path: '/login-register', element: <LoginRegister /> },
    { path: '/login-register/lost-account', element: <LostAccount /> },
    { path: '/*', element: <Notfound /> },
    { path: '/product', element: <Product /> },
    { path: '/products/:productTitle/*', element: <MainProduct />,children:[
        { path:"commentsproduct", element:<CommentsProduct />},
        { path:"descriptionproduct", element:<DescriptionProduct />},
    ] },
    { path: '/product/:categoriesTitle', element: <MainCategory /> },
    { path: '/comparison', element: <Comparison /> },
    { path: '/contact', element: <Contact /> },
    { path: '/article', element: <Article /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/cart', element: <Cart /> },
    { path: '/proposalProducts', element: <ProposalProducts /> },
]

export default routes