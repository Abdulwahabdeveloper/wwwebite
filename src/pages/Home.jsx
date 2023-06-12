import React from 'react';
import Helmet from '../component/Helmet/helmet';
import '../App.css';
import { Container, Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { heroimg } from '../assets/Index';
import Services from '../services/Services';
import Trending from './TrendingProduct/Trending';
import Bestseller from './BestSeller/Bestseller';
import TimeCounter from './timeCounter/TimeCounter';
import NewArrival from './new-arrivals/NewArrival';
import PopularCategory from './Popularcategory/PopularCategory';
import Footer from '../component/Footer/Footer';
const Home = () => {

  const year = new Date().getFullYear();

  return (
    <>
    <Helmet title={"Home"} >
      <section className='hero__section' >
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' >
                <div className='hero__content' >
                    <p className='hero__subtitle' >
                      Trending Product in {year}
                    </p>
                    <h2>
                      Make Your Interior More Minimalistic & Modern
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Doloribus debitis officiis non beatae ratione nostrum et eos velit, 
                       voluptas perferendis.
                    </p>
                    <button className='buy_btn btn btn-dark'> <Link to="/shop" className='text-decoration-none text-white' >Shop Now</Link></button>
                </div>
            </Col>
            <Col lg="6" md="6" sm="12" > 
              <div className='hero__section__img' >
                  <img src={heroimg} alt='logo' className='img-fluid' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <Trending/>
      <Bestseller/>
      <TimeCounter/>
      <NewArrival/>
      <PopularCategory/>
      {/* <Footer/> */}
      </Helmet>
    </>
  )
}

export default Home