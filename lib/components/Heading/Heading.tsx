import styles from "./Heading.module.css";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

export { Heading };
