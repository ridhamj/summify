import { useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TextInput from "./components/TextInput";
import Summary from "./components/Summary";
import Loading from "./components/Loading";

const App = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const extractSummary = async (text) => {
    setLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt:
          "Summarise the following text in less than 500 words - \n\n" +
          text +
          " - if text is not sufficient, please say 'Insufficient data, please provide more text!'",
        temperature: 0.5,
        max_tokens: 500,
        frequency_penalty: 0.8,
      }),
    };

    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options);
    const json = await response.json();
    const data = json.choices[0].text.trim();

    setSummary(data);
    setLoading(false);
  };

  return (
    <Box bg="#2D3319" color="white" height="120vh" paddingTop={10}>
      <Container maxW="3xl" centerContent>
        <Navbar />
        <Header />
        <TextInput extractSummary={extractSummary} />
        <Summary summary={summary} loading={loading} />
        <Loading loading={loading} />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
