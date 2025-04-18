import { useState } from 'react';
import styled from 'styled-components';

function Counter() {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    for (let i = 0; i < 3; i++) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  return (
    <PageWrapper>
      <Card>
        <CounterText data-testid="counter">{number}</CounterText>
        <Button data-testid="incrementButton" onClick={handleIncrement}>
          Increment 3 times
        </Button>
      </Card>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e9ecef;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 4rem;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  width: 100%;
`;

const CounterText = styled.h1`
  font-size: 6rem;
  margin-bottom: 2rem;
  color: #212529;
`;

const Button = styled.button`
  background: #28a745;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #218838;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default Counter;
