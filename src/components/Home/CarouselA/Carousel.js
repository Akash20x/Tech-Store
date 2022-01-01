import { Carousel, Button } from 'react-bootstrap/'
import { CarouselWrapper } from './styles'
import { Link } from 'react-router-dom'

const CarouselView = () => {
  return (
    <CarouselWrapper>
      <Carousel fade className='testimonial'>
        <Carousel.Item className='img-fluid'>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/ceenobi/image/upload/v1637972886/Gadgets/arnel-hasanovic-4oWSXdeAS2g-unsplash_j7jt5j.jpg'
            alt='First slide'
          />
          <Carousel.Caption>
            <h1 className='text-uppercase'>Smartphones</h1>
            <Link to='/'>
              <Button variant='outline-light'size='lg' className='mt-3 '>
                SHOP NOW
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/ceenobi/image/upload/v1627861194/Gadgets/daniel-romero-ArcRAMb_YZI-unsplash_urqajn.jpg'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h1 className='text-uppercase'>Earbuds</h1>
            <Link to='/'>
              <Button variant='outline-light' size='lg'className='mt-3 '>
                SHOP NOW
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://res.cloudinary.com/ceenobi/image/upload/v1635436324/Gadgets/mitchell-hollander-8b1cWDyvT7Y-unsplash_zopqcr.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <h1 className='text-uppercase'>Smartwatch</h1>
            <Link to='/'>
              <Button variant='outline-light' size='lg' className='mt-3'>
                SHOP NOW
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  )
}

export default CarouselView
