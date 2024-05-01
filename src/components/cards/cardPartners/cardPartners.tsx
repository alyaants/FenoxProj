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
      <p className={styles.site}>{props.site}</p>
    </div>
  );
};

export default CardPartners;
