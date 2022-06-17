import React,{useEffect,useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Dashcontext} from './Dashcontext';
import IMAGES from './images/index.js';

import {collection,getDocs} from 'firebase/firestore';

const Login =()=>{
    const {email,setEmail} = useContext(Dashcontext);
    const {pass,setPass} = useContext(Dashcontext);
    const {passShow,setpassShow} = useContext(Dashcontext);
    const {users,setUsers} = useContext(Dashcontext);
   const  {setLoggedIn} = useContext(Dashcontext);
   const {db} = useContext(Dashcontext);
   const {setLoggeduser} = useContext(Dashcontext);

  const navigate = useNavigate();
  
    useEffect(()=>{
        getUsers();
    },[]);

    const emailHandler = (e)=>{
        const email = e.target.value;
        setEmail(email);
    }

    const passwordHandler = (e)=>{
        const value = e.target.value;
        const pass = value.trim();
        setPass(pass);
    }

    const togglePassword = (e) =>{
        setpassShow(passShow? false: true );
    };

    const getUsers = async()=>{
        const querySnapshot  = await getDocs(collection(db,'users'));
        const data = querySnapshot.docs.map((doc)=>({...doc.data()}));
        setUsers(data);
    };

    const theOne = users.find((user)=>(email === user.email && pass === user.password));

    const validateUser = ()=>{
    getUsers();
    if(email !== '' && pass !== ''){

    if(theOne){
        setLoggedIn(true);
        setEmail('');
        setPass('');
        alert('Hey!You have been logged in successfully!Enjoy using Muzika!');
        setLoggeduser(theOne.firstname);
        navigate('/Dashboard');
    }else{
        alert('Email or Password does not match.Please try again!');
        setEmail('');
        setPass('');
    }
    }else{
    alert('Both the fields are required to be filled!');
   }
  
}

    return(
       <div>
            <div className='logincontainer'>
            <Link to='/'><img src={IMAGES.back3} alt='goback'></img></Link>
            <div className='loginC'>
               <div className='logoM'><i className="fi fi-rr-headset"></i><span>M U Z I K A</span></div>
               <div className='formcontainer'>
               <form className='form1'>
                   <input type='email' value={email} placeholder='your email please' onChange={emailHandler} className='efield' required/>
                   <input type={passShow?'text':'password'} value={pass} placeholder='your password please' onChange={passwordHandler} className='pfield' required/><i className={`${passShow ? "fa-solid fa-eye" :"fa-solid fa-eye-slash"}`} onClick={togglePassword} id='eye' />
                   <button className='submit' type='button' id='bfield' onClick={validateUser}>Log in</button>
               <Link to='/Signup'><div className='redirect'>New to Muzika ?<span className='link'>Signup</span></div></Link> 
               </form>
               </div>
            </div>
        </div>
       </div>

    );
}

export default Login;