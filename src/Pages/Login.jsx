import { useState,useContext } from "react"
import {GeneralAuthContext} from '../contex/GeneralAuthContext'
import Header from "../components/commons/Header"
import {Grid ,FormControl,Input,Button} from '@mui/material'
import {Navigate} from 'react-router-dom'

function Login(){
    const {user,logignWithEmail} = useContext(GeneralAuthContext)
    const [usrToLog,setUserToLog] = useState({})
    const [seePassword,setSeePassword] = useState(false) 
    const handlerLogin = () =>{
        logignWithEmail(usrToLog.email,usrToLog.password)
    }

    return(
        <>
        {!user?(
            <>
        <Header/>
        <Grid container spacing={2} style={{padding:"4rem",display:"flex",textAlign:"center"}}>
            <Grid  item sx={12} md={12}style={{justifyContent:"space-around"}}>
            <h1>this is a login</h1>
            </Grid>
            <Grid item sx={12} md={12} style={{justifyContent:"space-around"}}>
                <FormControl>
                    <Input placeholder="Add Your Email" onChange={(e)=> setUserToLog(prev=>({...prev,email:e.target.value}))}/>
                </FormControl>
            </Grid>
            <Grid item sx={12} md={12} style={{justifyContent:"space-around"}} >
            <FormControl>
                <Grid container> 
                   <Grid item sx={6}><Input placeholder="Add Your password" onChange={(e)=> setUserToLog(prev=> ({...prev,password:e.target.value}))}type={seePassword?"text":"password"}/></Grid> <Grid item sx={6}>  <Button onClick={()=> setSeePassword(!seePassword)}>See</Button></Grid>
                   </Grid>
                </FormControl>
            </Grid>
            <Grid item sx={12} md={12} style={{justifyContent:"space-around"}}>
                <Button variant="contained" color="primary" onClick={()=>handlerLogin()}>LOGIN</Button>
            </Grid>
        </Grid></>):(<Navigate to="/dashboard"/>)
       
    }
</>
    )
}

export default Login