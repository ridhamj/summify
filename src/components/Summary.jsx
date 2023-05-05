import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

const Summary = ({ summary }) => {
  if (summary !== "")
    return (
      <>
        <Card top={4} width="100%">
          <CardHeader>
            <Heading size="md">Text Summary</Heading>
          </CardHeader>
          <CardBody>
            <Text>{summary}</Text>
          </CardBody>
        </Card>
      </>
    );
};

export default Summary;
