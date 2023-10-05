import classes from './Auth.module.css'
import signInImg from '../../assets/sign-in.png'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate= useNavigate()

  const {
    register,
    handleSubmit,
  } = useForm({
 defaultValues : {
  email : '',
  password  :''
 }
  });


  const loginHandler = (data) =>{
    console.log(data)
  }


  return (
    <div className={classes.container}>
      <div className={classes.loginSection}>

      <form className={classes.form} onSubmit={handleSubmit(loginHandler)}>
        <div className={classes.textContainer}>
        <p className={classes.formTitle}>Sign In</p>
        <p className={classes.formSubText}>Welcome Back ...</p>

        </div>

        <div className={classes.fieldContainer}>
          <label className={classes.inputLabel}>Email Address</label>
          <input {...register('email', {required:true})} />
          <label className={classes.inputLabel}>Password</label>
          <input {...register('password', {required:true})} />
          <div className={classes.forgotContainer}>
          <p className={classes.forgotText} onClick={()=> navigate('/forgot-password')}>Forgot Password?</p>


    </div>
    <div className={classes.buttonContainer}>
    <button type='submit'>Sign In</button>
    <p>Don't have account? 
      <span onClick={()=> navigate('/auth/sign-up')}>Sign Up</span>
    </p>
          </div>
        </div>
      </form>


      <div className={classes.imageContainer}>

        <img src={signInImg} alt='signin' />
      </div>

      </div>
    </div>
  )
}

export default Login