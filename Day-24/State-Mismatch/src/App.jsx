import { useState, useEffect } from "react";

function App() {
	const [count, setCount] = useState(0);

	// Log the updated count after it changes
	useEffect(() => {
		console.log(`newCount: ${count}`);
	}, [count]);

	return (
		<>
			<div className="card">{count}</div>
			<button
				id="increment"
				data-testid="incrementBtn"
				onClick={() => {
					setCount((count) => count + 1);
				}}
			>
				Increment
			</button>
		</>
	);
}

export default App;
