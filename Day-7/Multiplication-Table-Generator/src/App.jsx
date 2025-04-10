import React, { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(number, 10);

    if (isNaN(num) || num < 0 || num > 1000) {
      alert('Please enter a valid number between 0 and 1000.');
      return;
    }

    const results = [];
    for (let i = 1; i <= 20; i++) {
      results.push(`${num} x ${i} = ${num * i}`);
    }

    setTable(results);
  };

  return (
    <Container>
      <Title>Multiplication Table Generator</Title>
      <Input
        id="number"
        type="number"
        placeholder="Enter a number (0-1000)"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <Button id="generateTable" onClick={generateTable}>
        Generate Table
      </Button>
      <TableList id="multiplicationTable">
        {table.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </TableList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h1`
  color: #2c3e50;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 2px solid #3498db;
  border-radius: 5px;
  width: 200px;
`;

const Button = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 18px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const TableList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 30px;
  width: 250px;
`;

const ListItem = styled.li`
  background-color: #ecf0f1;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
`;

export default App;
