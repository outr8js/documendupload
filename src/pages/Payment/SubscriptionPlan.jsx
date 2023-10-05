import { useNavigate } from 'react-router-dom'
import PricingCard from '../../components/UI/PricingCard'
import classes from './SubscriptionPlan.module.css'


const SubscriptionPlan = () => {
    const navigate = useNavigate();

    const freeTrial = () => {
        navigate('/chat');
    }
    
    const payNowHandler=  () =>{
        navigate('/chat');
    }
  return (
    <div className={classes.container}>

        <div className={classes.titleContainer}>
        <h2 className={classes.title}>Pricing Plan</h2>
        </div>

        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <PricingCard title={`Free Trial`} subText={`Lorem Ipsum is simply dummy text.`} amount={`0`} buttonText={`Start For Free`} onClick={freeTrial} />
            </div>
            <div className={classes.card}>
                <PricingCard title={`Premium`} subText={`Lorem Ipsum is simply dummy text.`} amount={`25`} buttonText={`Pay Now`} onClick={payNowHandler} />
            </div>
        </div>
    </div>
  )
}

export default SubscriptionPlan