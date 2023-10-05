import Card from '../../components/UI/Card'
import { missionData } from '../../constants/MissionSections'
import classes from './Home.module.css'

const Mission = () => {
  return (
    <div className={classes.container}>
        <div className={classes.leftSection} style={{flexDirection:'column'}}>
            <div className={classes.titleContainer}>
            <h3>Mission</h3>
            </div>
    <div className={classes.cardContainer}>
    {missionData.map((item, index) => {
        return (
            <div className={classes.cardItem} key={index} >
                <Card title={item.title} text={item.text} img={item.image} />
            </div>


        )
    })}
    </div>
        </div>
    </div>
  )
}

export default Mission