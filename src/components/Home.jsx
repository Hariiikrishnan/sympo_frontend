import React from "react";
import { useNavigate } from "react-router-dom";



function Home(){

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `register`; 
    navigate(path);
  }




    return  <div id="homePage">
      <div class="headText">
      <h1>TechX'23</h1>
      <span class="dot dot2"></span>
      <h2>Welcome to Our <br class="responsive" />Small Symposium <br /> Conducted 
        in St.Joseph's  <br class="responsive" />College - Trichirappalli</h2>
      <p>Lorem Ipsum</p>
      <button class="joinBtn" type="submit" onClick={routeChange}  href="/register">Join Now</button>
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