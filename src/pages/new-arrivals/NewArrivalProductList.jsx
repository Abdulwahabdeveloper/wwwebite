import React from 'react'
import NewArrivalProductCard from './NewArrivalProductCard'

const NewArrivalProductList = ({data}) => {
  return (
    <>
    {
        data.map((item,index)=>(
            <NewArrivalProductCard item={item} key={index} />
        ))
    }
    </>
  )
}

export default NewArrivalProductList