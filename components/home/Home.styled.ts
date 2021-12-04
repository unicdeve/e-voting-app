import styled from 'styled-components';

export const StyledHome = styled.div`
	margin: 10px;

	h2 {
		font-size: 24px;
		font-weight: 600;
	}

	p {
		color: #73737b;
		font-size: 14px;
	}
`;

export const StyledElection = styled.div`
	display: flex;
	background: #f6fbfc;
	border-radius: 16px;

	.image {
	}

	.description {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 40px;

		h5 {
			color: #2a2a3a;
			font-weight: 500;
			font-size: 16px;
			margin-bottom: 2rem;
			margin-top: 1rem;
		}
	}

	@media (max-width: 400px) {
		flex-direction: column;

		.description {
			padding: 15px;
		}
	}
`;
