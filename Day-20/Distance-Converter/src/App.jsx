import React, { useState } from 'react'
import styled from 'styled-components'

const conversionRates = {
	centimeters: 1,
	inches: 2.54,
	feet: 30.48,
	meters: 100,
	kilometers: 100000,
	miles: 160934.4
}

export default function App() {
	const [fromUnit, setFromUnit] = useState('centimeters')
	const [toUnit, setToUnit] = useState('inches')
	const [fromValue, setFromValue] = useState('')
	const [outputValue, setOutputValue] = useState('')

	const handleConvert = () => {
		if (fromValue === '' || isNaN(fromValue)) {
			setOutputValue('Invalid input')
			return
		}

		const convertedValue =
			(parseFloat(fromValue) * conversionRates[fromUnit]) /
			conversionRates[toUnit]

		if (isNaN(convertedValue)) {
			setOutputValue('Conversion error')
		} else {
			setOutputValue(parseFloat(convertedValue.toFixed(3)).toString())
		}
	}

	return (
		<Wrapper>
			<GlassCard>
				<Title>🚀 Distance Converter</Title>

				<FieldWrapper>
					<Label htmlFor="fromUnit">From Unit</Label>
					<Select
						id="fromUnit"
						value={fromUnit}
						onChange={(e) => setFromUnit(e.target.value)}
					>
						{Object.keys(conversionRates).map((unit) => (
							<option key={unit} value={unit}>
								{unit.charAt(0).toUpperCase() + unit.slice(1)}
							</option>
						))}
					</Select>
				</FieldWrapper>

				<FieldWrapper>
					<Label htmlFor="toUnit">To Unit</Label>
					<Select
						id="toUnit"
						value={toUnit}
						onChange={(e) => setToUnit(e.target.value)}
					>
						{Object.keys(conversionRates).map((unit) => (
							<option key={unit} value={unit}>
								{unit.charAt(0).toUpperCase() + unit.slice(1)}
							</option>
						))}
					</Select>
				</FieldWrapper>

				<FieldWrapper>
					<Label htmlFor="fromValue">Enter Value</Label>
					<Input
						type="number"
						id="fromValue"
						value={fromValue}
						onChange={(e) => setFromValue(e.target.value)}
						placeholder="e.g. 42"
					/>
				</FieldWrapper>

				<ConvertButton id="convert" onClick={handleConvert}>
					Convert 🔁
				</ConvertButton>

				<div id="outputValue">{outputValue}</div>
			</GlassCard>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(18px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 550px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #f3f3f3;
`

const Title = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  background: linear-gradient(90deg, #00f5a0, #00d9f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  color: #cfcfcf;
  margin-bottom: 6px;
  font-weight: 600;
`

const Select = styled.select`
  padding: 12px;
  border-radius: 10px;
  background-color: #1f1f2e;
  color: #fff;
  border: 1px solid #444;
  outline: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 10px #00d9f5;
  }

  option {
    background-color: #1f1f2e;
    color: #f1f1f1;
  }
`

const Input = styled.input`
  padding: 12px;
  border-radius: 10px;
  background-color: #1f1f2e;
  color: #fff;
  border: 1px solid #444;
  outline: none;
  font-size: 1rem;

  &::placeholder {
    color: #888;
  }

  &:focus {
    box-shadow: 0 0 10px #00f5a0;
  }
`

const ConvertButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  background: linear-gradient(to right, #00f5a0, #00d9f5);
  color: #000;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 1px;

  &:hover {
    box-shadow: 0 0 18px #00d9f5;
  }
`

const ResultBox = styled.div`
  background-color: #1b1b2f;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
  border-left: 4px solid #00f5a0;
`

const Result = styled.span`
  font-weight: bold;
  color: #00f5a0;
  margin-left: 6px;
`
