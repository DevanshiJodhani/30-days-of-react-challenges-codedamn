import React, { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [conversionResult, setConversionResult] = useState(null);

  const handleConvert = async () => {
    if (!fromCurrency || !toCurrency) return;

    const response = await fetch(
      `https://open.er-api.com/v6/latest/${fromCurrency}`
    );
    const data = await response.json();

    if (data.rates[toCurrency]) {
      const rate = data.rates[toCurrency];
      const convertedValue = 1 * rate;
      setConversionResult(`${convertedValue} ${toCurrency}`);
    } else {
      setConversionResult('Invalid currency code');
    }
  };

  return (
    <Container>
      <Title>Currency Converter</Title>
      <InputContainer>
        <InputField
          type="text"
          id="from"
          maxLength="3"
          placeholder="From: e.g., USD"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value.toUpperCase())}
        />
        <InputField
          type="text"
          id="to"
          maxLength="3"
          placeholder="To: e.g., EUR"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value.toUpperCase())}
        />
      </InputContainer>
      <Button id="convert" onClick={handleConvert}>
        Convert
      </Button>
      <Result id="currencyValue">{conversionResult}</Result>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #2e3b4e, #1b2a38);
  color: #f1f1f1;
  font-family: 'Arial', sans-serif;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 20px;
  color: #64ffda;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  animation: slideIn 1.5s ease-out;

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const InputField = styled.input`
  background-color: #1e1e1e;
  color: #fff;
  border: 1px solid #444;
  border-radius: 8px;
  padding: 15px;
  font-size: 1.2rem;
  width: 45%;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #64ffda;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.6);
  }

  &:hover {
    background-color: #333;
    border-color: #64ffda;
  }
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.3rem;
  background-color: #64ffda;
  color: #121212;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #50e5c3;
    transform: translateY(-3px);
  }

  &:active {
    background-color: #46c8b7;
    transform: translateY(2px);
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #64ffda;
  text-align: center;
  width: 100%;
  max-width: 500px;
  opacity: 0;
  animation: fadeInResult 1s ease-out forwards;

  @keyframes fadeInResult {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
