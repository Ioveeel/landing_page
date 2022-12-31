import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../Helmet/Helmet'
import '../styles/home.scss'
import heroImg from '../assets/images/hero-img.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/UI/Clock'

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState([])
  const [wirelessProducts, setWirelessProducts] = useState([])
  const year = new Date().getFullYear()

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === 'chair')
    setTrendingProducts(filteredTrendingProducts)

    const filteredBestSalesProducts = products.filter((item) => item.category === 'sofa')
    setBestSalesProducts(filteredBestSalesProducts)

    const filteredMobilesProducts = products.filter((item) => item.category === 'mobile')
    setMobileProducts(filteredMobilesProducts)

    const filteredWirelessProducts = products.filter((item) => item.category === 'wireless')
    setWirelessProducts(filteredWirelessProducts)
  }, [])
  
  return <Helmet title={'Home'}>
    <section className='hero__section'>
  <Container>
    <Row>
      <Col lg='6' md='6'>
        <div className="hero__content">
          <p className="hero__subtitle">Tending product in {year}</p>
          <h2>Make Your Interior More Minimalistic & Modern</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta sint vero, cumque nostrum, cum totam numquam at fugit animi nam laboriosam incidunt quibusdam, 
            fugiat necessitatibus a est consequatur earum adipisci.</p>
            <motion.button whileTap={{ scale:1.2 }} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
        </div>
      </Col>

      <Col lg='6' md='6'>
        <div className="hero__img">
          <img src={heroImg} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
    </section>

    <Services/>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">
              Trending Products
            </h2>
          </Col>
          <ProductsList data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    <section className="best__sales">
    <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">
              Best Sales
            </h2>
          </Col>
          <ProductsList data={bestSalesProducts}/>
        </Row>
      </Container>
    </section>

    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='12'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale:1.1}} className="buy__btn store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>

          <Col lg='6' md='12' className='text-end counter__img'>
          <img src={counterImg} alt="" /></Col>
        </Row>
      </Container>
    </section>

    <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="setcion__title">New Arrivals</h2>
          </Col>
          <ProductsList data={mobileProducts} /> 
          <ProductsList data={wirelessProducts} /> 
        </Row>
      </Container>
    </section>
  </Helmet>

}

export default Home