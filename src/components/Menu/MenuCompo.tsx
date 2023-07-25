import { IconButton, ListItemIcon } from '@mui/material';
import { NavLink, To } from 'react-router-dom';

interface MenuProps {
  name: string;
  link: To;
  src: string;
}

export default function MenuItem({ name, link, src }: MenuProps) {
  return (
    <ListItemIcon key={name} sx={{ p: 1 }}>
      <NavLink to={link}>
        <IconButton type="button" aria-label={name}>
          <img alt={name} src={src} />
        </IconButton>
      </NavLink>
    </ListItemIcon>
  );
}

// {MenuData.map(
//     (item: {
//       link: To;
//       name: string | undefined;
//       src: string | undefined;
//     }) => (
//       <ListItemIcon key={item.name} sx={{ p: 1 }}>
//         <NavLink to={item.link}>
//           <IconButton type="button" aria-label={item.name}>
//             <img alt={item.name} src={item.src} />
//           </IconButton>
//         </NavLink>
//       </ListItemIcon>
//     )
//   )}
