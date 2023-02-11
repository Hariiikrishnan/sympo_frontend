import React,{useState} from "react";

import Switch from "@mui/material/Switch";
// import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/system';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Individual from "./individual";
import TeamReg from "./TeamReg";
import "./components.css";
import Footer from "./footer"


function Form() {
    // const classes = useStyles();
    const [toggled,setToggled]=useState(false)

   

  return (
    <div>
<div class="toggleSwitch">

<label class="switch">
<input class="switch-input" type="checkbox" checked={toggled}
  onChange={e => setToggled(e.target.checked)} />
<span class="switch-label" data-on="Individual" data-off="Team"></span> 
<span class="switch-handle"></span> 
</label>
</div>
      {toggled ? <TeamReg/> : <Individual />}      
    
      <Footer/>
    </div>
  );
}

export default Form;
