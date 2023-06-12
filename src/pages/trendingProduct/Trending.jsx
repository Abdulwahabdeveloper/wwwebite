import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../trendingProduct/Trending.css';
import ProductList from '../UI/ProductList';
import products from '../../assets/data/products';
const Trending = () => {

  const [data, setData] = useState(products);
  useEffect(() =>{
  const filteredProducts = products.filter((item)=> item.category === 'chair');
  setData(filteredProducts);
  
}, []);

  return (
    <>
    <section className='section__trending' >
        <Container>
            <Row>
                <Col lg="12" md="12" sm="12" >
                    <h2 className='section__title' >Trending Product</h2>
                </Col>
                <ProductList data={data} />
                
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Trending