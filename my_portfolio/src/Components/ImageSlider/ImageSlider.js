import '../ImageSlider/ImageSlider.css';
import { useState } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const ImageSlider = ({picturesArr}) => {
    const [current, setCurrent] = useState(0);
    const length = picturesArr.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if(!Array.isArray(picturesArr) || picturesArr.length <=0 ){
        return null;
    }

  return (
    <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
      {picturesArr.map((pic, index)=>{
        
        return(
          <div className={index === current ? 'slide active' : 'slide'}>
            {index === current && (<img key={index} src={pic.image} alt="projectImage" className='image'/>)}
          </div>
        )
      })}
    </div>
  )
}

export default ImageSlider
