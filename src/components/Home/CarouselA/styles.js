import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  .carousel-item img {
    height: 550px;
    object-fit: cover;
    overflow: hidden;
    position: relative;
  }
  .carousel .carousel-item .carousel-caption {
    display: block !important;
    margin-bottom: 10rem;
    position: absolute;
    z-index: 10;
  }
  carousel .carousel-item {
    height: 400px !important;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
  }

  @media (max-width: 850px) {
    .carousel-item img {
      height: 500px;
    }
    .carousel .carousel-item .carousel-caption {
      margin-bottom: 8rem;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 5rem;
    }
  }
`
