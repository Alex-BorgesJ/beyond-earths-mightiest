import { Carousel, Image } from "react-bootstrap";
import avengersImg from "../../images/avengersAssemble.jpg";
import milesimg from "../../images/milesMorales.jpg";
import pantherImg from "../../images/blackPanther.jpg";

export function EventPoster() {
  return (
    <Carousel fade className="my-3">
      <Carousel.Item>
        <Image src={avengersImg} fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={milesimg} fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={pantherImg} fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
