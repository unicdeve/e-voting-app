import styled from 'styled-components';

export const StyledFormInput = styled.div`
	display: flex;
	flex-direction: column;

	label {
		margin-bottom: 1rem;
		font-size: 14px;
	}

	input {
		background: #ecf1f4;
		border: 1px solid #dfdfdf;
		border-radius: 8px;
		padding: 12px 16px;

		&:focus {
			outline: none;
			border: 1px solid #dfdfdf;
		}
	}
`;
