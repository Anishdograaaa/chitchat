import React, { memo } from 'react'
import { Link } from '../styles/StyledComponents'
import { Stack, Typography } from '@mui/material'
// import { Link } from ''

const ChatItem = (
    {
        
    }
) => {
  return (
   <Link to={`/chat/${_id}`} onContextMenu={(e)=>handleDeleteChatOpen(e,_id,groupChat)}>
    <div style={{
        display:"flex",
        alignItems:"center",
        padding:"1rem",
        backgroundColor:sameSender?"black":"unset",
        color:sameSender?"white":"unset",
        position:"relative"
    }}>
      <Stack>
        <Typography>{name}</Typography>
        {newMessageAlert && (
            <Typography>{newMessageAlert.count} New message</Typography>
        )}
        {
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
              }}
            />)
        }
      </Stack>
    </div>
   </Link>
  )
}

export default memo(ChatItem);