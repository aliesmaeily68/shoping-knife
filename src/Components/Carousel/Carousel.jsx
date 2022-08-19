import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

function CarouselImage() {
  return (
    <>
      <div className="Container-Carousel">
        <Carousel variant="dark" className="w-50  rounded-pill">
          <Carousel.Item className="bg-transparent">
            <img
              className="d-block Img-Carousel  w-100"
              src="./Image/35.png"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <button className="Carousei-Cart">مشاهده محصولات</button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-transparent">
            <img
              className="d-block Img-Carousel  w-100"
              src="./Image/36.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <button className="Carousei-Cart">مشاهده محصولات</button> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="bg-transparent">
            <img
              className="d-block Img-Carousel  w-100"
              src="./Image/33.png"
              alt="Second slide"
            />
            <Carousel.Caption>
            {/* <button className="Carousei-Cart">مشاهده محصولات</button>
              <h5>مینا کاری زنجان</h5>
              <p className="ali">تزئینات متفاوت از صنایع دستی زنجان .</p> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="bg-transparent">
            <img
              className="d-block Img-Carousel  w-100"
              src="./Image/34.png"
              alt="Third slide"
            />
            <Carousel.Caption>
            {/* <button className="Carousei-Cart">مشاهده محصولات</button>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselImage;
