import { HeadingBlock } from "../HeadingBlock";
import { Heading } from "../Heading";
import { Paragraph } from "../Paragraph";
import styles from "./Table.module.css";

interface TableProps {
  title?: string;
  description?: string;
  columns: {
    key: string;
    label: string;
    textAlign?: "left" | "center" | "right";
  }[];
  data: any[];
}

const Table = ({ title, description, columns, data }: TableProps) => {
  const getClassNames = (textAlign?: "left" | "center" | "right") => {
    switch (textAlign) {
      case "center":
        return "textAlignCenter";
      case "right":
        return "textAlignRight";
      default:
        return "textAlignLeft";
    }
  };
  return (
    <div>
      <HeadingBlock>
        <Heading as="h2">{title}</Heading>
        <Paragraph>{description}</Paragraph>
      </HeadingBlock>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={styles[getClassNames(column.textAlign)]}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={styles[getClassNames(column.textAlign)]}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
