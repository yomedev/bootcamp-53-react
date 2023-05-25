import styles from "./Link.module.css";

export const Link = ({ href = "/", children }) => {
  return (
    <a className={styles.link} href={href} title="title">
      {children}
    </a>
  );
};
