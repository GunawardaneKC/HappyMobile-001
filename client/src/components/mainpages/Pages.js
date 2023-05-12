import React, {useContext} from 'react'
import {Routes, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Profile from './users/Profile'
// import Allusers from './users/Allusers'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
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


import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Routes>
            <Route path="/" exact element={<Products/>} />
            <Route path="/detail/:id" exact element={<DetailProduct/>} />

            <Route path="/login" exact element={isLogged ? <NotFound/> : <Login/>} />
            <Route path="/register" exact element={isLogged ? <NotFound/> : <Register/>} />
            

            <Route path="/category" exact element={isAdmin ? <Categories/> : <NotFound/>} />
            <Route path="/create_product" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} />
            <Route path="/edit_product/:id" exact element={isAdmin ? <CreateProduct/> : <NotFound/>} />

            <Route path="/history" exact element={isLogged ? <OrderHistory/> : <NotFound/>} />
            <Route path="/history/:id" exact element={isLogged ? <OrderDetails/> : <NotFound/>} />

            <Route path="/cart" exact element={<Cart/>} />

            <Route path="/pro" exact element={<Profile/>} />

            {/* <Route path="/all" exact element={<Allusers/>} /> */}

            //emp
            <Route path="/Emp"  exact element={isAdmin ? <ViewEmp/> : <NotFound/>} /> 
            <Route path="/Editemp/:id"  exact element={<Editemp/>}></Route> 
            <Route path="/add/emp"  exact element={<Addemp/>}></Route> 

            //repair
            <Route path="/Repair" exact element={<RepairHome />} />
            <Route path="/addRepair" exact element={<RepairCreatePosts />} />
            <Route path="/editRepair/:id" exact element={<RepairEditPost />} />
            <Route path="/postRepair/:id" exact element={<RepairPostDetails />} />
            <Route path="/completedRepair" exact element={<RepairCompletedTable />} />
            <Route path="/repair/reports" exact element={<ReportRepair />} />


            <Route path="*" exact element={<NotFound/>} />

            <Route path="/allord" exact element={<Allorders />} />

        </Routes>
    )
}

export default Pages
