import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../../assets/7171.png';
import image2 from '../../assets/7172.png';
import image3 from '../../assets/7173.png';
import image4 from '../../assets/7174.png';
import image5 from '../../assets/clock.svg';
import image6 from '../../assets/level.svg';



import './slider.css';

const data = [
  {
    image: image1, // Replace with your image paths
    title: 'Basics of Machine Learning',
    description: 'Learn the essentials of machine learning in just 2 hours. Learn the essentials of machine learning in just 2 hours',
    duration: '2 hours 30 minutes',
    points: 'Up to 25 points',
  },
  {
    image: image2,
    title: 'Deep Learning Fundamentals',
    description: 'Master the fundamentals of deep learning and AI. Learn the essentials of machine learning in just 2 hours',
    duration: '3 hours 30 minutes',
    points: 'Up to 40 points',
  },
  {
    image: image3,
    title: 'Data Science Bootcamp',
    description: 'Kickstart your data science journey with this bootcamp. Learn the essentials of machine learning in just 2 hours',
    duration: '4 hours 30 minutes',
    points: 'Up to 50 points',
  },
  {
    image: image4,
    title: 'Data Science Bootcamp',
    description: 'Kickstart your data science journey with this bootcamp. Learn the essentials of machine learning in just 2 hours',
    duration: '4 hours 30 minutes',
    points: 'Up to 50 points',
  }
];

const Carousel = () => {
    const swiperRef = React.useRef(null);

    return (
        <section className="carousel-section">
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="carousel-container"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="carousel-slide">
                <div
                  className="slide-content"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  onMouseEnter={() => swiperRef.current.autoplay.stop()} // Stop autoplay on hover
                  onMouseLeave={() => swiperRef.current.autoplay.start()} // Resume autoplay on mouse leave
                >
                  <div className="overlay">
                  <h2 className="carousel-heading">Courses to Upgrade Your Skill Stack Score</h2>
                    <h3 className="slide-title">{item.title}</h3>
                    <p className="slide-description">{item.description}</p>
                    <div className="slide-meta">
                      <span><img src={image5} alt="" />{item.duration}</span>
                      <span><img src={image6} alt="" />{item.points}</span>
                    </div>
                    <button className="view-more-btn">View More</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      );
};

export default Carousel;
