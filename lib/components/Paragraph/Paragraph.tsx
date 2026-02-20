import { clsx } from "clsx";
import styles from "./Paragraph.module.css";

const Paragraph = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={clsx(styles.paragraph, className)}>{children}</p>;
};

export { Paragraph };
