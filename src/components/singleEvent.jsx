import React,{useState} from "react";

import { Link } from "react-router-dom";
import Footer from "./footer";

import SideBar from "./SideBar"

function SingleEvent(props){
  console.log(props);

    return <div class="singleEvent">
    <SideBar/>
       <h2 class="center">{props.data.eventName}</h2>
        <h4 class="center">Rules to Remember!</h4>
        <div class="ruleslist center"> 
        <ul>
          { props.data.rules.map((rule)=>{
            return <li>{rule}</li>
          })
          
          }
      </ul>
      </div>
    <p class="center ">{props.data.tagLine}</p>
      <Link class="joinBtn center eventJoinBtn" to="/register">Register Now</Link>

      <Footer />
    </div>
}

export default SingleEvent;