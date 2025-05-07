import React, { useState, useRef } from 'react'
import styled from 'styled-components'

export default function App() {
	const [targetTime, setTargetTime] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [isRunning, setIsRunning] = useState(false)
	const intervalRef = useRef(null)

	const handleStart = () => {
		if (targetTime <= 0) return
		setIsRunning(true)
		intervalRef.current = setInterval(() => {
			setCurrentTime((prev) => {
				if (prev + 1 >= targetTime) {
					clearInterval(intervalRef.current)
					setIsRunning(false)
				}
				return prev + 1
			})
		}, 1000)
	}

	const handleStop = () => {
		clearInterval(intervalRef.current)
		setIsRunning(false)
	}

	const handleInputChange = (e) => {
		const value = Number(e.target.value)
		setTargetTime(value)
		setCurrentTime(0)
	}

	return (
		<Container>
			<Card>
				<Input
					id="seconds-input"
					type="number"
					placeholder="Enter seconds..."
					onChange={handleInputChange}
					disabled={isRunning}
				/>
				<ButtonGroup>
					<Button
						id="start"
						onClick={handleStart}
						disabled={isRunning}
					>
						Start
					</Button>
					<Button
						id="stop"
						onClick={handleStop}
						disabled={!isRunning}
					>
						Stop
					</Button>
				</ButtonGroup>
				<TimerDisplay id="timer">{currentTime}</TimerDisplay>
			</Card>
		</Container>
	)
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0f172a; /* slate-900 */
`

const Card = styled.div`
  background-color: #1e293b; /* slate-800 */
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  min-width: 300px;
  text-align: center;
`

const Input = styled.input`
  background: #0f172a;
  border: 2px solid #334155;
  color: #f8fafc;
  padding: 0.6rem 1rem;
  font-size: 1.2rem;
  border-radius: 0.75rem;
  width: 100%;
  margin-bottom: 1.5rem;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 10px #6366f1;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.75rem;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? '#334155' : '#6366f1')};
  color: ${(props) => (props.disabled ? '#94a3b8' : '#f8fafc')};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? '#334155' : '#4f46e5')};
  }
`

const TimerDisplay = styled.div`
  margin-top: 2rem;
  font-size: 3rem;
  font-weight: bold;
  color: #38bdf8;
  text-shadow: 0 0 10px #38bdf8;
`
