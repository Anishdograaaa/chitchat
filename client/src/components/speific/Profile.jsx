import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react'
import moment from "moment";
import {
  Face as FaceIcon,
  AlternateEmail as UsernameIcon,
  CalendarMonth as CalendarIcon
} from "@mui/icons-material"

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={({
          width:200,
          height:200,
          objectFit:"contain",
          marginBottom:"1rem",
          border:"5px solid white",
        })}
      />
      <ProfileCard heading={"bio"} text={"sadas sjfhu fkuehg euifgwi"}/>
      <ProfileCard heading={"username"} text={"anidogra"} Icon={<UsernameIcon/>}/>
      <ProfileCard heading={"bio"} text={"Anish Dogra"} Icon={<FaceIcon/>}/>
      <ProfileCard heading={"Joined"} text={moment('2023-11-04T18:30:00.000Z').fromNow()} Icon={<CalendarIcon/>}/>
    </Stack>
  )
}



const ProfileCard = ({text,Icon,heading})=>(
        
      <Stack 
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}           
               >
        {Icon && Icon}
        <Stack>
          <Typography variant="body1">{text}</Typography>
          <Typography color={"gray"} variant="caption">{heading}</Typography>
        </Stack>
      </Stack>
)

export default Profile
