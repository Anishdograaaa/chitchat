import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, useState } from 'react'
import { blue } from '../../constants/color'
import {Group as GroupIcon
  ,Add as AddIcon
  ,Menu as MenuIcon
  ,Search as SearchIcon
  ,Logout as LogoutIcon
  ,Notifications as NotificationIcon
} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'


const Search = React.lazy(()=>import("../speific/Search"))
const Notifications = React.lazy(()=>import("../speific/Notifications"))
const NewGroup = React.lazy(()=>import("../speific/NewGroup"))
const Header = () => {

const [isMobile,setisMobile] = useState(false)
const [isSearch,setisSearch] = useState(false)
const[isNewGroup,setisNewGroup] = useState(false)
const[isNotification,setisNotification] = useState(false)
const navigate = useNavigate();


 const handleMobile =()=>{
    console.log("Mobile")
    setisMobile(prev=>!prev)
 }
 const openSearchDialog =()=>{
    console.log("Mobile")
    setisSearch(prev=>!prev)
 }
 const opennewgroup =()=>{
    console.log("Mobile")
    setisNewGroup(prev=>!prev)
 }
 const opennotifications =()=>{
    console.log("Mobile")
    setisNotification(prev=>!prev)
 }
 const navigategroup =()=>{
    navigate('/groups')
 }
 const logouthandler =()=>{
    // navigate('/groups')
 }

  return (
   <>
     <Box sx={{flexGrow:1}} height={"4rem"}>
        <AppBar position='static' sx={{bgcolor:blue}}>

          <Toolbar>
            <Typography
              variant='h6'
              sx={{
                display:{xs:"none",sm:"block"}
              }}
            >
              Chat app
            </Typography>
           <Box sx={{
                display:{xs:"block",sm:"None"}
              }}>
                <IconButton color="inherit" onClick={handleMobile}>
                  <MenuIcon/>
                </IconButton>
           </Box>
           <Box sx={{
            flexGrow:1,
           }}/>
           <Box>
            <IconBtn title={"Search"}
                     icon={<SearchIcon/>}
                     onClick={openSearchDialog}/>
            <IconBtn title={"New Group"}
                     icon={<AddIcon/>}
                     onClick={opennewgroup}/>
            <IconBtn title={"Manage Group"}
                     icon={<GroupIcon/>}
                     onClick={navigategroup}/>
            <IconBtn title={"Notifications"}
                     icon={<NotificationIcon/>}
                     onClick={opennotifications}/>
            <IconBtn title={"Logout"}
                     icon={<LogoutIcon/>}
                     onClick={logouthandler}/>
            
           
           </Box>
          </Toolbar>
        </AppBar>

     </Box>
     {
      isSearch && (
        <Suspense fallback={<Backdrop open/>}>
              <Search/>
        </Suspense>
        
      )
     }
     {
      isNotification && (
        <Suspense fallback={<Backdrop open/>}>
              <Notifications/>
        </Suspense>
        
      )
     }
     {
      isNewGroup && (
        <Suspense fallback={<Backdrop open/>}>
              <NewGroup/>
        </Suspense>
        
      )
     }
     
   </>
  )
}

export default Header

const IconBtn =({title,icon,onClick})=>{
  return(
    <Tooltip title={title}>
    <IconButton color="inherit" size="large" onClick={onClick}>
          {icon}
    </IconButton>
    </Tooltip> 
  )
}