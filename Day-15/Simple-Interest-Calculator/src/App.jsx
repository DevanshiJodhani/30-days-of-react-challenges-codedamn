import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(7);
  const [time, setTime] = useState(5);
  const [simpleInterest, setSimpleInterest] = useState('0.00');
  const [totalAmount, setTotalAmount] = useState('0.00');

  useEffect(() => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) || 0;
    const t = parseFloat(time) || 0;

    const interest = (p * r * t) / 100;
    const total = p + interest;

    setSimpleInterest(interest.toFixed(2));
    setTotalAmount(total.toFixed(2));
  }, [principal, rate, time]);

  return (
    <Container>
      <Box>
        <Title>Simple Interest Calculator</Title>

        <InputGroup>
          <Label htmlFor="principal">Principal Amount</Label>
          <Input
            id="principal"
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="rate">Annual Interest Rate (%)</Label>
          <Input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="time">Time (Years)</Label>
          <Input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </InputGroup>

        <Output id="simpleInterest">{simpleInterest}</Output>
        <Output id="totalAmount">{totalAmount}</Output>
      </Box>
    </Container>
  );
}

// Modern dark theme styles
const Container = styled.div`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  width: 100%;
  max-width: 500px;
  color: #ffffff;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  background: linear-gradient(to right, #00f5c4, #00d9ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2.5rem;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #e0f7fa;
  font-weight: 600;
  font-size: 1.2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid #00f5c4;
    background: rgba(255, 255, 255, 0.2);
  }
`;

const Output = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  color: #ffffff;
  text-align: center;
`;

export default App;
