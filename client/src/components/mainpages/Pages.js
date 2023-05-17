import React, {useContext} from 'react';
import {Routes, Route,} from 'react-router-dom';
import Products from './products/Products';
import DetailProduct from './detailProduct/DetailProduct';
import Login from './auth/Login';
import Register from './auth/Register';
import DashBoard from './DashBoard/DashBoard';
import Profile from './users/Profile';
// import Allusers from './users/Allusers;'
import OrderHistory from './history/OrderHistory';
import OrderDetails from './history/OrderDetails';
import Cart from './cart/Cart';
import NotFound from './utils/not_found/NotFound';
import Categories from './categories/Categories';
import CreateProduct from './createProduct/CreateProduct';
import Editemp from './employees/Editemp';
import Addemp from './employees/Addemp';
import ViewEmp from './employees/ViewEmp';
import RepairHome from './Repair/RepairHome';
import RepairCreatePosts from './Repair/RepairCreatePosts';
import RepairEditPost from './Repair/RepairEditPost';
import RepairPostDetails from './Repair/RepairPostDetails';
import RepairCompletedTable from './Repair/RepairCompletedTable';
import ReportRepair from './Repair/RepairR';
import Allorders from './history/Allorders';
import SupportChat from './LiveChat/SupportAdmin/index';
import ContactUs from './LiveChat/ContactUs';
import AddDelivery from './Delivery/AddDelivery';
import AllDeliveries from './Delivery/AllDeliveries';
import AddWarranty from './warranty/AddWarranty';
import AllWarranty from './warranty/AddedWarranty';
import Allreturn from './warranty/return';
import Cuswarranty from './warranty/cuswarranty';
import Cusrepair from './Repair/cusRepair';
import ReportDelivery from './Delivery/DeliveryR';
import ReportEmp from './employees/empR';
import ReportOrder from './history/OrderR';
import ReportPro from './products/ProductR';
import Reportwarranty from './warranty/warrantyR';

import {GlobalState} from '../../GlobalState';

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Routes>
            <Route path="/" exact element={<Products/>} />
            <Route path="/detail/:id" exact element={<DetailProduct/>} />
            <Route path="/ProR" exact element={<ReportPro/>} />

            <Route path="/supportChat" exact element={<SupportChat/>} />

            <Route path="/login" exact element={isLogged ? <NotFound/> : <Login/>} />
            <Route path="/register" exact element={isLogged ? <NotFound/> : <Register/>} />
            
            <Route path="/dashBoard" exact element={isAdmin ? <DashBoard/> : <NotFound/>} />

            <Route path="/category" exact element={isAdmin ? <Categories/> : <NotFound/>} />
            <Route path="/create_product" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} />
            <Route path="/edit_product/:id" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} />

            <Route path="/history" exact element={isLogged ? <OrderHistory/> : <NotFound/>} />
            <Route path="/history/:id" exact element={isLogged ? <OrderDetails/> : <NotFound/>} />
            <Route path="/orderRep" exact element={<ReportOrder />} />

            <Route path="/cart" exact element={<Cart/>} />

            <Route path="/pro" exact element={<Profile/>} />

            {/* <Route path="/all" exact element={<Allusers/>} /> */}

            {/* //emp */}
            <Route path="/Emp"  exact element={isAdmin ? <ViewEmp/> : <NotFound/>} /> 
            <Route path="/Editemp/:id"  exact element={<Editemp/>}></Route> 
            <Route path="/add/emp"  exact element={<Addemp/>}></Route> 
            <Route path="/empR"  exact element={<ReportEmp/>}></Route> 

            {/* //repair */}
            <Route path="/Repair" exact element={<RepairHome />} />
            <Route path="/addRepair" exact element={<RepairCreatePosts />} />
            <Route path="/editRepair/:id" exact element={<RepairEditPost />} />
            <Route path="/postRepair/:id" exact element={<RepairPostDetails />} />
            <Route path="/completedRepair" exact element={<RepairCompletedTable />} />
            <Route path="/repair/reports" exact element={<ReportRepair />} />
            <Route path="/cusrepair" exact element={<Cusrepair />} />


            <Route path="*" exact element={<NotFound/>} />

            <Route path="/allOrder" exact element={<Allorders />} />
            <Route path="/contactUs" exact element={<ContactUs />} />
            

            <Route path="/delivery-info" exact element={<AddDelivery />} />
            <Route path="/all-deliveries" exact element={<AllDeliveries />} />
            <Route path="/deliveryrepo" exact element={<ReportDelivery />} />
           


            <Route path="/addwarranty" exact element={<AddWarranty />} />
            <Route path="/addedwarranty" exact element={<AllWarranty />} />
            <Route path="/returnitems" exact element={<Allreturn />} />
            <Route path="/cuswarranty" exact element={<Cuswarranty />} />
            <Route path="/warrantyR" exact element={<Reportwarranty />} />

        </Routes>
        
    )
}

export default Pages
