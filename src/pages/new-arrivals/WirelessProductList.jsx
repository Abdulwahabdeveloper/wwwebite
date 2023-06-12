import React from 'react'
import WirelessProductCard from './WirelessProductCard'

const WirelessProductList = ({datawireless}) => {
  return (
    <>
    {
        datawireless.map((item, index)=>(
            <WirelessProductCard item={item} />
        ))
    }
    </>
  )
}

export default WirelessProductList