import React from 'react'
import BestSellerProductCard from '../bestSeller/BestSellerProductCard';

const BestSellerProductList = ({bestSellerdata}) => {
  return (
    <>
      {
        bestSellerdata.map((item,index)=>(
          <BestSellerProductCard item={item} key={index} />
        ))
      }
    </>
  )
}

export default BestSellerProductList;