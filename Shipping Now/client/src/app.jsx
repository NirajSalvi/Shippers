import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import SignIn from "./pages/login/login";
// import SignUp from "./pages/register/register";
// import Form from "./pages/form";
// import Otp from "./pages/otp";
import Landing from "./pages/home/home";
import AboutUs from "./pages/aboutus/aboutus";
import Error from "./pages/error/error"
import Availability from './pages/availabilty/sortableTable'
// import FileUpload from "./pages/FileUpload";
// import DashBoard from "./pages/dashboard";
// import ForgotPass from "./pages/forgetpass/forgetpass";
import ContactUs from "./pages/contactus/contactus"
import Navbar from "./components/navbar/navbar"
// import AdminNavbar from './pages/adminpanel/components/adminnavbar/adminnavbar'
import AdminPanel from "./pages/adminpanel/adminpanel"
// import { Switch } from "@mui/material";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";

import Create from './pages/adminpanel/components/shipcomponents/create.component';
import Edit from './pages/adminpanel/components/shipcomponents/edit.component';
import Index from './pages/adminpanel/components/shipcomponents/index.component';

import CreateOrder from './pages/adminpanel/components/ordercomponents/createorder.component';
import EditOrder from './pages/adminpanel/components/ordercomponents/editorder.component';
import IndexOrder from './pages/adminpanel/components/ordercomponents/indexorder.component';
// import Payment from './pages/adminpanel/components/ordercomponents/payment';
import Payment from './pages/adminpanel/components/ordercomponents/payment_refactor';

// import MyOrders from './components/myorders';
import MyOrders from './components/myorders2';
// import {DisplayMapClass} from './components/tracking';
// import DisplayMapClass from './components/tracking2';
import DisplayMapClass from './components/tracking3'



//Dhruvi components
// import Navmenu from './dhruvi pages/src/components'
// import NavMenu from './dhruvi pages/src/components/NavMenu';
// import About from './dhruvi pages/src/pages/About';
// import Avail from './dhruvi pages/src/pages/Avail';
// import Contact from './dhruvi pages/src/pages/Contact';
// import Details from './dhruvi pages/src/pages/Details';
// import Home from './dhruvi pages/src/pages/Home';
// import Register from './dhruvi pages/src/pages/Register';
// import SignIn from './dhruvi pages/src/pages/SignIn';


const isAdmin = true;
// const isAdmin = false;

function App() {
    // console.log("checking aws sync");
    return (
        <div className="App">
            <BrowserRouter>
                {/* {!isAdmin && (<Navbar isAdmin={isAdmin}/>)} */}
                <Navbar isAdmin={isAdmin} />
                {/* {isAdmin && <AdminNavbar/>} */}
                <Routes>

                    <Route strict path="/" element={<Landing />} />
                    {/* <Route strict path="/" element={<Home />} /> */}

                    <Route path="/adminpanel" element={<AdminPanel />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/index" element={<Index />} />

                    <Route path="/createOrder" element={<CreateOrder />} />
                    <Route path="/editOrder/:id" element={<EditOrder />} />
                    <Route path="/indexOrder" element={<IndexOrder />} />
                    <Route path="/payment/:id" element={<Payment />} />

                    <Route strict path="/aboutus" element={<AboutUs />} />
                    <Route strict path="/availability" element={<Availability />} />

                    <Route path="/contactus" element={<ContactUs />} />

                    {/* <Route exact path="/login" element={<Login />} /> */}
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/userData" element={<UserDetails />} />

                    <Route path="/myOrders" element={<MyOrders />} />
                    {/* <Route path="/tracking" element={<DisplayMapClass />} /> */}
                    {/* <Route path="/trackingMap/:id" element={<DisplayMapClass />} /> */}
                    <Route path="/trackingMap/:id/:source/:destination" element={<DisplayMapClass />} />

                    <Route path="*" element={<Error />} />
                </Routes>


                {/* </div>
                    </div>
                </div> */}
                {/* </Switch> */}
            </BrowserRouter>
        </div>
    );
}

export default App;
