import React from 'react'
import '../Footer/Footer.css';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
      <section className='footer__section' >
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className='footer__col1' >
            <Link><h4 className='text-white' >Multimart</h4></Link>
            <p className='footer__para text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quasi eum repellendus, iste dolore suscipit ea inventore veritatis explicabo quidem!</p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12">
            <div className='footer__Usefullink' >
                <h4 className='uefullink__title text-white' >Top Catrgories</h4>
                <ListGroup className='mb-3 categorie-bg ' >
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="#" >Mobile Phone</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="#" >Modern Sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="#" >Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="#" >Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg="2" md="4" sm="12">
          <div className='footer__Usefullink' >
                <h4 className='uefullink__title text-white' >Useful Links</h4>
                <ListGroup className='mb-3' >
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="/shop" >Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="/cart" >Cart</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="/login" >Login</Link>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6 text-white' top="#" >Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
            </div>
          </Col>
          <Col lg="3" md="4" sm="12">
          <div className='footer__Usefullink' >
                <h4 className='uefullink__title text-white' >Contact</h4>
                <ListGroup className='mb-3' >
                  <ListGroupItem className='ps-0 border-0' >
                    {/* <Link className='text-decoration-none text-black fs-6' top="/shop" >Shop</Link> */}
                    <span className='d-flex gap-2 text-white' ><i className='ri-map-pin-line' ></i>
                    <p className='' >United State of America</p>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    {/* <Link className='text-decoration-none text-black fs-6' top="/cart" >Cart</Link> */}
                    <span className='d-flex gap-2 text-white' ><i className='ri-phone-line' ></i>
                    <p className=''>+123-456-789-9</p>
                    </span>
                  </ListGroupItem>
                  <ListGroupItem className='ps-0 border-0' >
                    {/* <Link className='text-decoration-none text-black fs-6' top="/login" >Login</Link> */}
                    <span className='d-flex gap-2 text-white' ><i className='ri-mail-line' ></i>
                    <p className=''>example@example.com</p>
                    </span>
                  </ListGroupItem>
                  {/* <ListGroupItem className='ps-0 border-0' >
                    <Link className='text-decoration-none text-black fs-6' top="#" >Privacy Policy</Link>
                  </ListGroupItem> */}
                </ListGroup>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" sm="12" >
                  <span className='text-white mx-auto d-flex justify-content-center align-items-center pt-4' >Copyright {year} developed by Abdul wahab.All Right Reserved.</span>
          </Col>
        </Row>
      </Container>
      {/* <Container>
        <Row>
          <Col lg="12" md="12" sm="12" >
                  <p className='text-center' >Copyright {year} developed by Abdul wahab.All Right Reserved.</p>
          </Col>
        </Row>
      </Container> */}
      </section>
    </>
  )
}

export default Footer