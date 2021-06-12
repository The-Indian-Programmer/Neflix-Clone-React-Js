import React, { useEffect, useState } from 'react'
import "./Header.css"
const Header = () => {
    const [show, setshow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                setshow(true)
            }else{
                setshow(false);
            }
        });
        return () => {

            window.removeEventListener('scroll');
        } 
    }, [])
    return (
        <div className={`app_header ${show && "nav_black"}`}>
          <img className="netflix-logo" src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-fce7f.appspot.com/o/1280px-Netflix_2015_logo.svg-removebg-preview.png?alt=media&token=e7bb89c3-a964-4d21-ac2f-698af72bd00f" alt="Netflix-Clone"/>

         
        </div>
    )
}

export default Header
