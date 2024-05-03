import Button from "../button/button";
import styles from "./banner.module.scss";
import image from "../../styles/imgs/95a5b39714c24db3bf6fa659a5a009831.png";

const Banner = () => {
  return (
    <div className={styles.bannerWrap}>
      <div className={styles.textWrap}>
        <h2>
          <span>Дарим бонус</span> за регистрацию: 100 баллов
        </h2>
        <div className={styles.buttonsWrap}>
          <Button title={"Войти"} className={styles.signIn} />
          <Button
            title={"Зарегистрироваться"}
            className={styles.registration}
          />
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} alt="#" />
      </div>
    </div>
  );
};
export default Banner;
