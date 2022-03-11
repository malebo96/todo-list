import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth, db} from '../Config/Config'
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
  


export const Signup = (props) => {

    const [fullName, setFullName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [registerationError, setRegisterationError]=useState('');

    const handleRegister=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred)=>{
            db.collection('users').doc(cred.user.uid).set({
                Name: fullName,
                Email: email,
                Password: password
            }).then(()=>{
                setFullName('');
                setEmail('');
                setPassword('');
                setRegisterationError('');
                props.history.push('/login');
            }).catch(err=>setRegisterationError(err.message))
        }).catch(err=>setRegisterationError(err.message))
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
          <Paper justify="center"  style={{ borderRadius: '0px',height:"550px",marginTop:"70px", backgroundColor:'black', color: 'white'}}
           className={classes.paper}>
          <h2>join Over 52 Milion</h2>
           <h3> Designer from around the world</h3>
          
         <h4>sign into your account</h4>
         <br/>
          <br/>
            <form autoComplete="off" className='form-group'
            onSubmit={handleRegister}>
           
                <input placeholder="name" type="text" className='form-control'
                    required onChange={(e)=>setFullName(e.target.value)}
                    value={fullName}
                />
                <br></br>
                
                <input placeholder="email" type="email" className='form-control'
                    required onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
                <br></br>
               
                <input placeholder="password" type="password" className='form-control'
                    required onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                <br/>
                <button style={{ backgroundColor:'purple', width: 420, height: 40, color: "white"}} type="submit" className='btn '>
                   REGISTER
                </button>
            </form>
            {registerationError&&<div className='error-msg'>
                {registerationError}
            </div>}
           
            <span>Already have an account? Login
            <Link style={{color: "purple"}} to="login"> here</Link></span>
              </Paper>
        </Grid>
       
      
      </Grid>







        </div>
    )
}