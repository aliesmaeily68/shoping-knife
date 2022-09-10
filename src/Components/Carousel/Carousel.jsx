import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { AllProductContext } from "../../Contexts/ProductContext";
import { Link } from "react-router-dom";
import "./Carousel.css";

function CarouselImage() {
  const DataContext = useContext(AllProductContext);

  return (
    <>
      <div className="Container-Carousel">
        <Carousel className=" Home-Carousel rounded-3 bg-dark ">
          {DataContext.products[0].map((product) => (
            <Carousel.Item className="bg-transparent Img-Carousel1" key={product.id}>
              <Link to={`/product/${product.MainCategory.title}`}>
                <img
                  className="d-block Img-Carousel  w-50"
                  src={`./Image/${product.MainCategory.imgName2}`}
                  alt="First slide"
                />
              </Link>
              <Carousel.Caption>
                <Link to={`/product/${product.MainCategory.title}`}>
                  <h2 className="Carousel-Title">
                    ارسال سریع به سراسر ایران !
                  </h2>
                </Link>
                <Link to={`/product/${product.MainCategory.title}`}>
                  <p className="Carousel-Paragraph">
                    ارسال سریع و رایگان برای خریدهای بالای 5 میلیون 
                  </p>
                </Link>
                <Link to={`/product/category:${product.MainCategory.title}`}>
                  <button className="Carousel-Btn">خرید کن ! </button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselImage;
