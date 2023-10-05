import classes from './Footer.module.css'
const Footer = () => {

  return (
    <div className={classes.container}>
        <div className={classes.titleContainer}>
            <p>DOCUMEND</p>
        </div>
        <div className={classes.bottomContainer}>

            <div className={classes.navbar}></div>
            <div className={classes.socialsContainer}></div>
            <div className={classes.copyrightsContainer}></div>
        </div>
    </div>
  )
}

export default Footer