import styles from "./HeadingBlock.module.css";

const HeadingBlock = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.headingBlock}>{children}</div>;
};

export { HeadingBlock };
