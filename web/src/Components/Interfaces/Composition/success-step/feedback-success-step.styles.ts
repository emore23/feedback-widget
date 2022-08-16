import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding: 16px;
	width: 100%;
	height: 264px;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 136px;
		margin-top: 16px;

		p {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 20px;
			line-height: 24px;
			color: #F4F4F5;
		}

		.other-feedback {
			background: #27272A;
			border-radius: 4px;
			width: 173px;
			height: 40px;

			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 14px;
			line-height: 24px;
			color: #F4F4F5;
			cursor: pointer;
			
			:hover {
				background: #3F3F46;
			}
		}
	}
`;
