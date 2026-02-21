import styles from "./Heading.module.css";
interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

const Heading = ({ as: As = "h1", children }: HeadingProps) => {
  const className = styles[As as keyof typeof styles];
  return <As className={className}>{children}</As>;
};

export { Heading };
