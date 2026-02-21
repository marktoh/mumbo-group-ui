import { Paragraph } from "../lib/components/Paragraph";
import { HeadingBlock } from "../lib/components/HeadingBlock";
import { Heading } from "../lib/components/Heading";
import { Divider } from "../lib/components/Divider";
import { Table } from "../lib/components/Table";

function App() {
  return (
    <>
      <HeadingBlock>
        <Heading>Login</Heading>
        <Paragraph>Sign in with email and password</Paragraph>
      </HeadingBlock>
      <Divider />
      <Table
        title="User Information"
        description="This table displays user information."
        columns={[
          { key: "name", label: "Name" },
          { key: "age", label: "Age" },
          { key: "city", label: "City" },
        ]}
        data={[
          { name: "Alice", age: "30", city: "New York" },
          { name: "Bob", age: "25", city: "Los Angeles" },
          { name: "Charlie", age: "35", city: "Chicago" },
        ]}
      />
    </>
  );
}

export default App;
