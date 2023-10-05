import classes from './Card.module.css';

const VerticalCard = (props) => {
  return (
    <div className={classes.verticalCard}>
        <img src={props.image} alt='service-image' />
        <h4>{props.title}</h4>
        <p>{props.text}</p>
        <button>Get Service</button>

    </div>
  )
}

export default VerticalCard