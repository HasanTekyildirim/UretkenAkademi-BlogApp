import React, {useState,useEffect } from 'react'
import { addDoc, collection } from "firebase/firestore";
import{db,auth} from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function PostOlustur({isAuth}) {
  const [title,setTitle]=useState("");
  const [postText,setPostText]=useState("");
  const postCollectionRef = collection(db, "posts");//post aslında table ismi
  let navigate = useNavigate();
  const createPost=async()=>{
    await addDoc(postCollectionRef,{
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/Giris");
    }
  }, [])
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Post Oluştur</h1>
        <div className="inputGp">
          <label>Başlık</label>
          <input
            placeholder="Title...." onChange={(event)=>{setTitle(event.target.value);}}/>
        </div>
        <div className="inputGp" >
          <label>Post:</label>
          <textarea
            placeholder="Post...."onChange={(event)=>{setPostText(event.target.value);}}/>
        </div>
        <button onClick={createPost}>Post Ekle</button>
      </div>
    </div>
  )
}

export default PostOlustur