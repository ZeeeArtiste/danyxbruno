'use client';

import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import styles from './SolutionsSlider.module.css';
import Logo from '../Logo/Logo';

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_9862_52)">
      <path d="M15.9982 9.99927H4.79822" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9989 13.9993L15.9989 9.99927" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9989 5.99951L15.9989 9.99951" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_9862_52">
        <rect width="19.2" height="19.2" fill="white" transform="translate(0.799927 0.399902)" />
      </clipPath>
    </defs>
  </svg>
);

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_9862_45)">
      <path d="M4.1999 9.99927H15.3999" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.20081 13.9995L4.20081 9.99951" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.20081 5.99951L4.20081 9.99951" stroke="#F4F8EF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_9862_45">
        <rect width="19.2" height="19.2" fill="white" transform="matrix(-1 0 0 1 19.4 0.399902)" />
      </clipPath>
    </defs>
  </svg>
);

const data = [
  {
    title: 'For Companies',
    description: 'Elevate your ESG strategy to its full potential: measure all your impacts,lead CSRD initiatives, assess your risks and shape your sustainable strategy',
    img: '/s1.png',
  },
  {
    title: 'For Investors',
    description: "Maximize your investments and impact: evaluate ESG risk exposure and opportunities, measure impacts & dependancies, develop a sustainable strategy and enhance your holdings' ESG journey",
    img: '/s2.png',
  }
];

export default function SolutionsSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.solutions}>
      <section className={styles.carousel}>
        <div className={styles.header}>
          <h2>A solution for everyone</h2>
          <div className={styles.navigation}>
            <div className={styles.navBtn} onClick={prevSlide}>
              <ArrowLeft />
            </div>
            <button className={styles.navBtn} onClick={nextSlide}>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 67}%)` }}
          >
            {data.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.slide} ${idx === index ? styles.active : ''}`}
              >
                <div className={styles.media}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={392}
                    height={500}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.head}>
                    <Logo width={32} height={33} fill="#fff" />
                    <h3>{item.title}</h3>
                  </div>
                  <p className='textMedium'>{item.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}