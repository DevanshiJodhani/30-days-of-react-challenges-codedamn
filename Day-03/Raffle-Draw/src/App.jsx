import { useState, useRef } from 'react';
import styled from 'styled-components';

export default function App() {
  const [nameInput, setNameInput] = useState('');
  const [nameList, setNameList] = useState([]);
  const [pickedList, setPickedList] = useState([]);
  const [pickedName, setPickedName] = useState(null);
  const dialogRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && nameInput.trim()) {
      setNameList([...nameList, nameInput.trim()]);
      setNameInput('');
    }
  };

  const pickRandomName = () => {
    if (nameList.length === 0) return;

    const randomIndex = Math.floor(Math.random() * nameList.length);
    const name = nameList[randomIndex];
    const updateNameList = nameList.filter((_, index) => index !== randomIndex);

    setNameList(updateNameList);
    setPickedList([...pickedList, name]);
    setPickedName(name);

    if (dialogRef.current) {
      dialogRef.current.showModal(); // fixed typo
    }
  };

  return (
    <Container>
      <Title>🎉 Raffle Draw</Title>

      <Input
        id="nameInput"
        type="text"
        placeholder="Enter a name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <NameList id="nameList">
        {nameList.map((name, index) => (
          <Name key={index} className="name">
            {name}
          </Name>
        ))}
      </NameList>

      <Button id="pick" onClick={pickRandomName}>
        Pick a Name
      </Button>

      <StyledDialog id="nameDialog" ref={dialogRef}>
        <p>{pickedName && `🎯 Picked Name: ${pickedName}`}</p>
        <Button onClick={() => dialogRef.current.close()}>Close</Button>
      </StyledDialog>

      <NameList id="pickedList">
        {pickedList.map((name, index) => (
          <Name key={index} className="name">
            {name}
          </Name>
        ))}
      </NameList>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 2px solid #aaa;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 1rem;
  width: 300px;
  transition: border-color 0.3s;
  &:focus {
    border-color: #5e60ce;
    outline: none;
  }
`;

const NameList = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Name = styled.span`
  background-color: #5e60ce;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #5e60ce;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 16px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4e51b2;
  }
`;

const StyledDialog = styled.dialog`
  padding: 1.5rem 2rem;
  border: none;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #fff;
  ::backdrop {
    background: rgba(0, 0, 0, 0.4);
  }
`;
