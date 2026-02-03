import { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function NavList() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (num) => {
    setSelectedIndex(num);
  };

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Link to="/onsale-border" onClick={() => handleListItemClick(1)}>
          <ListItemButton selected={selectedIndex === 1} divider={true}>
            <ListItemText primary="12賞套框 (業務)" />
          </ListItemButton>
        </Link>
        <Link to="/onsale-ads" onClick={() => handleListItemClick(2)}>
          <ListItemButton selected={selectedIndex === 2} divider={true}>
            <ListItemText primary="12賞AD投廣 (行銷)" />
          </ListItemButton>
        </Link>
        <Link to="/product-border" onClick={() => handleListItemClick(3)}>
          <ListItemButton selected={selectedIndex === 3} divider={true}>
            <ListItemText primary="特定商品套框 (業務/行銷)" />
          </ListItemButton>
        </Link>
      </Box>
    </>
  );
}

export default NavList;
