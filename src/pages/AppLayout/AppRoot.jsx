import { Outlet } from "react-router-dom"
import AppHeader from "../../components/Layout/AppHeader"
import classes from './AppRoot.module.css'
import Navbar from "../../components/Layout/Navbar"

const AppRoot = () => {
  return (
    <>
    <AppHeader login={false} />
    <div className={classes.container}>
      <div className={classes.leftSide}>
    <Outlet />

      </div>
      <div className={classes.rightSide}>
    <Navbar />
      </div>
    </div>
    </>
  )
}

export default AppRoot