import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

export function Carruselimg (){
    return(
        <Carousel >
      <Carousel.Item >
        
          <Image width={'100%'} height={360}  alt="900x500"  src='/img/AdobeStock_211770395-1080x675.jpeg'></Image>
          
       
      </Carousel.Item>
      <Carousel.Item >
        
          <Image width={'100%'} height={360} alt="900x500"  src='/img/AdobeStock_211770395-1080x675.jpeg'></Image>
          
       
      </Carousel.Item>
      <Carousel.Item >
        
          <Image width={'100%'} height={360} alt="900x500"  src='/img/AdobeStock_211770395-1080x675.jpeg'></Image>
          
       
      </Carousel.Item>
      <Carousel.Item >
        
          <Image width={'100%'} height={360} alt="900x500"  src='/img/AdobeStock_211770395-1080x675.jpeg'></Image>
          
       
      </Carousel.Item>
    </Carousel>
    
    )
}