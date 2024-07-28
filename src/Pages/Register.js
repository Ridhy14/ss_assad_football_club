import React,{useState} from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Components/Firebase/Firebase'
import './Login'
const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const signUp=(e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
          console.log(userCredential)
        }).catch((error) =>{
          console.log(error);
        }
      )
      }
  return (
    <div>
        <div className='Loginsignup'>
    <div className='Loginsignup-container'>
        <form onSubmit={signUp}>
      <h1> Create an Account</h1>
      <div className='Loginsignup-fields'>
      <input type='text' placeholder='Your Name' 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input type='email' placeholder='Email Address'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
        <input type='password' placeholder='Password' 
        value= {password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit' className='btn'>Continue</button>
      <p className='Loginsignup-login'>Already have an account? 
        <span><a href='Login'>Sign In</a></span></p>
      <div className='Loginsignup-agree'>
        <input type='checkbox' name='' id=''/>
        <p>By Continuing, i agree to the terms of use & privacy policy</p>
      </div>
      </form>
    </div>
   </div>
    </div>
  )
}

export default Register