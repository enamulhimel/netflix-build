import React,{useEffect,useState} from 'react';
import './Nav.css';

function Nav() {

    const [show,handleShow]= useState(false);

    const transitionNavBar = () =>{
        if (window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    window.removeEventListener("scroll",transitionNavBar);
    },[]);



  return (
    <div className={`nav ${show &&'nav-black'}`}>
        <div className="nav-contents">
            <img className='nav-logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            <img className='nav-avater' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU" alt="" />
        </div>
    </div>
  )
}

export default Nav