import React from 'react'
import CarouselImage from '../../Components/Carousel/Carousel'
import KnifesProduct from '../../Components/KnifesProduct/KnifesProduct'
import Proposal from '../../Components/Proposal/Proposal'
import ArticlesCategory from '../../Components/ArticlesCategory/ArticlesCategory'

export default function Home() {
  return (
    <div>
      <CarouselImage />
      <KnifesProduct/>
      <Proposal/>
      <ArticlesCategory />
    </div>
  )
}
