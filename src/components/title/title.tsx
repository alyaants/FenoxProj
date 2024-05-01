import styles from "./title.module.scss";

interface TitleProps {
  title: string;
  className?: string;
}
const Title = (props: TitleProps) => {
  return (
    <div className={styles.wrapTitle}>
      <p className={styles.title}>{props.title}</p>
    </div>
  );
};
export default Title;
