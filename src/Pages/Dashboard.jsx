import React,{useContext}from 'react'
import {GeneralAuthContext} from '../contex/GeneralAuthContext'
import {Navigate,Outlet,Link} from 'react-router-dom'
import Header from '../components/commons/Header'
import FormProducts from '../components/FormProducts'
import { Grid,List,ListItemButton,Divider} from '@mui/material'

export default function Dashboard() {
  const {user} = useContext(GeneralAuthContext)
  return (
    <>
    {user?(
      <>
      <Header/>
      <Grid container spacing={2}>
        <Grid item sx={2} md={2} >
          <List>
            <ListItemButton  style={{textAlign:"center"}}>
          <Link to="Orders" style={{width:"100"}}>See All Orders</Link>
          </ListItemButton>
          <Divider/>
          <ListItemButton>
          <Link to="addPRoduct">Add a Product</Link>
          </ListItemButton>
          <Divider/>
          <ListItemButton>
          <Link to="seeProducts">See All Products</Link>
          </ListItemButton>
          <Divider/>
          </List>
          </Grid>
        <Grid item sx={2} md={9} style={{padding:"5rem"}}><Outlet/></Grid>
      </Grid>
      </>):(<Navigate to="/login"/>)
    }
  </>
  )
}
