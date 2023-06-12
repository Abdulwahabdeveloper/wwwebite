import React from 'react'
import PopularCategorycard from './PopularCategorycard'

const PopularCategoryList = ({data}) => {
  return (
    <>
    {
        data.map((item,index)=>(
            <PopularCategorycard item={item} />
        ))
    }
    </>
  )
}

export default PopularCategoryList