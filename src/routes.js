import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Favorites from './Pages/Favorites/Favorites'
import MyAccount from './Pages/MyAccount/MyAccount'
import OrdersAccount from './Pages/MyAccount/OrdersAccount/OrdersAccount'
import EditAcount from './Pages/MyAccount/EditAcount/EditAcount'
import EditAddressAcount from './Pages/MyAccount/EditAddressAcount/EditAddressAcount'
import BillAddress from './Pages/MyAccount/EditAddressAcount/BillAddress/BillAddress'
import TransportationAddress from './Pages/MyAccount/EditAddressAcount/TransportationAddress/TransportationAddress'
import LostAccount from './Pages/MyAccount/LostAccount/LostAccount'
import MainProduct from './Pages/MainProduct/MainProduct'
import Notfound from './Pages/Notfound/Notfound'
import Product from './Pages/Product/Product'
import MainCategory from './Pages/MainCategory/MainCategory'
import Comparison from './Pages/Comparison/Comparison'
import Contact from './Pages/Contact/Contact'
import Article from './Pages/Article/Article'
import MainArticle from './Pages/Article/MainArticle/MainArticle'
import Checkout from './Pages/Checkout/Checkout'
import Cart from './Pages/Cart/Cart'
import ProposalProducts from './Pages/Proposals/ProposalProducts'
import SearchPage from './Pages/Search/SearchPage' 
import CommentsProduct from './Pages/MainProduct/Commentsproduct/CommentsProduct'
import DescriptionProduct from './Pages/MainProduct/DescriptionProduct/DescriptionProduct'
import DashboardAdmin from './Pages/DashboardAdmin/DashboardAdmin'
import DashboardHome from './Pages/DashboardAdmin/DashboardHome/DashboardHome'
import DashboardProduct from './Pages/DashboardAdmin/DashboardProduct/DashboardProduct'
import DashboardProposal from './Pages/DashboardAdmin/DashboardProposal/DashboardProposal'
import DashboardUser from './Pages/DashboardAdmin/DashboardUser/DashboardUser'
import MainDashboardUser from './Pages/DashboardAdmin/DashboardUser/MainDashboardUser/MainDashboardUser'
import DashboardComment from './Pages/DashboardAdmin/DashboardComment/DashboardComment'
import DashboardArticle from './Pages/DashboardAdmin/DashboardArticle/DashboardArticle'
import DashboardOrder from './Pages/DashboardAdmin/DashboardOrder/DashboardOrder'


let routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/favorites', element: <Favorites /> },
    {
        path: '/my-account/*', element: <MyAccount />, children: [
            { path: "orders", element: <OrdersAccount /> },
            { path: "edit-account", element: <EditAcount /> },
            { path: "favorites", element: <Favorites /> },
            {
                path: "edit-address/*", element: <EditAddressAcount />, children: [
                    { path: "bill-address", element: <BillAddress /> },
                    { path: "transportation-address", element: <TransportationAddress /> },
                ]
            },
        ]
    },

    { path: "/orders", element: <OrdersAccount /> },
    { path: "/edit-account", element: <EditAcount /> },
    { path: "/edit-address", element: <EditAddressAcount /> },
    { path: '/my-account/lost-account', element: <LostAccount /> },
    { path: '/*', element: <Notfound /> },
    { path: '/product', element: <Product /> },
    {
        path: '/products/:productTitle/*', element: <MainProduct />, children: [
            { path: "commentsproduct", element: <CommentsProduct /> },
            { path: "descriptionproduct", element: <DescriptionProduct /> },
        ]
    },
    { path: '/product/:categoriesTitle', element: <MainCategory /> },
    { path: '/comparison', element: <Comparison /> },
    { path: '/contact', element: <Contact /> },
    { path: '/article', element: <Article /> },
    { path: '/article/:articleTitle', element: <MainArticle /> },
    { path: '/checkout', element: <Checkout /> },
    { path: '/cart', element: <Cart /> },
    { path: '/proposalProducts', element: <ProposalProducts /> },
    { path: '/search/:value', element: <SearchPage /> },
    
    {
        path: '/dashboard-admin/*', element: <DashboardAdmin />, children: [
            { path: "dashboard-home", element: <DashboardHome /> },
            { path: "dashboard-product", element: <DashboardProduct /> },
            { path: "dashboard-proposal", element: <DashboardProposal /> },
            { path: "dashboard-user", element: <DashboardUser /> },
            { path: ":userId", element: <MainDashboardUser /> },
            { path: "dashboard-comment", element: <DashboardComment /> },
            { path: "dashboard-article", element: <DashboardArticle /> },
            { path: "dashboard-order", element: <DashboardOrder /> },

        ]
    },
]

export default routes