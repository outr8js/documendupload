import classes from './PricingCard.module.css'


const PricingCard = (props) => {
    const handleClick = () => {
        props.onClick();
    };


  return (
    <div className={classes.container}>
        <h3 className={classes.title}>
            {props.title}
        </h3>
        <p className={classes.subText}>{props.subText}</p>
        <div className={classes.priceContainer}>
            <p className={classes.price}>${props.amount} to get started</p>
        </div>

        <div className={classes.listContainer}>
            <ul className={classes.list}>
                <li>7 days free trial</li>
                <li>7 days free trial</li>
                <li>7 days free trial</li>
                <li>7 days free trial</li>
            </ul>
        </div>

        <div className={classes.buttonContainer}>
    <button onClick={handleClick}>{props.buttonText}</button>
        </div>
    </div>
  )
}

export default PricingCard