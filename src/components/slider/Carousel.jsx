import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  const carouselItems = [
    {
      src: require('./images/img1.jpg').default,
      alt: 'First slide',
      title: 'LITERATI COMMITTEE',
      description: 'Marathi Bhasha Divas 2022',
    },
    {
      src: require('./images/img2.jpg').default,
      alt: 'Second slide',
      title: 'PR COMMITTEE',
      description: 'Visit of school students for product showcase',
    },
    // Add other carousel items here
  ];

  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default UncontrolledExample;
