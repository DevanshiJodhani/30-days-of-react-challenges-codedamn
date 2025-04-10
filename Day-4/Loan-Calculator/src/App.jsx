import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [totalCost, setTotalCost] = useState('');
  const [intervals, setIntervals] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateEMI = () => {
    if (!totalCost || !intervals || intervals == 0) {
      setMonthlyPayment('Invalid input');
      return;
    }
    const emi = (parseFloat(totalCost) / parseInt(intervals)).toFixed(2);
    setMonthlyPayment(emi);
  };

  return (
    <Container>
      <Title>💰 Loan EMI Calculator</Title>
      <Form>
        <Label>Total Loan Amount</Label>
        <Input
          id="totalCost"
          type="number"
          placeholder="Enter total amount"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
        />

        <Label>Number of Monthly Payments</Label>
        <Input
          id="numberOfIntervals"
          type="number"
          placeholder="Enter number of months"
          value={intervals}
          onChange={(e) => setIntervals(e.target.value)}
        />

        <Button id="calculate" onClick={calculateEMI}>
          Calculate EMI
        </Button>

        {monthlyPayment !== null && (
          <Output id="output">
            {isNaN(monthlyPayment)
              ? 'Please enter valid numbers'
              : `Monthly Payment: ₹${monthlyPayment}`}
          </Output>
        )}
      </Form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-weight: 600;
  color: #444;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const Output = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #e0f7fa;
  border: 1px solid #00acc1;
  border-radius: 6px;
  font-weight: bold;
  color: #006064;
  text-align: center;
`;

export default App;
