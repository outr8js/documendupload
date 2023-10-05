import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './Carousel.module.css'
// import {HiArrowSmLeft} from 'react-icons/hi'


const ImageCarousel = ({ images }) => {
  return (
    <div className={classes.container}>
    <Carousel autoPlay={true} infiniteLoop showStatus={false} interval={2000} showThumbs={true} showArrows={true} style={{display: 'flex', justifyContent: 'center'}} 
    >
      {images.map((image, index) => (
        <div className={classes.imageContainer} key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>

    </div>
  );
};

export default ImageCarousel;
