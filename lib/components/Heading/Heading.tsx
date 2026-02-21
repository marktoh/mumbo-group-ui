import styles from "./Heading.module.css";
interface HeadingProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

const Heading = ({ as: As = "h1", children }: HeadingProps) => {
  return <As className={styles[As]}>{children}</As>;
};

export { Heading };
