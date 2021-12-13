import styled from 'styled-components';

export const StyledVote = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 100%;

	h2 {
		text-align: center;
		font-weight: 500;
		font-size: 24px;
		line-height: 33px;
	}

	.candidate-image {
		border-radius: 16px;
	}

	.btn-wrapper {
		margin-top: 3rem;

		button {
			margin: 10px;

			&.back-btn {
				background: #fff;
				color: #2b7c54;
				border: 1px solid #2b7c54;
				border-radius: 40px;
				padding: 9px 25px;
			}
		}
	}

	@media (max-width: 400px) {
	}
`;
