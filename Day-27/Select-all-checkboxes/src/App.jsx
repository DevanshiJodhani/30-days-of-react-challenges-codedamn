import React, { useState } from 'react'

const CheckboxList = () => {
	const [checkboxes, setCheckboxes] = useState([
		{ id: 1, label: 'Dogs', checked: false },
		{ id: 2, label: 'Cats', checked: false },
		{ id: 3, label: 'Cows', checked: false },
		{ id: 4, label: 'Deers', checked: false },
	])

	// Toggle individual checkbox
	const handleCheckboxChange = (id) => {
		setCheckboxes(prev =>
			prev.map(item =>
				item.id === id ? { ...item, checked: !item.checked } : item
			)
		)
	}

	// Select all checkboxes
	const handleSelectAll = () => {
		setCheckboxes(prev =>
			prev.map(item => ({ ...item, checked: true }))
		)
	}

	return (
		<div>
			<div data-testid="checkbox-container">
				{checkboxes.map((checkbox, index) => (
					<div key={checkbox.id}>
						<label>
							<input
								type="checkbox"
								data-testid={`checkbox-${index + 1}`}
								checked={checkbox.checked}
								onChange={() => handleCheckboxChange(checkbox.id)}
							/>
							{checkbox.label}
						</label>
					</div>
				))}
			</div>
			<button data-testid="button" onClick={handleSelectAll}>
				Select All
			</button>
		</div>
	)
}

export default CheckboxList
