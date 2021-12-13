import styled from 'styled-components';

export const StyledElection = styled.div`
	p {
		font-weight: normal;
		font-size: 14px;
		color: #73737b;
	}

	.candidates {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	@media (max-width: 400px) {
		.candidates {
			justify-content: center;
			flex-direction: column;
		}
	}
`;
