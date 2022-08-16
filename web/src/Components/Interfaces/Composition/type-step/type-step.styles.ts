import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 0 16px;

	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
    margin-top: 16px;

		.your-feedback {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #F4F4F5;
		}
	}

	.feedback-type {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 304px;
		margin: 32px auto;

		.button-type {
			display: flex;
			flex-direction: column;
			justify-content: center;
    	align-items: center;

			width: 96px;
			height: 112px;
			background: #27272A;
			border-radius: 8px;

			p {
				margin-top: 8px;
				font-family: 'Inter';
				font-style: normal;
				font-weight: 500;
				font-size: 14px;
				line-height: 24px;
				color: #F4F4F5;
			}

			:hover {
				border: 2px solid #8257E5;
				cursor: pointer;
			}
		}
	}
`;
