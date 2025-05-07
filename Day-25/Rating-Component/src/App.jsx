import React, { useState } from 'react';
import styled from 'styled-components';

export default function App() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [feedback, setFeedback] = useState('');

  // This function is called when an emoji button is clicked
  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  // This function handles the form submission
  const handleSubmit = () => {
    // If emoji and feedback are present, log them
    if (selectedEmoji && feedback.trim()) {
      console.log(`Selected Emoji: ${selectedEmoji}`);
      console.log(`Feedback: ${feedback}`);
      // Reset the form after submission
      setSelectedEmoji(null);
      setFeedback('');
    } else {
      alert('Please enter feedback before submitting.');
    }
  };

  return (
    <Container>
      <Heading>Rate Your Experience</Heading>
      <div id="feedback">
        {/* Emoji buttons */}
        <FeedbackDiv>
          {['😍', '😀', '🙁', '😭'].map((emoji) => (
            <EmojiButton key={emoji} onClick={() => handleEmojiClick(emoji)}>
              {emoji}
            </EmojiButton>
          ))}
        </FeedbackDiv>

        {/* Show text area and submit button if emoji is selected */}
        {selectedEmoji && (
          <>
            <TextArea
              placeholder="Please provide your feedback..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <SubmitButton id="submit" onClick={handleSubmit}>
              Submit
            </SubmitButton>
          </>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #121212;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 40px;
  color: #00d4ff;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeedbackDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const EmojiButton = styled.button`
  font-size: 4rem;
  padding: 15px;
  background: linear-gradient(145deg, #ff6f61, #00d4ff);
  border: none;
  border-radius: 50%;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.4s ease, filter 0.2s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
    background: linear-gradient(145deg, #ff6f61, #00d4ff);
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(1);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  padding: 15px;
  width: 350px;
  height: 120px;
  font-size: 1.2rem;
  background-color: #2c2c2c;
  border: 2px solid #00d4ff;
  border-radius: 12px;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  resize: none;
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    font-size: 1rem;
    height: 100px;
  }

  &:focus {
    border-color: #ff6f61;
    background-color: #3a3a3a;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 14px 30px;
  font-size: 1.2rem;
  background-color: #00d4ff;
  color: #1e1e1e;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transition: background-color 0.4s ease, transform 0.3s ease,
    box-shadow 0.4s ease;

  &:hover {
    background-color: #ff6f61;
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transform: translateY(2px);
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`;
