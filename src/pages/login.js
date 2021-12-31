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
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="Instagram app" />
                <div className="flex flex-col w-2/5">
                    <p> Gonna be the form</p>
                </div>
            </div>
        </div>
    )
}

export default login
