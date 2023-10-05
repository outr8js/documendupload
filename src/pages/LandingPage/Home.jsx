import classes from './Home.module.css'
import heroImg from '../../assets/hero.png';

const Home = () => {

  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <div className={classes.textSection}>
          <div className={classes.textContainer}>
          <h4 className={classes.title}>DocuMend</h4>
          <h5 className={classes.subTitle}>Developed by a nurse for nurses</h5>
          <p className={classes.sectionText}>At Documend, we believe in challenging the burdens of bureaucracy. We believe in freeing nurses from the chains of tedious documentation, allowing them to fully immerse themselves in what they are truly passionate about: patient care. How do we challenge this status quo? By innovating. By designing not just software, but a companion for nurses.</p>
          <div className={classes.buttonContainer}>
            <button>Start Chating</button>
          </div>

          </div>
        </div>
        <div className={classes.sliderSection}>
          <img src={heroImg} alt='medical' />
        </div>

      </div>


     
    </div>
  )
}

export default Home