
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import { Link } from 'react-router-dom';

// export default function TemporaryDrawer({ open, navlinks }) {
//   const DrawerList = (
//     <Box  sx={{ width: 250}}>
//       <List sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center" }}>
//         {navlinks.map((text, index) => (
//           <ListItem key={index} disablePadding sx={{ textAlign: 'center' }}>
//             <ListItemButton  sx={{p:"30px",textAlign:"center",display:"flex",justifyContent:"center"}}>
//               <Link to={text.RedirectLink} >
//                 <ListItemText primary={text.Name} />
//               </Link>
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//     <Drawer anchor="right" open={open} >
//         {DrawerList}
//       </Drawer>
//     </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer({ open, navlinks }) {
  const DrawerList = (
    <Box sx={{ width: 250 }}>
      <List sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        {navlinks.map((text, index) => (
          <ListItem key={index} disablePadding sx={{ textAlign: 'center' }}>
            <ListItemButton sx={{ p: "30px", textAlign: "center", display: "flex", justifyContent: "center", fontSize: "24px" }}>
              <Link to={text.RedirectLink} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={text.Name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={open}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
