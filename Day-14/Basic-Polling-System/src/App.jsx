import React, { useState } from 'react';
import styled from 'styled-components';

const App = () => {
  const [votes, setVotes] = useState([0, 0, 0, 0]);
  const options = ['Option A', 'Option B', 'Option C', 'Option D'];

  const handleVote = (index) => {
    const updatedVotes = [...votes];
    updatedVotes[index] += 1;
    setVotes(updatedVotes);
  };

  return (
    <Container>
      <PollCard>
        <Question id="question">What is your favorite option?</Question>
        {options.map((option, index) => (
          <OptionButton
            key={index}
            className="option"
            onClick={() => handleVote(index)}
          >
            <span>{option}</span>
            <span>{votes[index]}</span>
          </OptionButton>
        ))}
      </PollCard>
    </Container>
  );
};

const Container = styled.div`
  background: #0f0f11;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PollCard = styled.div`
  background: #1a1a1d;
  border: 1px solid #2d2d2f;
  border-radius: 18px;
  padding: 50px 30px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
`;

const Question = styled.h2`
  font-size: 24px;
  color: #e4e6eb;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;

  &::after {
    content: '';
    display: block;
    margin: 12px auto 0;
    width: 100px;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
  }
`;

const OptionButton = styled.button`
  background: #212124;
  border: 1px solid #2d2d2f;
  border-radius: 12px;
  padding: 16px 30px;
  margin: 12px 0;
  width: 100%;
  font-size: 18px;
  color: #e4e6eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #2a2a2e;
    box-shadow: 0 4px 12px rgba(0, 114, 255, 0.2);
    transform: translateY(-1px);
  }

  span:first-child {
    flex: 1;
    text-align: left;
    font-weight: 500;
  }

  span:last-child {
    font-weight: bold;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: right;
    min-width: 30px;
  }
`;

export default App;
