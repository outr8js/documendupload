import ImageCarousel from "../../components/UI/Carousel"
import { images } from "../../constants/Images"
import classes from './Home.module.css'


const Gallery = () => {
  return (
   <div className={classes.container}>
    <div className={classes.galleryleftSection}>
        <div className={classes.titleContainer}>

    <h4 className={classes.gallerytitle}>Gallery</h4>

        </div>
        
<ImageCarousel images={images} />

    </div>
   </div>
  )
}

export default Gallery