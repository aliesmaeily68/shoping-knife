import React, { useEffect } from 'react'
import CarouselImage from '../../Components/Carousel/Carousel'
import KnifesProduct from '../../Components/KnifesProduct/KnifesProduct'
import Proposal from '../../Components/Proposal/Proposal'
import ArticlesCategory from '../../Components/ArticlesCategory/ArticlesCategory'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CarouselImage />
      <KnifesProduct />
      <Proposal />
      <ArticlesCategory />
    </div>
  )
}
