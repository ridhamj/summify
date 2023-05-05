import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/notes.png';

const Header = () => {
  return (
    <>
    <Image paddingTop={16} src={logo} alt='logo' width={50} marginBottom='' />
    <Heading paddingTop={4} color='white' marginBottom='1rem' size='3xl'>Too Long; <span style={{ color: "#DBFE87"}}>Can't Read?</span></Heading>
    <Text fontSize={20} textAlign='center'>
        Paste in your text below and get the <i style={{ color: "#DBFE87"}}>summary</i> now!
    </Text>
    </>
  )
}

export default Header