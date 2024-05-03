import styles from "./cardPartners.module.scss";

interface CardPartnersProps {
  image: string;
  name: string;
  firm: string;
  site: string;
}

const CardPartners = (props: CardPartnersProps) => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.partnerImg}>
        <img src={props.image} alt="#" />
      </div>
      <p className={styles.name}>{props.name}</p>
      <p className={styles.firm}>{props.firm}</p>
      <a href={props.site} className={styles.site}>{props.site}</a>
    </div>
  );
};

export default CardPartners;
