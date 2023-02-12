import React from "react";

import Home from "./Home"
import Footer from "./footer"
import Card from "./CardArea"
function wholeApp(){
    return <div class="wholeApp">
    <Home />
    <h2 class="center">Events to be conducted!</h2>
    
    <Card/>
    {/* <Footer/> */}
    </div>
}

export default wholeApp;