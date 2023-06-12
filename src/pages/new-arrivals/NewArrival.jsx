import React, { useEffect, useState } from 'react'
import '../new-arrivals/Newarrival.css';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../../assets/data/products';
import NewArrivalProductList from './NewArrivalProductList';
import WirelessProductList from './WirelessProductList';

const NewArrival = () => {

    const [mobiledata, setMobileData] = useState([]);

    const [wireless, setWireless] = useState([]);

    useEffect(()=>{
        const filteredMobileProduct = products.filter((item)=>item.category === 'mobile' );
        setMobileData(filteredMobileProduct);

        const filteredWirelessProduct = products.filter((item)=>item.category === 'wireless' );
        setWireless(filteredWirelessProduct);

    },[])

  return (
    <>
    <section className='section__newarrival' >
        <Container>
            <Row>
                <Col lg="12" md="12" sm="12" >
                    <h2 className='section__title' >NewArrival Product</h2>
                </Col>
                <NewArrivalProductList data={mobiledata} />
                <WirelessProductList datawireless = {wireless} />
            </Row>
        </Container>
    </section>
    </>
  )
}

export default NewArrival