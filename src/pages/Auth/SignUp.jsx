import { useForm } from "react-hook-form"
import classes from './SignUp.module.css'
import { useNavigate } from "react-router-dom";
import signupImg from '../../assets/sign-up.png'

const SignUp = () => {

  const navigate= useNavigate()

  const {
    register,
    handleSubmit,
  } = useForm({
 defaultValues : {
  firstName : '',
  lastName  :'',
  email : '',
  password  : ''
 }
  });


  const signupHandler = (data) =>{
    console.log(data);
    navigate('/auth/subscription')
  }
  
  return  (
    <div className={classes.container}>
      <div className={classes.loginSection}>

      <form className={classes.form} onSubmit={handleSubmit(signupHandler)}>
        <div className={classes.textContainer}>
        <p className={classes.formTitle}>Sign Up</p>
        <p className={classes.formSubText}>Create an Account</p>

        </div>

        <div className={classes.fieldContainer}>
          <label className={classes.inputLabel}>First Name</label>
          <input {...register('firstName', {required:true})} />
          <label className={classes.inputLabel}>Last Name</label>
          <input {...register('lastName', {required:true})} />
          <label className={classes.inputLabel}>Email Address</label>
          <input {...register('email', {required:true})} />
          <label className={classes.inputLabel}>Password</label>
          <input {...register('password', {required:true})} />

    <div className={classes.buttonContainer}>
    <button type='submit'>Sign Up</button>
    <p>Already have an account? 
      <span onClick={()=> navigate('/auth/sign-in')}>Sign In</span>
    </p>
          </div>
        </div>
      </form>


      <div className={classes.imageContainer}>

        <img src={signupImg} alt='signup' />
      </div>

      </div>
    </div>
  )
}

export default SignUp