import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Form from "./Form"
import WholeApp from "./wholeApp"
import Footer from "./footer"
import Event from "./singleEvent"
import Card from "./CardArea"

import eventData from "./eventData.json"

function App(){

    var clickedId="t4";

    return <div>
 <BrowserRouter>
  <Routes>
<Route path="/">
<Route index element={<WholeApp/>}/>
  <Route path="/register" element={<Form/>}/>

  {eventData.events.map((singleEvent)=>{
    return <Route path={"/event/"+singleEvent.eventNo} element={<Event key={singleEvent.eventNo} data={singleEvent}/>}/>
  })}
  {/* <Route path="/event" element={ eventData.events.map((singleEvent)=>{
// console.log(singleEvent)
    if(singleEvent.eventNo===clickedId){
        // console.log(singleEvent);
      return <Event key={singleEvent.eventNo} data={singleEvent}/>
    }
  })}/> */}
{/* <Route path="/card" element={<Card/>}/> */}
  
  </Route>
  </Routes>
  </BrowserRouter>
  
    </div>
}

export default App;