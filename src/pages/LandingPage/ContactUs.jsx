import classes from './Home.module.css'
import { useForm } from 'react-hook-form'

import heroImg from '../../assets/3.jpeg';
const ContactUs = () => {

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
        console.log(data)
      }
  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>

      <form className={classes.form} onSubmit={handleSubmit(signupHandler)}>
        <div className={classes.textContainer}>
        <p className={classes.formTitle}>Contact Us</p>
        <p className={classes.formSubText}>Please fill out the form given below.</p>

        </div>

        <div className={classes.fieldContainer}>
          <label className={classes.inputLabel}>First Name</label>
          <input {...register('firstName', {required:true})} />
          <label className={classes.inputLabel}>Last Name</label>
          <input {...register('lastName', {required:true})} />
          <label className={classes.inputLabel}>Email Address</label>
          <input {...register('email', {required:true})} />
          <label className={classes.inputLabel}>Your Message</label>
          <textarea {...register('password', {required:true})} rows={5}  />


        </div>
      </form>

      <div className={classes.contactRight}>
          <img src={heroImg} alt='medical' />
        </div>

      </div>
    </div>
  )
}

export default ContactUs