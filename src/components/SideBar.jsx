import React,{useState} from "react";

import "./components.css";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom";

function SideBar(){
    const [state, setState] = useState({
        top: false});
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
         <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
        <List >
            <h2 class="center" style={{
                marginTop:"20px"
            }}>TechX'23</h2>
            <ListItem>
            
            <Link class="sideBarLink" to="/" >Home</Link>
            </ListItem>
            <ListItem>
            <Link class="sideBarLink" to="/event/nt1" >Events</Link>
            </ListItem>
            <ListItem>
            <Link class="sideBarLink" to="/register" >Registration</Link>
            </ListItem>
             <ListItem>
             <Link class="sideBarLink" to="/" >Contact</Link>
            </ListItem>
           
        </List>
        
        
      
       
          <Divider />
         
        </Box>
       
      );
    
      return (
        <div>
         
            <React.Fragment key={"left"}>
              <Button onClick={toggleDrawer("left", true)}><i class="fa-solid fa-bars hamburger"></i></Button>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </React.Fragment>
         
        </div>
      );
    } 
export default SideBar;


// <List>
// {['All mail', 'Trash', 'Spam'].map((text, index) => (
//   <ListItem key={text} disablePadding>
//     <ListItemButton>
//       <ListItemIcon>
//         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//       </ListItemIcon>
//       <ListItemText primary={text} />
//     </ListItemButton>
//   </ListItem>
// ))}
// </List>


// <List>
//             {['Home', 'Events', 'Registration', 'Contact'].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
//                   </ListItemIcon>
                  
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>