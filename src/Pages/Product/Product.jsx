import React,{useEffect} from 'react'
import AllProduct from '../../Components/AllProduct/AllProduct'


export default function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AllProduct />
    </>
  )
}
