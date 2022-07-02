import { Icon } from '@iconify/react';
import { Box, Container, Drawer, IconButton } from '@mui/material';
import { useState } from 'react';
import Sidebar from '../Sidebar';

const DashboardLayout = ({ children }) => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Sidebar />
    </Box>
  );

  return (
    <>
      <div className='flex w-full min-h-screen h-auto  overflow-x-hidden'>
        <Box className='lg:block hidden'>
          <Sidebar />
        </Box>
        <div className='flex-1 h-full'>
          {['left'].map(anchor => (
            <div className='h-16 w-full shadow-md lg:hidden px-3 flex items-center'>
              <>
                <IconButton onClick={toggleDrawer(anchor, true)}>
                  <Icon icon='bytesize:menu' />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </>
            </div>
          ))}
          <div className='lg:ml-64 ml-0 mx-auto mt-16 h-full'>
            <Container maxWidth='lg'>{children}</Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
