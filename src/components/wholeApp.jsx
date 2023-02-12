import React from "react";



import SideBar from "./SideBar"
import Home from "./Home"
import Footer from "./footer"
import Card from "./CardArea"
// import Footer from "./footer";


function wholeApp(){
    return <div class="wholeApp">
    <SideBar/>
    <Home />
    <h2 class="center">Events to be conducted!</h2>
    
    <Card/>
    <Footer/>
    </div>
}

export default wholeApp;