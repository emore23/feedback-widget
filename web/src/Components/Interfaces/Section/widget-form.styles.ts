import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;
	width: calc(100vw - 2rem);
	height: 100%;
	position: relative;

	background: #18181B;
	box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.15);
	border-radius: 16px;

	@media(min-width: 768px) {
		width: 336px;
		height: 264px;
	}

	.footer {
		display: flex;
    margin-bottom: 16px;

		.made-by {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 16px;
			color: #A1A1AA;
		}
	}
`;
