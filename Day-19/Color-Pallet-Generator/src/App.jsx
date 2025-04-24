import React, { useState } from 'react';
import styled from 'styled-components';

// Helpers
const getRandomColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();

const getContrastYIQ = (hexcolor) => {
  const r = parseInt(hexcolor.substr(1, 2), 16);
  const g = parseInt(hexcolor.substr(3, 2), 16);
  const b = parseInt(hexcolor.substr(5, 2), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#1a1a1a' : '#ffffff';
};

const App = () => {
  const [currentPalette, setCurrentPalette] = useState([]);
  const [savedPalettes, setSavedPalettes] = useState([]);

  const generatePalette = () => {
    const palette = Array.from({ length: 5 }, () => getRandomColor());
    setCurrentPalette(palette);
  };

  const savePalette = () => {
    if (currentPalette.length) {
      setSavedPalettes([...savedPalettes, currentPalette]);
      setCurrentPalette([]);
    }
  };

  const deletePalette = (index) => {
    const updated = [...savedPalettes];
    updated.splice(index, 1);
    setSavedPalettes(updated);
  };

  return (
    <Container>
      <Title>🎨 Color Palette Generator</Title>
      <StyledButton id="generate" onClick={generatePalette}>
        Generate Palette
      </StyledButton>

      {/* Current Palette */}
      <div id="current-palette">
        {currentPalette.map((color, idx) => (
          <ColorBlock key={idx} className="color-block" color={color}>
            {color}
          </ColorBlock>
        ))}
        {currentPalette.length > 0 && (
          <StyledButton id="save" onClick={savePalette}>
            Save Palette
          </StyledButton>
        )}
      </div>

      {/* Saved Palettes */}
      <div id="saved-palettes">
        {savedPalettes.map((palette, idx) => (
          <SavedPaletteWrapper key={idx}>
            {palette.map((color, i) => (
              <ColorBlock key={i} className="color-block" color={color}>
                {color}
              </ColorBlock>
            ))}
            <DeleteButton
              className="delete-palette-button"
              onClick={() => deletePalette(idx)}
            >
              Delete Palette
            </DeleteButton>
          </SavedPaletteWrapper>
        ))}
      </div>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, #f5f7fa, #c3cfe2);
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  padding: 12px 24px;
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  background-color: #6c63ff;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #574fd6;
    transform: scale(1.05);
  }
`;

const ColorBlock = styled.div`
  width: 100px;
  height: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px 0 0;
  font-weight: bold;
  font-size: 0.9rem;
  background-color: ${(props) => props.color};
  color: ${(props) => getContrastYIQ(props.color)};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SavedPaletteWrapper = styled.div`
  background: white;
  padding: 1rem;
  margin-top: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  margin-top: 10px;
  padding: 8px 14px;
  font-size: 0.9rem;
  background-color: #ff4b5c;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #d93c4e;
  }
`;

export default App;
