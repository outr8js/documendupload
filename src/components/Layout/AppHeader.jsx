import classes from "./AppHeader.module.css";
import logo from "../../assets/logo.svg";

import {CgProfile} from 'react-icons/cg'


import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppHeader = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()

  const menuToggleHandler = () => {
    console.log("toggle", showMenu)
    setShowMenu(!showMenu);
  };



  return (
    <div className={classes.container}>
      <div className={classes.logoContainer} onClick={()=> navigate('/')}>
        <img src={logo} alt="logo" style={{cursor:'pointer' }}/>
        <h3 className={classes.logoText}>DocuMend</h3>
      </div>

  {!props.login && <div className={classes.rightContainer}>
        <button onClick={()=>navigate('/auth/sign-in')}>Sign In</button>
        <button onClick={()=>navigate('/auth/sign-up')}> Sign Up</button>
      </div>}

  {props.login && <div className={classes.profileContainer}>
        <p>Alex Hales</p>
        
       <CgProfile color="#fff" fontSize={`32px`} style={{cursor:'pointer'}}/>
      </div>}

      {/* small screens code */}
      <div className={classes.menuIconContainer} onClick={menuToggleHandler} >
   { !showMenu ? <AiOutlineMenu fontSize={'1.5rem'} /> : <AiOutlineClose fontSize={'1.5rem'}/>}
      </div>

      {/* {showMenu && (
        <div className={showMenu ? classes.menuContainer :  classes.hiddenMenu}>
          <ul className={classes.mobileList}>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Gallery</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default AppHeader;
