import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="/images/imagen1.jpg" alt="Primera imagen" />
        <Carousel.Caption>
          <h3>Primera Imagen</h3>
          <p>Descripción de la primera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="/images/imagen2.jpg" alt="Segunda imagen" />
        <Carousel.Caption>
          <h3>Segunda Imagen</h3>
          <p>Descripción de la segunda imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 carousel-image" src="/images/imagen3.jpg" alt="Tercera imagen" />
        <Carousel.Caption>
          <h3>Tercera Imagen</h3>
          <p>Descripción de la tercera imagen.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
