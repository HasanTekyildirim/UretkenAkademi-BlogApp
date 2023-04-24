import React from 'react'
import {auth,provider} from "../firebaseConfig"
import {signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom';

function Giris({setIsAuth}) {
     
     let navigate = useNavigate();    
    const signInWithGoogle = () => {
      signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
        
      });
    };
  return (
    <div className='giris'>
        <p>GOOGLE İLE KAYIT OLUN</p>
        <button className='google-btn' onClick={signInWithGoogle}>Google ile Kayıt Olun</button>
     </div>
  )
}

export default Giris