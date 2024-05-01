import { Outlet, useNavigate } from "react-router-dom";
import Button from "../button/button";
import image from "../../styles/imgs/logo1.png";
import drive from "../../styles/icons/Drive.png";
import tg from "../../styles/icons/TG.png";
import vk from "../../styles/icons/VK.png";
import viber from "../../styles/icons/Viber.png";
import yt from "../../styles/icons/YT.png";
import logo from "../../styles/imgs/logo2.png";
import styles from "./header.module.scss";
import { RoutesList } from "../../pages/router";

const Header = () => {
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
    <div className={styles.mainContainer}>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <nav className={styles.nav}>
            <p onClick={onClickRules}>Правила участия</p>
            <p onClick={onClickCatalog}>Каталог подарков</p>
            <p onClick={onClickPartners}>Партнёры</p>
          </nav>
          <p onClick={onClickHome} className={styles.logo}>
            <img src={image} alt="#" />
          </p>
        </div>
        <Button title={"Войти"} className={styles.logIn} />
      </header>

      <div className={styles.container}>
        <Outlet />
      </div>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.iconsWrap}>
            <img src={vk} alt="#" />
            <img src={yt} alt="#" />
            <img src={viber} alt="#" />
            <img src={tg} alt="#" />
            <img src={drive} alt="#" />
          </div>
          <img src={logo} alt="#" />
        </div>
        <div className={styles.footerText}>
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
          <p>Правила начисления бонусных баллов</p>
          <p>Договор оферты</p>
          <p>Контакты</p>
        </div>
      </footer>
    </div>
  );
};

export default Header;
