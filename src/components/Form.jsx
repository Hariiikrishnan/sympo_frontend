import React,{useState} from "react";

import Switch from "@mui/material/Switch";
// import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/system';
import { Box, ThemeProvider, createTheme } from '@mui/system';
import Individual from "./individual";
import TeamReg from "./TeamReg";
import "./components.css";



// const useStyles = createTheme({
//     root: {
//         width: "250px!important",
//         height: "50px!important",
//         padding: 8,
//         // margin:"0 5%"
//       },
//       switchBase: {
//         padding: 11,
//         color: '#ff6a00',
//       },
//       thumb: {
//         width: "100px!important",
//         height: "25px!important",
//         backgroundColor: '#fff',
//         borderRadius:"10px!important",
//         marginTop:"4px"
//       },
//       track: {
//         background: 'linear-gradient(to right, #ee0979, #ff6a00)',
//         opacity: '1 !important',
//         borderRadius: 20,
//         position: 'relative',
//         '&:before, &:after': {
//           display: 'inline-block',
//           position: 'absolute',
//           top: '60%',
//           width: '50%',
//           transform: 'translateY(-50%)',
//           color: '#fff',
//           textAlign: 'center',
//         },
//         '&:before': {
//           content: '"Individual"',
//           left: 4,
//           opacity: 0,
//         },
//         '&:after': {
//           content: '"Team"',
//           right: 4,
//         },
//       },
//       checked: {
//         '&$switchBase': {
//           color: '#185a9d',
//           transform: 'translateX(32px)',
//           '&:hover': {
//             backgroundColor: 'rgba(24,90,257,0.08)',
//           },
//         },
//         '& $thumb': {
//           backgroundColor: '#fff',
//           marginLeft:"110px"
//         },
//         '& + $track': {
//           background: 'linear-gradient(to right, #43cea2, #185a9d)',
//           '&:before': {
//             opacity: 1,
//           },
//           '&:after': {
//             opacity: 0,
//           }
//         },
//       }
//     });
// const label = { inputProps: { "aria-label": "Switch demo" } };

function Form() {
    // const classes = useStyles();
    const [toggled,setToggled]=useState(false)

    // console.log(toggled)

    function handleToggle(){
        setToggled(true);
    }

  return (
    <div>

      {toggled ? <TeamReg/> : <Individual />}      
      <div class="toggleSwitch">

      <label class="switch">
	<input class="switch-input" type="checkbox" checked={toggled}
        onChange={e => setToggled(e.target.checked)} />
	<span class="switch-label" data-on="Individual" data-off="Team"></span> 
	<span class="switch-handle"></span> 
</label>

      {/* <Switch classes={{
          root:  {
        width: "250px!important",
        height: "50px!important",
        padding: 8,
        // margin:"0 5%"
      },
          switchBase:  {
        padding: 11,
        color: '#ff6a00',
      },
          thumb: {
        width: "100px!important",
        height: "25px!important",
        backgroundColor: '#fff',
        borderRadius:"10px!important",
        marginTop:"4px"
      },
          track:{
        background: 'linear-gradient(to right, #ee0979, #ff6a00)',
        opacity: '1 !important',
        borderRadius: 20,
        position: 'relative',
        '&:before, &:after': {
          display: 'inline-block',
          position: 'absolute',
          top: '60%',
          width: '50%',
          transform: 'translateY(-50%)',
          color: '#fff',
          textAlign: 'center',
        },
        '&:before': {
          content: '"Individual"',
          left: 4,
          opacity: 0,
        },
        '&:after': {
          content: '"Team"',
          right: 4,
        },
      },
          checked: {
        '&$switchBase': {
          color: '#185a9d',
          transform: 'translateX(32px)',
          '&:hover': {
            backgroundColor: 'rgba(24,90,257,0.08)',
          },
        },
        '& $thumb': {
          backgroundColor: '#fff',
          marginLeft:"110px"
        },
        '& + $track': {
          background: 'linear-gradient(to right, #43cea2, #185a9d)',
          '&:before': {
            opacity: 1,
          },
          '&:after': {
            opacity: 0,
          }
          } }
        }} {...label} 
        checked={toggled}
        onChange={e => setToggled(e.target.checked)}
        defaultChecked /> */}
      </div>

     
       
    
    </div>
  );
}

export default Form;
