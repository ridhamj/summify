import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      heigth='10vh'
      marginTop={50}
      style={{ 
        position: 'static',
        bottom: "0", 
        padding: '1rem 0', 
        width: '100%' }}
      bg="#2D3319"
      width="100%"
    >
      <Flex justifyContent="center" alignItems="center">
        <Text>Made with ❤️ using OpenAI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
