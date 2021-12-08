import styled from 'styled-components';

export const StyledElectionCard = styled.div`
	display: flex;
	background: #f6fbfc;
	border-radius: 16px;
	margin-bottom: 2rem;

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

		button {
			&.upcoming {
				background: #73737b;
			}
		}
	}

	@media (max-width: 400px) {
		flex-direction: column;

		.description {
			padding: 15px;
		}
	}
`;
