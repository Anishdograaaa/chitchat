import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import {  Box, Stack, Typography } from '@mui/material'
import AvatarCard from './AvatarCard'
// import { Link } from ''

const ChatItem = (
    {
        avatar=[],
        name,
        _id,
        groupChat = false,
        sameSender,
        isOnline,
        newMessageAlert,
        index = 0,
        handleDeleteChat
    }
) => {
  return (
   <Link 
    to={`/chat/${_id}`}
    onContextMenu={(e)=>handleDeleteChat(e,_id,groupChat)}
    sx={{
      padding:"0rem"
    }}
    >
    <div style={{
        display:"flex",
        alignItems:"center",
        padding:"1rem",
        backgroundColor:sameSender?"black":"unset",
        color:sameSender?"white":"unset",
        position:"relative"
    }}>
      <AvatarCard avatar={avatar}/>
      <Stack>
        <Typography>{name}</Typography>
        {/* {newMessageAlert && (
            // <Typography>{newMessageAlert.count} New message</Typography>
        )} */}
        {/* {
            isOnline && (<Box
              sx={{
                width:"10px",
                height:"10px",
                borderRadius:"50%",
                backgroundColor:"green",
                position:"absolute",
                top:"50%",
                right:"1rem",
                transform:"translateY(-50%)"
              }
            }
            />)
        } */}
      </Stack>
    </div>
   </Link>
  )
}

export default memo(ChatItem);