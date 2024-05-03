import { MOCK_ARR } from "../../utiles/api";
import { CardGift } from "../cards/cardGift/cardGift";
import Title from "../title/title";
import styles from "./gift.module.scss";

const Gifts = () => {
  const data = MOCK_ARR.products;

  return (
    <div>
      <Title title={"Подарочные карты"} />
      <div className={styles.cardsGiftsWrap}>
        {data.slice(0, 5).map((item) => (
          <CardGift img={item.img} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};
export default Gifts;
