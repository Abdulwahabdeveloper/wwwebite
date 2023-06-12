import React from 'react'
// import { product1img } from '../../assets/Index'
import { Col } from 'react-bootstrap'
import '../UI/productcss.css';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { cartActions } from '../../redux/Slices/CartSlice';

const ProductCard = ({ item }) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id: item.id,
            productName: item.productName,
            price: item.price,
            image: item.imgUrl,
        }));

        alert("product added to the Cart");
    };

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
            <button onClick={addToCart} className='btn btn-dark'>Add To Card</button>
        </div>
    </div>
    </Col>
    </>
  )
}

export default ProductCard