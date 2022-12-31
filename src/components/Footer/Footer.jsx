import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Row,Col, ListGroupItem, ListGroup } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import './Footer.scss'
const Footer = () => {
  const year = new Date().getFullYear
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md6>
          <div className="logo">
            {/* <img src={logo} alt="logo" /> */}
            <div>
              <h1 className='text-white'>E-commerce</h1>
              </div>
          </div>
              <p className="footer__text mt-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 Animi ad quaerat illo, aperiam dolore iusto accusantium molestiae 
                 
              </p>
          </Col>
          <Col lg='3' md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern SOfa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg='2'md='3' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Pricay Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contacts</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>123</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className='ri-phone-line'></i></span>
                  <p>+1234566789</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><i className='ri-mail-line'></i></span>
                  <p>exapmle@gmail.com</p>
                </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} developed by Iviko Merlani. All rights reserved. </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer