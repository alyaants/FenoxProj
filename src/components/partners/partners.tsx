import { useNavigate } from "react-router-dom";
import { MOCK_ARR } from "../../utiles/api";
import CardPartners from "../cards/cardPartners/cardPartners";
import Title from "../title/title";
import styles from "./partners.module.scss";
import { RoutesList } from "../../pages/router";

const Partners = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(RoutesList.Partners);
  };
  const data = MOCK_ARR.partners;

  return (
    <div>
      <Title title={"Партнеры программы"} />
      <p className={styles.link} onClick={onClick}>
        {"Посмотреть все >"}
      </p>
      <div className={styles.cardsPartnersWrap}>
        {data.map((item) => (
          <CardPartners
            image={item.img}
            name={item.name}
            firm={item.firm}
            site={item.site}
          />
        ))}
      </div>
    </div>
  );
};
export default Partners;
