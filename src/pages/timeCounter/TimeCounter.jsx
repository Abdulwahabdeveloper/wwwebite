import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CounterImg from '../../assets/images/counter-timer-img.png';
import '../timeCounter/TimeCounter.css';
import Clock from './Clock';
import { Link } from 'react-router-dom';
const TimeCounter = () => {
  return (
    <>
    <div className='section__timeCounter' >
        <Container>
            <Row>
                <Col lg="6" md="6" sm="12" >
                    <div className='clock_top_content' >
                        <h4 className='text-white fs-6 mb-3'>Limited Offers</h4>
                        <h3 className='text-white fs-5 mb-3' >Quality Armchair</h3>
                    <Clock/>
                    <div>
                        <button className='buy__btn btn btn-light' > <Link to='/shop' >Visit Store</Link></button>
                    </div>
                    </div>
                </Col>
                <Col lg="6" md="6" sm="12" >
                    <img src={CounterImg} alt='TimeCounter-img' className='img-fluid' />
                </Col>
            </Row>
        </Container>
    </div>
    </>
  )
}

export default TimeCounter