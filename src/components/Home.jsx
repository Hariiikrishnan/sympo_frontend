import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Home(){


    return  <div id="homePage">
      <div class="headText">
      <h1>TechX'23</h1>
      <span class="dot dot2"></span>
      <h2>Welcome to Our <br class="responsive" />Technincal <br class="headtxtdesk"/> Symposium <br class="responsive"/> Conducted 
        in St.Joseph's  <br/>College - Tiruchirappalli</h2>
      <p>On 23rd Feb 2023</p>
      <Link class="joinBtn"    to="/register">Register Now</Link>
       </div>
    <div class="headImg">
      <img class="center" src="images/header_asset.jpg" alt="Asset Head"/>
    </div>
    <span class="dot dot1"></span>
    <div class="sm-icons">
      <i class="fa-brands fa-facebook-f"></i><br />
      <i class="fa-brands fa-instagram"></i><br />
      <i class="fa-brands fa-twitter"></i><br />
      <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <span class="dot dot3"></span>
    
  </div>
}

export default Home;