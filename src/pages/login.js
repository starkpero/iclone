import React,{useContext, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';    
import FirebaseContext from '../context/firebase';

function login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext); 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '';

    const handleLogin = ()=>{};

    useEffect(()=>{
        document.title = 'Login-iClone'
    }, [])
    return (
        <div>
            <p>I am the login page</p>
        </div>
    )
}

export default login
