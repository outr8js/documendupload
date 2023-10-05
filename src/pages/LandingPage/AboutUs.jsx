
import classes from './Home.module.css'

const AboutUs = () => {
  return (
    <div className={classes.aboutContainer}>
        <div className={classes.aboutleftSection}>
        <div className={classes.aboutTextSection}>
          <div className={classes.textContainer}>
          <h4 className={classes.title}>About Us</h4>
          <p className={classes.sectionText}>DocuMend is a leading provider of nurse documentation assistant software in Anaheim, CA. Our mission is to streamline the documentation process for nurses, allowing them to focus on providing the best care possible to their patients.</p>
          <p className={classes.sectionText}>Our team is comprised of experienced professionals who are dedicated to creating innovative solutions that meet the unique needs of healthcare providers. We are committed to staying up-to-date with the latest advancements in technology and healthcare in order to provide our clients with the most effective tools possible.</p>
          <div className={classes.buttonContainer}>
            <button>Start Chating</button>
          </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs