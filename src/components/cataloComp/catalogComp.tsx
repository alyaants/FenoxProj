import React from "react";
import { MOCK_ARR } from "../../utiles/api";
import Slider from "../slider/slider";
import styles from "../partners/partners.module.scss";
import catalogSlider from "./catalogComp.module.scss";
import Title from "../title/title";
import { useNavigate } from "react-router-dom";
import { RoutesList } from "../../pages/router";

const CatalogComp = () => {
  const data = MOCK_ARR.products.slice(0, 10);
  const navigate = useNavigate();
  const onClick = () => {
    navigate(RoutesList.Catalog);
  };
  return (
    <div>
      <Title title={"Каталог подарков"} />
      <p className={styles.link} onClick={onClick}>
        {"Посмотреть все >"}
      </p>
      <Slider
        data={data}
        cardClassName={catalogSlider.card}
        imgWrapClassName={catalogSlider.imgWrap}
        nameClassName={catalogSlider.name}
      />
    </div>
  );
};

export default CatalogComp;
