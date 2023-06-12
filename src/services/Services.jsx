import React from 'react';
import '../services/Services.css';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceData from '../assets/Data/servicesData';
const Services = () => {
  return (
    <section className='Service__Name' >
        <Container>
            <Row>
                {
                    ServiceData.map((item,index)=>(
                        <Col lg="3" md="3" sm="1" key={index} >
                    <div className='Services__items' style={{background: `${item.bg}` }} >
                        <span><i class={item.icon}></i></span>
                        <div>
                            <h4>{item.title}</h4>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                </Col>
                    ))
                }
               
            </Row>
        </Container>
    </section>
  )
}

export default Services