import React, { useState, useRef, MouseEvent } from "react";
import { MOCK_ARR } from "../../utiles/api";
import styles from "./slider.module.scss";
import Title from "../title/title";

const Slider = () => {
  const data = MOCK_ARR.products.slice(0, 10);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.pageX - (sliderRef.current?.offsetLeft || 0));
  };

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current || startX === null) return;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
      <Title title={"Каталог подарков"} />
      <div
        className={styles.wrap}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={item.img} alt={item.name} className={styles.img} />
            </div>
            <p className={styles.name}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
