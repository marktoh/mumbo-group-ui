import { Paragraph } from "../lib/components/Paragraph";
import { HeadingBlock } from "../lib/components/HeadingBlock";
import { Heading } from "../lib/components/Heading";

function App() {
  return (
    <HeadingBlock>
      <Heading>Login</Heading>
      <Paragraph>Sign in with email and password</Paragraph>
    </HeadingBlock>
  );
}

export default App;
