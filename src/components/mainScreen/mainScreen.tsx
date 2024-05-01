import Button from "../button/button";
import CardMainScreen from "../cards/cardMainScreen/cardMainScreen";
import styles from "./mainScreen.module.scss";

const MainScreen = () => {
  return (
    <div className={styles.mainScreen}>
      <div className={styles.description}>
        <div className={styles.textWrap}>
          <h1 className={styles.title}>
            Программа лояльности <span>Fenox Gold</span>
          </h1>
          <p>
            Вы владелец СТО или магазина запчастей? Регистрируйтесь и выбирайте
            подарки!
          </p>
        </div>
        <div className={styles.buttonsWrap}>
          <Button title={"Войти"} className={styles.signIn}/>
          <Button title={"Зарегистрироваться"} className={styles.registration} />
        </div>
      </div>
      <div className={styles.cardsWrap}>
        <CardMainScreen
          title={"Регистрируйтесь"}
          text={"Приветственные бонусы, в размере 100 баллов"}
        />
        <CardMainScreen
          title={"Получайте баллы"}
          text={"Покупайте товары FENOX и получайте баллы"}
        />
        <CardMainScreen
          title={"Забирайте бонусы"}
          text={"Обменивайте баллы на подарки из каталога"}
        />
      </div>
    </div>
  );
};

export default MainScreen;
