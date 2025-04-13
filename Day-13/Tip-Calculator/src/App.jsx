import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const calculateTotal = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercent);

    if (!isNaN(bill) && !isNaN(tip)) {
      const total = bill + (bill * tip) / 100;
      setTotalAmount(total.toFixed(2));
    } else {
      setTotalAmount('');
    }
  };

  return (
    <Container>
      <CalculatorCard>
        <Title>💰 Tip Calculator</Title>
        <Input
          type="number"
          id="billAmount"
          placeholder="Enter Bill Amount"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
        <Input
          type="number"
          id="tipPercent"
          placeholder="Enter Tip Percentage"
          value={tipPercent}
          onChange={(e) => setTipPercent(e.target.value)}
        />
        <Button id="calculateAmount" onClick={calculateTotal}>
          Calculate
        </Button>
        <Total id="totalAmount">{totalAmount}</Total>
      </CalculatorCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
`;

const CalculatorCard = styled.div`
  background-color: #1c2833;
  padding: 3rem 4rem;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  color: #ecf0f1;
  font-weight: 700;
`;

const Input = styled.input`
  width: 80%;
  padding: 1.2rem;
  margin: 1rem 0;
  font-size: 1.2rem;
  border: 2px solid #566573;
  border-radius: 8px;
  transition: border 0.3s, box-shadow 0.3s;
  background-color: #2c3e50;
  color: #ecf0f1;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 8px rgba(41, 128, 185, 0.3);
  }

  &::placeholder {
    color: #95a5a6;
    font-style: italic;
  }
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Total = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ecf0f1;
`;

export default App;
