import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (event) => {
    setCharCount(event.target.value.length);
  };

  return (
    <Container>
      <Card>
        <Heading>Character Counter</Heading>
        <TextArea
          id="textInput"
          onChange={handleInputChange}
          placeholder="Start typing..."
        />
        <CharacterCount>
          Character Count: <span id="count">{charCount}</span>
        </CharacterCount>
      </Card>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #121212, #1e1e1e);
  padding: 20px;
  color: #e0e0e0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Card = styled.div`
  background-color: #1f1f1f;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

const Heading = styled.h1`
  color: #00d1ff;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  font-size: 16px;
  border-radius: 12px;
  border: 2px solid #444;
  background-color: #2c2c2c;
  color: #e0e0e0;
  resize: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #00d1ff;
    box-shadow: 0 0 8px #00d1ff55;
    outline: none;
  }
`;

const CharacterCount = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #ccc;
  span {
    color: #00d1ff;
    font-weight: bold;
  }
`;

export default App;
