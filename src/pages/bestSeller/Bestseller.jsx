import React,{useState,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import products from '../../assets/data/products';
import '../bestSeller/BestSeller.css';
import BestSellerProductList from '../bestSeller/BestSellerProductList';
const Bestseller = () => {

    const [bestSellerdata, setBestSellerData] = useState(products);
  useEffect(() =>{
  const filteredBestSellerProducts = products.filter((item)=> item.category === 'sofa');
  setBestSellerData(filteredBestSellerProducts);
  
}, []);

  return (
    <>
    <section className='section__bestseller' >
        <Container>
            <Row>
                <Col lg="12" md="12" sm="12" >
                    <h2 className='section__title' >BestSeller Product</h2>
                </Col>
                <BestSellerProductList bestSellerdata={bestSellerdata} />
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Bestseller;