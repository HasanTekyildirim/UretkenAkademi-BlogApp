import './App.css';
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Anasayfa from './pages/Anasayfa';
import Giris from './pages/Giris';
import PostOlustur from './pages/PostOlustur';
import { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

function App() {
  const [isAuth,setIsAuth]=useState(false);
  
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/Giris";
    })
  };
  return (
    <Router>
      <nav>
        <Link to="/">Anasayfa</Link>
        
        {! isAuth ?
        (<Link to="/Giris">Giriş</Link> )
        :(
          <>
        <Link to="/PostOlustur">Post</Link>
        <button onClick={signUserOut}>Çıkış Yap</button>
        </>
        )}
        
      </nav>
        <Routes>
            <Route path='/' element={<Anasayfa/>}/>
            <Route path='/PostOlustur' element={<PostOlustur isAuth={isAuth}/>}/>
            <Route path='/Giris' element={<Giris setIsAuth={setIsAuth}/>}/>
            
        </Routes>
    </Router>
  );
}

export default App;
