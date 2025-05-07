import React, { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const [startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');
  const [randomNumber, setRandomNumber] = useState('');

  const handleGenerate = () => {
    const start = parseInt(startRange, 10);
    const end = parseInt(endRange, 10);

    if (isNaN(start) || isNaN(end)) {
      setRandomNumber('Invalid Input');
      return;
    }

    if (start > end) {
      setRandomNumber('Start must be less than or equal to End');
      return;
    }

    const result = Math.floor(Math.random() * (end - start + 1)) + start;
    setRandomNumber(result);
  };

  return (
    <Page>
      <Container>
        <Title>🎲 Random Number Generator</Title>
        <InputWrapper>
          <Input
            id="startRange"
            type="number"
            placeholder="Start"
            value={startRange}
            onChange={(e) => setStartRange(e.target.value)}
          />
          <Input
            id="endRange"
            type="number"
            placeholder="End"
            value={endRange}
            onChange={(e) => setEndRange(e.target.value)}
          />
        </InputWrapper>
        <Button id="generate" onClick={handleGenerate}>
          Generate
        </Button>
        <Result id="randomNumber">{randomNumber}</Result>
      </Container>
    </Page>
  );
}
const Page = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top right, #fefefe, #e9f5ff);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 2rem;
`;

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
  text-align: center;
  border: 1px solid #e0e0e0;

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1.8rem;
  color: #333;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 120px;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  border: 2px solid #d0d0d0;
  background: #ffffff;
  font-size: 1rem;
  text-align: center;
  color: #333;
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.04);
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #82b1ff;
    box-shadow: 0 0 8px rgba(130, 177, 255, 0.4);
  }
`;

const Button = styled.button`
  margin-top: 1.2rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(145deg, #82b1ff, #68a0ff);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 6px 18px rgba(104, 160, 255, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(104, 160, 255, 0.6);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  padding: 1.2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: #222;
  background: #f0f6ff;
  border-radius: 1rem;
  box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.04);
  min-height: 60px;
`;
