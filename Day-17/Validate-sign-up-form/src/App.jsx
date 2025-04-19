import React, { useState } from 'react'
import styled from 'styled-components'

const SignUpForm = () => {
	const [formValues, setFormValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: ''
	})

	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormValues((prev) => ({ ...prev, [name]: value }))
	}

	const validate = () => {
		const newErrors = {}

		if (!formValues.firstName.trim()) {
			newErrors.firstName = 'First name cannot be empty'
		}

		if (!formValues.lastName.trim()) {
			newErrors.lastName = 'Last name cannot be empty'
		}

		const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
		if (!emailRegex.test(formValues.email)) {
			newErrors.email = 'Invalid email address'
		}

		if (formValues.password.length < 8) {
			newErrors.password = 'Password must be greater than 7 characters'
		}

		if (formValues.password !== formValues.confirmPassword) {
			newErrors.confirmPassword = 'Passwords do not match'
		}

		return newErrors
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		const validationErrors = validate()
		setErrors(validationErrors)

		if (Object.keys(validationErrors).length === 0) {
			console.log('Form submitted successfully')
		}
	}

	return (
		<Wrapper>
			<h1>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<input
					data-testid="first-name-id"
					type="text"
					name="firstName"
					value={formValues.firstName}
					onChange={handleChange}
					placeholder="First Name"
				/>
				<p data-testid="first-name-error-id" className="error">
					{submitted && errors.firstName}
				</p>

				<input
					data-testid="last-name-id"
					type="text"
					name="lastName"
					value={formValues.lastName}
					onChange={handleChange}
					placeholder="Last Name"
				/>
				<p data-testid="last-name-error-id" className="error">
					{submitted && errors.lastName}
				</p>

				<input
					data-testid="email-id"
					type="email"
					name="email"
					value={formValues.email}
					onChange={handleChange}
					placeholder="Email Address"
				/>
				<p data-testid="email-error-id" className="error">
					{submitted && errors.email}
				</p>

				<input
					data-testid="password-id"
					type="password"
					name="password"
					value={formValues.password}
					onChange={handleChange}
					placeholder="Password"
				/>
				<p data-testid="password-error-id" className="error">
					{submitted && errors.password}
				</p>

				<input
					data-testid="confirm-password-id"
					type="password"
					name="confirmPassword"
					value={formValues.confirmPassword}
					onChange={handleChange}
					placeholder="Confirm Password"
				/>
				<p data-testid="confirm-password-error-id" className="error">
					{submitted && errors.confirmPassword}
				</p>

				<button type="submit">Sign Up</button>
			</form>
		</Wrapper>
	)
}

export default SignUpForm

const Wrapper = styled.div`
	min-height: 100vh;
	background: radial-gradient(circle at top left, #111 0%, #000 100%);
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		margin-bottom: 30px;
		font-size: 3.2rem;
		font-weight: 700;
		background: linear-gradient(90deg, #4caf50, #00c896);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		text-align: center;
	}

	form {
		background: rgba(18, 18, 18, 0.6);
		backdrop-filter: blur(16px);
		border-radius: 20px;
		box-shadow: 0 0 40px rgba(0, 255, 150, 0.1);
		padding: 40px;
		width: clamp(320px, 95%, 440px);
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	input {
		background-color: transparent;
		color: #ffffff;
		border: 1px solid #333;
		padding: 16px;
		font-size: 16px;
		border-radius: 10px;
		transition: all 0.3s ease;
		width: 100%;
		box-sizing: border-box;

		&:focus {
			outline: none;
			border-color: #00c896;
			box-shadow: 0 0 10px rgba(0, 200, 150, 0.5);
		}
	}

	input::placeholder {
		color: #888;
		opacity: 0.8;
	}

	button {
		margin-top: 20px;
		background: linear-gradient(135deg, #00c896, #4caf50);
		color: white;
		padding: 14px;
		font-size: 18px;
		font-weight: bold;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 0 16px rgba(0, 200, 150, 0.4);

		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 0 20px rgba(0, 255, 150, 0.6);
		}

		&:active {
			transform: scale(0.98);
		}
	}

	.error {
    margin: 0 0 24px 0;
		color: #ff0000;
		font-size: 16px;
		font-weight: 500;
		align-self: flex-start;
	}
`

