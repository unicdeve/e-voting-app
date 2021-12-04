import styled from 'styled-components';

export const StyledOtpForm = styled.form`
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;

	label {
		font-size: 14px;
		color: #73737b;
		margin-bottom: 2rem;
	}

	.otp-input {
		height: 45px;
		border: 0;
		background: #ecf1f4;
		border: 1px solid #dfdfdf;
		border-radius: 8px;
		font-size: 14px;
		transition: all 0.2s ease;
		width: 50px !important;
		margin: 10px;

		&:focus {
			box-shadow: none;
			outline: 0;
		}
	}

	button {
		margin-top: 3rem;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50%;
	}
`;
