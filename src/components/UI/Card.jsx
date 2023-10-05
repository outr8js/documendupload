import classes from './Card.module.css'


const Card = ({title, text, img}) => {
  return (
    <div className={classes.card}>
        <div className={classes.leftSection}>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
        <div className={classes.rightSection}>
            <img src={img} alt='image' />
        </div>
    </div>
  )
}

export default Card