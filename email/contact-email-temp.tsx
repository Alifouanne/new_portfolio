import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
type contactProps = {
  message: string;
  sender: string;
};
const ContactEmailTemp = ({ message, sender }: contactProps) => {
  return (
    <Html>
      <Head>
        <Preview>New message from portfolio site</Preview>
      </Head>
      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Heading className="px-0 py-4 text-[24px]/[1.3] font-bold tracking-wider text-gray-700">
              You recive this message from contact portfolio form
            </Heading>
            <Section className="my-4 rounded-md border-black/10 bg-white px-10 py-4">
              <Text className="py-3 text-[15px]/[1.4] text-gray-500">
                {message}
              </Text>
              <Hr className="my-4 border-gray-500" />
              <Text className="py-3 text-[15px]/[1.4] text-gray-500">
                The sender email is {sender}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmailTemp;
