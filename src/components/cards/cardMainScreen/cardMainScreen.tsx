import styles from "./cardMainScreen.module.scss";

interface CardMainScreen {
  title: string;
  text: string;
  className?: string;
}

export const CardMainScreen = (props: CardMainScreen) => {
  return (
    <div className={styles.cardMainScreen}>
      <h3 className={styles.title}>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

