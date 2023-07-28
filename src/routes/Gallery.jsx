import { ImageList, ImageListItem } from '@mui/material'
import React, { useEffect, useState } from 'react'




const itemData = [
    {
      img: 'https://solardealership.co.in/wp-content/uploads/2023/07/bg1-300x77.jpg',
      title: 'Breakfast',
    },
    {
      img: 'https://solardealership.co.in/wp-content/uploads/2023/07/a9104f3423ac46717c53475810bb872444a3aaa5-onzj293nu8a24bny67mbcihan6k90jfojlizbe1r5k-300x191.jpg',
      title: 'Burger',
    },
    {
      img: 'https://solardealership.co.in/wp-content/uploads/2023/07/IMG_6388-onzg1udrm3vj3d4v7cnbrvbg7cw99925n0uyqiscs8-300x191.jpg',
      title: 'Camera',
    },
    {
      img: 'https://solardealership.co.in/wp-content/uploads/2023/07/solar5-opa6laf427m9ebqbi6woldk5kdy8kuhzrudkoewgjc-300x191.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://solardealership.co.in/wp-content/uploads/2023/07/residential-solar-projects-1-onziq176zrjv6texixgwxlhkmusgy6xav47qpw601k-300x191.jpg',
      title: 'Hats',
    },
    {
      img: 'https://solardealership.co.in/wp-content/uploads/2023/07/solar-panel-installation-services-1511513769-3474189-opa6rky7ta8d4cl9retrsae8q8xp3whayzllc3kkvs-300x191.jpeg',
      title: 'Honey',
    },
    {
      img: 'https://solardealership.co.in/wp-content/uploads/2023/07/industrial-plant-solar-system-1-300x196.jpg',
      title: 'Basketball',
    },
   
  ];

  
  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }
  

const Gallery = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>

    <div className="gallery-heading">
        <h1 className='galleryh1'>
        Gallery
        </h1>
    </div>
    <div className="gallery" >
      
      {(windowSize.innerWidth>650)? (
        <ImageList sx={{ width: "80%", height: 410 }} cols={4} rowHeight={164}  >
            {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{marginBottom:1}}>
            <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
         ))}
        </ImageList>
      ): 
      <ImageList sx={{ width: "95%", height: "auto" ,overflow:"hidden"}} cols={1} rowHeight={300}  >
            {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{marginTop:1}}>
            <img 
            className='list_image'
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
         ))}
        </ImageList>
            }

          
    </div>
    </>
 )
}

export default Gallery