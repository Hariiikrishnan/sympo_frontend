import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Form from "./components/Form"
import Home from "./components/Home"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
<Route path="/">
<Route index element={<Home/>}/>
  <Route path="/register" element={<Form/>}/>

  </Route>
  </Routes>
  </BrowserRouter>
  
   
  </React.StrictMode>
);
