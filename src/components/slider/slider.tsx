import React, { useState, useRef, MouseEvent } from "react";
import { MOCK_ARR } from "../../utiles/api";
import styles from "./slider.module.scss";
import Title from "../title/title";

const Slider = () => {
  const data = MOCK_ARR.products.slice(0, 10); // Ограничение до 15 карточек
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.pageX - (sliderRef.current?.offsetLeft || 0));
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current || startX === null) return;
    const x = event.pageX - (sliderRef.current?.offsetLeft || 0);
    const distance = x - startX;
    if (distance > 50) {
      nextSlide();
      setIsDragging(false);
    } else if (distance < -50) {
      prevSlide();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + data.length) % data.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Title title={"Каталог подарков"} />
      <div
        className={styles.wrap}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              index === currentIndex ? styles.active : ""
            }`}
          >
            <div className={styles.imgWrap}>
              <img src={item.img} alt={item.name} className={styles.img} />
            </div>
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
