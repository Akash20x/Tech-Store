import React from 'react'
import CarouselView from './CarouselA/Carousel'
// import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <CarouselView />
    </>
  )
}

export default Home

const HomeView = styled.div`
  .bg {
    background-color: var(--lightWhite);
  }
`
