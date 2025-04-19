import './App.css'

const App = () => {
	const handleClick = () => {
		console.log("Clicked!");
	};

	return (
		<div className="App">
			<button data-testid="button" className="modern-button" onClick={handleClick}>
				Click me!
			</button>
		</div>
	);
};

export default App;
