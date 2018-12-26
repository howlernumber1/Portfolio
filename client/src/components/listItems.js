import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import FaceIcon from '@material-ui/icons/Face';
import HomeIcon from '@material-ui/icons/Home';
import ContactsIcon from '@material-ui/icons/Contacts';
import CollectionsIcon from '@material-ui/icons/Collections';
import WavesIcon from '@material-ui/icons/Waves';


export const mainListItems = (
  <div>
<Link to={'/homepage'}>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    </Link>
    <Link to={'/about'}>
    <ListItem button>
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    </Link>
    <Link to={'/portfolio'}>
    <ListItem button>
      <ListItemIcon>
        <CollectionsIcon />
      </ListItemIcon>
      <ListItemText primary="Portfolio" />
    </ListItem>
    </Link>
    <Link to={'/resume'}>
    <ListItem button>
      <ListItemIcon>
        <WavesIcon />
      </ListItemIcon>
      <ListItemText primary="Resume" />
    </ListItem>
    </Link>
    <Link to={'/contact'}>
    <ListItem button>
      <ListItemIcon>
        <ContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Contact" />
    </ListItem>
    </Link>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );
