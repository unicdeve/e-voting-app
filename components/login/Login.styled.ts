import styled from 'styled-components';

export const StyledLogin = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.mf-login-row {
		display: flex;
		height: 80%;
		width: 100%;
		background: #ffffff;
		margin: auto;

		.col-1 {
			position: relative;
			width: 50%;
			height: 100%;

			.bg-image {
				border-radius: 8px;
			}
		}

		.col-2 {
			width: 50%;
			padding: 0 80px;
		}
	}

	@media (max-width: 400px) {
		.mf-login-row {
			display: block;
			box-shadow: none;

			.col-1 {
				display: none;
			}

			.col-2 {
				width: 100%;
				padding: 0 15px;
			}
		}
	}
`;
