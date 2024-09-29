import { motion } from "framer-motion"
import React,{useState,useEffect} from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Link } from 'react-router-dom';
import Navbar from '../navbar'
import image11 from '../artPicturesSmall/FF214426-E197-4400-A8C5-15F3704B6579.jpeg'
import image7 from '../artPicturesSmall/IMG_0158.jpeg'
import image3 from '../artPicturesSmall/IMG_2271.jpeg'
import image4 from '../artPicturesSmall/IMG_2463.jpeg'
import image5 from '../artPicturesSmall/IMG_2495.jpeg'
import image6 from '../artPicturesSmall/IMG_5958.jpeg'
import image2 from '../artPicturesSmall/IMG_5977.jpeg'
import image8 from '../artPicturesSmall/IMG_8779.jpeg'
import image9 from '../artPicturesSmall/IMG_8848.jpeg'
import image10 from '../artPicturesSmall/IMG_8981.jpeg'
import image1 from '../artPicturesSmall/IMG_8984.jpeg'
import image12 from '../artPicturesSmall/FF214426-E197-4400-A8C5-15F3704B6579.jpeg'
import image13 from '../artPicturesSmall/IMG_0158.jpeg'
import image14 from '../artPicturesSmall/IMG_2271.jpeg'
import image15 from '../artPicturesSmall/IMG_2463.jpeg'
import image16 from '../artPicturesSmall/IMG_2495.jpeg'
import image17 from '../artPicturesSmall/IMG_5958.jpeg'
import image18 from '../artPicturesSmall/IMG_5977.jpeg'
import image19 from '../artPicturesSmall/IMG_8779.jpeg'
import image20 from '../artPicturesSmall/IMG_8848.jpeg'
import image21 from '../artPicturesSmall/IMG_8981.jpeg'
import image22 from '../artPicturesSmall/IMG_8984.jpeg'
const Home =()=>{

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });


    
    const images = [
        image1, image2, image3, image4, image5, 
        image6, image7, image8, image9, image10, 
        image11,image12,image13,image14,image15,image16,
        image17,image18,image19,image20,image21,image22
    ];


    useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
      }, []);


return (
  <div className="h-screen w-screen bg-white overflow-scroll">
 


<Navbar style = {'Portfolio'}/>

<div className="mt-24">
<ResponsiveMasonry
                columnsCountBreakPoints={{600: 1,900:2, 1200: 3, 1400: 4}}
            >
                <Masonry>
                {images.map((imgSrc, index) => (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={ { opacity: 1, transition: { duration: 2 } }

    }
    exit={{ opacity: 0 }}
    key={index} className="relative object-contain flex items-center justify-center group overflow-hidden cursor-pointer"> {/* Container for each image */}
      <motion.img
            whileHover={
            { 
            filter: 'blur(2px)',
            scale: 1.4,
            rotate: 5,
            opacity:.5
        }
        }
        transition={{
            duration: 0.3, // Duration of the hover animation
            ease: 'easeInOut' // Easing function for a smoother transition
        }}

        src={imgSrc}
        alt={`Artwork ${index + 1}`}
        className="object-contain w-full h-full" // Ensures image fills the cell
      />

      <div className ='absolute flex justify-center items-center group 
      text-black text-opacity-0 group-hover:text-opacity-100 pointer-events-none'>
        <div className ='font-termina text-5xl font-black'>
                    COOL NAME
        </div>

      </div>
      </motion.div> 
  ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
</div>
            
           
        

 

);
  
}; export default Home; 

/*

      const calculateColumns = () =>{
      
          if(windowSize.width>1200){
              console.log(windowSize,"hi")
              return 4
          }

          else if(windowSize.width>900){
              return 3
          }
          else if(windowSize.width>600){
              return 2
          }
          else {
              return 1
          }


      }*/

