import Home from "./pages/Home/Home"
import Users from "./pages/users/Users"
import NewUser from "./pages/newUser/NewUser"
import Product from "./pages/Products/Product"
let routes = [
    { path: '/', element : <Home/>},
    { path: '/users' , element : <Users/>},
    {path: '/newUser', element : <NewUser/>},
    {path: '/products', element : <Product/>}
]

export default routes