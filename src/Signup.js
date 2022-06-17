import React, {useEffect,useContext} from 'react';
import {Link} from 'react-router-dom';
import {Signupcontext} from './Signupcontext';
import IMAGES from './images/index.js';

import {collection,addDoc,setDoc} from 'firebase/firestore';

const Signup = () =>{

    const {first,setFirst} = useContext(Signupcontext);
    const {last,setLast} = useContext(Signupcontext);
    const {email,setEmail} = useContext(Signupcontext);
    const {pass,setPass} = useContext(Signupcontext);
    const {passShow,setpassShow} = useContext(Signupcontext);
    const {check,setCheck} = useContext(Signupcontext);
    const {users,setUsers} = useContext(Signupcontext);
    let {id,setId} = useContext(Signupcontext);
    const {db} = useContext(Signupcontext);
    
    const collectionRef = collection(db,'users');
    

    const firstnameHandler = (e)=>{
    const first = e.target.value;
    setFirst(first);
    }

    const lastnameHandler = (e)=>{
        const last = e.target.value;
        setLast(last);
    }

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

    const tickboxHandler = (e)=>{
       if(e.target.checked){
           setCheck(true);
       }else{
        setCheck(false);
       }
    };

    const submitData = ()=>{
        return false;
    };


    
    const createUser = async (e)=>{

        const regex = /^([a-zA-Z0-9_])+([^<>(){}|![\]\\.,;:\s@"-])*@([a-zA-Z]+\.[a-zA-Z]{2,3})$/ ;

        if(first !== '' && last !== '' && email !== '' && pass !== '' && check !== false){
        
        if(first.match(/^[a-zA-Z\s]+$/)){

        if(last.match(/^[a-zA-Z\s]+$/)){
        
        if(email.match(regex)){

        if(pass.length >= 10){
        const docRef = await addDoc(collectionRef,{firstname:first,lastname:last,email:email,password:pass});
        const updateddocRef = await setDoc(docRef,{firstname:first,lastname:last,email:email,password:pass,id:docRef.id});

               id = docRef.id;
                setId(id);
                setFirst('');
                setLast('');
                setEmail('');
                setPass('');
                setCheck(false);
                alert(`Hey ${first} you have been signed up with us successfully!Please login to further enjoy listening to music on MUZIKA!`);
               

                }else{
                alert('Password should have atleast 10 characters');
                setPass('');
                }

                }else{
                   alert('Email ID should be consisting only of alphanumeric characters and three special characters @ and _ and .');
                   setEmail('');
                }

                }else{
                alert('lastname should consist only of alphabets');
                setLast('');
                }

                }else{
                   alert('firstname should consist only of alphabets');
                   setFirst('');
                }

                }else{
                   alert('All fields are required to be filled!')
                }
    };

    return(
         
        
           <div className='logincontainer'>
         <Link to='/'><img src={IMAGES.back3} alt='goback'></img></Link>
            <div className='loginC'>
               <div className='logoM'><i className="fi fi-rr-headset"></i><span>M U Z I K A</span></div>
               <div className='formcontainer'>
               <form className='form1' onSubmit={submitData}>
                   <input type='text' value={first} onChange={firstnameHandler} className='firstname' placeholder='your name please' required/>
                   <input type='text' value={last} className='surname' placeholder='your surname please' onChange={lastnameHandler} required/>
                   <input type='email' value={email} placeholder='your email please' onChange={emailHandler} required/>
                   <input type={passShow?'text':'password'} value={pass} placeholder='your password please' onChange={passwordHandler} required/><i className={`${passShow ? "fa-solid fa-eye" :"fa-solid fa-eye-slash"}`} onClick={togglePassword}/>
                   <input type='checkbox' id='check1' checked={check} onChange={tickboxHandler} required/><small>I agree to accept all terms and conditions</small>
                   <button className='submit' type='button' onClick={createUser}>sign up</button>
    <Link to='/Login'><div className='redirect'>Already have an account?<span className='link'>Login</span></div></Link> 
               </form>
               </div>
            </div>
            </div>
       
       
    );
}

export default Signup;