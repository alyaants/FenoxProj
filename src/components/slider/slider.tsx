import React, { useState, useRef, MouseEvent } from "react";
import styles from "./slider.module.scss";

interface SliderProps {
  data: { id: string; img: string; name: string; price?: string }[];
  cardClassName: string;
  imgWrapClassName: string;
  nameClassName: string;
  priceClassName?: string;
}

const Slider = (props: SliderProps) => {
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
    <div
      className={styles.wrap}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {props.data.map((item) => (
        <div key={item.id} className={props.cardClassName}>
          <div className={props.imgWrapClassName}>
            <img src={item.img} alt="#" />
          </div>
          <p className={props.nameClassName}>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;
