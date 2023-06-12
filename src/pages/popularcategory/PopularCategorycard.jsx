import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../UI/productcss.css';
const PopularCategorycard = ({item}) => {
  return (
    <>
    <Col lg="3" md="3" sm="1" >
    <div className='product__item' >
        <div className='product__img' >
            <img src={item.imgUrl} alt="product-img" className='img-fluid' />
        </div>
        <h3 className='product__name'>
            <Link to={`/shop/${item.id}`} >
            {item.productName}
            </Link>   
         </h3>
        <div className='product__card-bottom' >
            <h6>{item.category}</h6>
            <span className='price text-center' >
                ${item.price}
            </span>
        </div>
        <div className='Btn__name' >
            <button className='btn btn-dark'>Add To Card</button>
        </div>
    </div>
    </Col>
    </>
  )
}

export default PopularCategorycard