import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../speific/ChatList';

const AppLayout = (WrappedComponent) => {
  return (props) => (
    <>
      <Title title={'Chat app'} />
      <Header />
      <Grid container height={'calc(100vh - 4rem)'}>
        <Grid
          item
          sm={4}
          md={3}
          sx={{ display: { xs: 'none', sm: 'block' } }}
          height={'100%'}
          bgcolor={'primary'} // Assuming primary is defined elsewhere
        >
          <ChatList chats={[1,2,3,4,5]}/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={6}
          height={'100%'}
          bgcolor={'#fffff'} // Assuming primary is defined elsewhere
        >
          <WrappedComponent {...props} />
        </Grid>
        <Grid
          item
          md={4}
          lg={3}
          height={'100%'}
          bgcolor={'primary'} // Assuming primary is defined elsewhere
          sx={{
            display: { xs: 'none', md: 'block' },
            padding: '2rem',
            bgcolor: 'rgba(0,0,0,0.85)',
          }}
        >
          Second
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
