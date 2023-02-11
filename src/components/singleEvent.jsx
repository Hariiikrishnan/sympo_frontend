import React,{useState} from "react";



function SingleEvent(props){
  console.log(props);

    return <div class="singleEvent">
    
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
    </div>
}

export default SingleEvent;