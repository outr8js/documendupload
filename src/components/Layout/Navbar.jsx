import { useNavigate } from 'react-router-dom';
import classes from './Navbar.module.css';
const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className={classes.rightSection}>
    <div className={classes.listContainer}>
      <h5 className={classes.listTitle} onClick={()=>navigate('/mission')}>Mission</h5>
      <ul className={classes.list}>
        <li>Mission</li>
        <li>Vision</li>
        <li>Commitment</li>
      </ul>
    </div>

    <div className={classes.listContainer}>
      <h5 className={classes.listTitle} onClick={()=>navigate('/services')}>Services</h5>
      <ul className={classes.list}>
        <li>AI-Powered Medical
 Documentation</li>
        <li>Missing Information</li>
        <li>Time-Saving Solutions</li>
      </ul>
    </div>
    <div className={classes.listContainer}>
      <h5 className={classes.listTitle} onClick={()=>navigate('/about')}>About</h5>
      <ul className={classes.list}>
        <li>About Us</li>
      </ul>
    </div>

    <div className={classes.listContainer}>
      <h5 className={classes.listTitle} onClick={()=>navigate('/gallery')}>Gallery</h5>
      <ul className={classes.list}>
        <li>Image Gallery</li>
      </ul>
    </div>
    <div className={classes.listContainer}>
      <h5 className={classes.listTitle} onClick={()=>navigate('/contact')}>Contact Us</h5>
      <ul className={classes.list}>
        <li>Contact Us</li>
      </ul>
    </div>
    {/* <div className={classes.listContainer}>
      <h5 className={classes.listTitle} onClick={()=>navigate('/privacy')}>Privacy Policy</h5>
      <ul className={classes.list}>
        <li>Privacy Policy</li>
      </ul>
    </div> */}
    <div className={classes.listContainer}>
      <h5 className={classes.listTitle} onClick={()=>navigate('/terms-of-service')}>Terms of Service</h5>
      <ul className={classes.list}>
        <li>Terms of Service</li>
      </ul>
    </div>




  </div>
  )
}

export default Navbar