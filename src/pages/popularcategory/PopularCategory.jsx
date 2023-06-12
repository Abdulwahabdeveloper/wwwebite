import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import products from '../../assets/data/products';
import PopularCategoryList from '../popularcategory/PopularCategoryList';
const PopularCategory = () => {

    const [popularcategory, setPopularCategory] = useState([]);

    useEffect(()=>{
        const filteredPopularCategory = products.filter((item)=>item.category === 'watch' );
        setPopularCategory(filteredPopularCategory);
},[])

  return (
    <>
    <section className='section__newarrival' >
        <Container>
            <Row>
                <Col lg="12" md="12" sm="12" >
                    <h2 className='section__title' >Popular Category</h2>
                </Col>
                <PopularCategoryList data={popularcategory} />
            </Row>
        </Container>
    </section>
    </>
  )
}

export default PopularCategory