import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MovieSlideshow = () => {
  const posters = [
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1707717395380_web.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1707741460234_paponpuneweb.jpg',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1708065796476_sanamwebpune.png',
    'https://assets-in.bmscdn.com/promotions/cms/creatives/1707114682566_marshmelloweb.jpg'
    // Add more poster URLs as needed
  ];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const carouselRef = useRef(null);

  const handleSlideChanged = ({ item }) => {
    // Restart the carousel when reaching the last image
    if (item === posters.length - 1) {
      setTimeout(() => {
        carouselRef.current.slideTo(0);
      }, 1000); // Auto-play interval after reaching the last image
    }
  };

  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      autoPlay
      autoPlayInterval={1000} // Auto-play interval for each image
      buttonsDisabled
      onSlideChanged={handleSlideChanged}
      ref={carouselRef}
    >
      {posters.map((poster, index) => (
        <div key={index} className="carousel-item">
          <img src={poster} alt={`Poster ${index + 1}`} className="poster-image" />
        </div>
      ))}
    </AliceCarousel>
  );
};

export default MovieSlideshow;
