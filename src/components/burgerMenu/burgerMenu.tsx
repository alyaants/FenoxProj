import cross from "../../styles/icons/ph_x-bold.png";
import logo from "../../styles/imgs/logo2.png";
import Button from "../button/button";
import styles from "./burgerMenu.module.scss";
import drive from "../../styles/icons/Drive.png";
import tg from "../../styles/icons/TG.png";
import vk from "../../styles/icons/VK.png";
import viber from "../../styles/icons/Viber.png";
import yt from "../../styles/icons/YT.png";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../pages/router";

export const BurgerMenu = () => {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate(RoutesList.Home);
  };
  const onClickRules = () => {
    navigate(RoutesList.Rules);
  };
  const onClickCatalog = () => {
    navigate(RoutesList.Catalog);
  };
  const onClickPartners = () => {
    navigate(RoutesList.Partners);
  };
  return (
    <div className={styles.mobileMenu}>
      <div>
        <img src={cross} alt="#" />
        <img src={logo} alt="" onClick={onClickHome} />
      </div>
      <nav className={styles.nav}>
        <p onClick={onClickRules}>Правила участия</p>
        <p onClick={onClickCatalog}>Каталог подарков</p>
        <p onClick={onClickPartners}>Партнёры</p>
      </nav>
      <Button title={"Зарегистрироваться"} className={styles.logIn} />
      <Button title={"Войти"} className={styles.logIn} />
      <div className={styles.footer}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className={styles.iconsWrap}>
          <img src={vk} alt="#" />
          <img src={yt} alt="#" />
          <img src={viber} alt="#" />
          <img src={tg} alt="#" />
          <img src={drive} alt="#" />
        </div>
        <div className={styles.footerText}>
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
          <p>Правила начисления бонусных баллов</p>
          <p>Договор оферты</p>
          <p>Контакты</p>
        </div>
      </div>
    </div>
  );
};
