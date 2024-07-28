import React,{useState}from 'react'
import '../Pages/Login.css'
import Navbar from '../Components/Navbar/Navbar'
import { auth } from '../Components/Firebase/Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const signIn= async(e) =>{
    e.preventDefault();
    await signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) =>{
      console.log(userCredential)
      navigate("/shop");
    }).catch((error) =>{
      console.log(error);
    }
  )
  }
  return (
   <div className='Loginsignup'>
    <div className='Loginsignup-container'>
    <form onSubmit={signIn}>
      <h1>Log In</h1>
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
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />
      </div>
      <button type='submit' className='btn'>Sign In</button>
      {error && <p className='error'>{error}</p>}
      <p className='Loginsignup-login'>Do not have an account? 
        <span><a href='Register'>Sign Up</a></span></p>
        </form>
    </div>
   </div>
  )
}

export default Login