import Carousel from 'react-bootstrap/Carousel';
import first from "./images/first.jpg"
import second from "./images/second.jpg"
import third from "./images/third.jpg"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          style={{height: '500px'}}
          className="d-block w-100"
          src={first}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '500px'}}
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height: '500px'}}
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;