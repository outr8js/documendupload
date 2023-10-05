import { Outlet } from 'react-router-dom'
import AppHeader from '../../components/Layout/AppHeader'
import classes from './Root.module.css'


const Root = () => {
  return (
    <>
    <AppHeader  login={true}/>
    <Outlet />
    </>
  )
}

export default Root