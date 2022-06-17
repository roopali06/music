import React,{createContext,useState} from 'react';
import firebase from './firebase';

export const Signupcontext = createContext();

export const SignupProvider = (props)=>{
    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [passShow,setpassShow] = useState(false);
    const [check,setCheck] = useState(false);
    const [users,setUsers] = useState([]);
    const [id,setId] = useState('');
    const db = firebase.firestore();


    
    const value ={first,setFirst,last,setLast,email,setEmail,pass,setPass,passShow,setpassShow,check,setCheck,users,setUsers,id,setId,db};

    return(
        <Signupcontext.Provider value={value}>
            {props.children}
        </Signupcontext.Provider>
    );
}

