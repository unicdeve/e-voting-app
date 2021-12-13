import styled from 'styled-components';

export const StyledCandidateCard = styled.div`
	display: flex;
	flex-direction: column;
	background: #f6fbfc;
	border-radius: 16px;
	margin: 1rem;
	margin-bottom: 2rem;
	width: fit-content;

	.description {
		padding: 1rem;

		h5 {
			color: #2a2a3a;
			font-weight: 500;
			font-size: 14px;
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
