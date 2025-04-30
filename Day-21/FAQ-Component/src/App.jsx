import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const faqData = [
  {
    question: '💡 What is React?',
    answer:
      'React is a JavaScript library for building user interfaces. It makes building UIs simple and declarative.',
  },
  {
    question: '📦 What is a component?',
    answer:
      'A component is a reusable piece of UI in React. Components can be functional or class-based.',
  },
  {
    question: '🧠 What is state in React?',
    answer:
      'State is a built-in object used to contain data or information about the component. State changes trigger UI updates.',
  },
  {
    question: '📬 What are props in React?',
    answer:
      'Props are short for properties. They are read-only inputs passed to components to configure or customize them.',
  },
];

const App = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <Container>
      <Title>📚 Frequently Asked Questions</Title>
      {faqData.map((item, index) => (
        <Accordion className="accordion" key={index}>
          <Question
            className="question"
            onClick={() => toggleAccordion(index)}
            active={openIndex === index}>
            {item.question}
          </Question>
          <Answer
            className="answer"
            isOpen={openIndex === index}>
            {item.answer}
          </Answer>
        </Accordion>
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 700px;
  margin: 80px auto;
  padding: 2rem;
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px #0ff; }
  50% { box-shadow: 0 0 20px #0ff; }
  100% { box-shadow: 0 0 10px #0ff; }
`;

const Accordion = styled.div`
  background-color: #1a1a1a;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #2e2e2e;

  &:hover {
    animation: ${glow} 1.5s infinite ease-in-out;
  }
`;

const Question = styled.div`
  padding: 1.2rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#0ff' : '#292929')};
  color: ${({ active }) => (active ? '#000' : '#fff')};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#0ef' : '#333')};
  }
`;

const Answer = styled.div`
  padding: 1.1rem 1.5rem;
  background-color: #202020;
  border-top: 1px solid #333;
  color: #ccc;
  font-size: 0.95rem;
  line-height: 1.6;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Title = styled.h1`
  text-align: center;
  color: #0ff;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

export default App;
