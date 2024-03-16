import React from 'react';
import Header from './Header';
import Title from '../shared/Title';
import { Grid } from '@mui/material';
import ChatList from '../speific/ChatList';
import { samplechats } from '../../constants/sampleData';
import { useParams } from 'react-router-dom';
import Profile from '../speific/Profile';


const AppLayout= () => (WrappedComponent) => {
  
  return (props) => {

    const params = useParams();
    const chatId = params.chatId
    const handleDeleteChat = (e,_id,groupchat)=>{
      e.preventDefault();
      console.log("Delete Chat",_id,groupchat);
    }
  
    return(
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
          <ChatList chats={samplechats} 
           newMessagesAlert={[{
            chatId,
            count:0,
           }]}
           chatId={chatId} 
           onlineUsers={["1","2"]}
           handleDeleteChat={handleDeleteChat}
          />
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
          <Profile/>
        </Grid>
      </Grid>
    </>)
  };
};

export default AppLayout;
