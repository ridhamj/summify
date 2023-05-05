import { useState } from 'react';
import { Textarea, Button, useToast } from '@chakra-ui/react';

const TextInput = ({ extractSummary }) => {
    
    const [text, setText] = useState('');

    const toast = useToast();

    const submitText = () => {
        if(text === '')
        {
            toast({
                title: "No Text",
                description: "Please enter some text!",
                status: "error",
                duration: 3000,
                isClosable: false,
            })
        } else {
            extractSummary(text);
        }
    }

    return (
    <>
        <Textarea 
            bg='#ECEBF3'
            color='black'
            padding={4}
            marginTop={6}
            height={200}
            value={text}
            onChange={ (e) => setText(e.target.value) }     
            placeholder='Write your text here...'   
        />

        <Button 
            bg='#23967F'
            color='white'
            marginTop={4}
            width='100%'
            _hover={{ bg: '#DBFE87', color: 'black' }}
            onClick={submitText}
        >
            Summarise
        </Button>
    </>
  )
}

export default TextInput