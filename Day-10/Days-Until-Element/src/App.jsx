import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [days, setDays] = useState(null);
  const [error, setError] = useState('');

  const calculateDays = () => {
    const currentDate = new Date();
    const futureDate = new Date(selectedDate);
    currentDate.setHours(0, 0, 0, 0); // normalize for accurate diff

    if (futureDate <= currentDate) {
      setError('error');
      setDays(null);
    } else {
      const diffTime = futureDate - currentDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDays(diffDays);
      setError('');
    }
  };

  return (
    <Container>
      <Card>
        <Title>Days Until Countdown</Title>
        <DateInput
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <Button id="findDays" onClick={calculateDays}>
          Find Days
        </Button>

        {error && <ErrorMessage id="error">{error}</ErrorMessage>}
        {days !== null && !error && (
          <Result>
            <span id="daysLeft">{days}</span>
          </Result>
        )}
      </Card>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

const Card = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 500px;
`;

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 32px;
  color: #333;
`;

const DateInput = styled.input`
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #7a5fff;
  }
`;

const Button = styled.button`
  padding: 16px 30px;
  font-size: 18px;
  font-weight: 600;
  background-color: #7a5fff;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #5e47d8;
  }
`;

const Result = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #2d2d2d;
`;

const ErrorMessage = styled.div`
  margin-top: 20px;
  color: red;
  font-size: 16px;
  font-weight: bold;
`;

export default App;
