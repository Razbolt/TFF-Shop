import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Menu from "./components/nav/Menu";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminRoute from "./components/routes/AdminRoutes";
import AdminCategory from "./pages/admin/Category";
import AdminProduct from "./pages/admin/Product";
import AdminProducts from "./pages/admin/Products";
import UserOrders from "./pages/user/Order";
import UserProfile from "./pages/user/Profile";
import AdminProductUpdate from "./pages/admin/ProductUpdate";
import Shop from "./pages/Shop"




import PrivateRoute from "./components/routes/PrivateRoute";


import {Toaster} from "react-hot-toast";

import {BrowserRouter,Routes,Route } from "react-router-dom";



const PageNotFound = () => 
{
  return <div className="d-flex justify-content-center align-items-center vh-100 ">404 | Page Not Found</div>;
  
};



export default function App() {

  return (
    <BrowserRouter>
    <Menu />
    <Toaster/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    
        <Route path ="/dashboard" element = {<PrivateRoute />} >

          <Route path ="user" element = {<Dashboard />} />
          <Route path ="user/profile" element = {<UserProfile />} />
          <Route path ="user/orders" element = {<UserOrders />} />


      


        </Route>

        <Route path ="/dashboard" element = {<AdminRoute />} >



          <Route path  ="admin" element = {<AdminDashboard/>}/>
          <Route path  ="admin/category" element = {<AdminCategory/>}/>
          <Route path  ="admin/product" element = {<AdminProduct/>}/>
          <Route path  ="admin/products" element = {<AdminProducts/>}/>
          <Route path  ="admin/product/update/:slug" element = {<AdminProductUpdate/>}/>



        </Route>

      <Route path = "*" element ={<PageNotFound />} replace/>
    </Routes>

  </BrowserRouter>
  
  

  );
  
}


