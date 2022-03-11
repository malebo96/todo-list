import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../Config/Config'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
export const Login = (props) => {

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [loginError, setLoginError]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(()=>{
            setEmail('');
            setPassword('');
            setLoginError('');
            props.history.push('/');
        }).catch(err=>setLoginError(err.message))
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>


<Grid justify="center"   container spacing={0}>
     <br></br>
     <Grid item xs={12} sm={4} style={{ marginTop: '70px', marginBottom: '50px' }}>
           <img src ="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDM3fHx0ZWNobm9sb2d5fGVufDB8fHx8MTYyNjYwNzgyNA&ixlib=rb-1.2.1&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450" style={{height: 550, width: 550}}></img>
        </Grid>
        <br></br>
        <Grid  align="center" item xs={12} sm={4}>
          <Paper justify="center"  style={{ borderRadius: '0px',height:"550px",marginTop:"70px",color:"white", backgroundColor :"black"}}
           className={classes.paper}>
           <form style={{textAlign:"center"}} autoComplete="off" 
           onSubmit={handleLogin}>
               
               <h2>join Over 52 Milion</h2>
           <h3> Designer from around the world</h3>
          
         <h4>login to your account</h4>
         <br/><br/>
               <input placeholder="email"  style={{width: 400,marginLeft:'10px'}}  type="email" className='form-control'
                   required onChange={(e)=>setEmail(e.target.value)}
                   value={email}

               />
               <br></br>
               
               <input  placeholder="password"  style={{width: 400,marginLeft:'10px'}}   type="password" className='form-control'
                   required onChange={(e)=>setPassword(e.target.value)}
                   value={password}
               />
               <br></br>
               <button style={{  marginTop:'30px', marginBottom:'70px',backgroundColor:"purple" ,width: 400}} type="submit" className='btn btn-success mybtn2'>
                  LOGIN
               </button>
           </form>
           {loginError&&<div className='error-msg'>
               {loginError}
           </div>}
           
           <span >Don't have an account? Create One
           <Link style={{color: "purple"}} to="signup"> here</Link></span></Paper>
        </Grid>
       
      
      </Grid>

        
            
        </div>
    )
}