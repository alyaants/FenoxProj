import Button from "../../button/button";
import styles from "./cardGift.module.scss";

interface CardGiftProps {
  img: string;
  name: string;
  price: string;
}

const CardGift = (props: CardGiftProps) => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.image}>
        <img src={props.img} alt="" />
      </div>
      <div className={styles.rightWrap}>
        <div className={styles.info}>
          <p className={styles.name}>{props.name}</p>
          <p className={styles.price}>{props.price} руб.</p>
        </div>
        <div>
          <Button className={styles.button} title={"+"} />
        </div>
      </div>
    </div>
  );
};
export default CardGift;
