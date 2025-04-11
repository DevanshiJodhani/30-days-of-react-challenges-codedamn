import React, { useState } from 'react'
import './App.css'

export const useTheme = () => {
	const [theme, setTheme] = useState('light')

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return { theme, toggleTheme }
}

const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={`app-container ${theme}`}>
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	)
}

export default App
