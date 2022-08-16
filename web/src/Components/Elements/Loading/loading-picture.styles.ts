import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	background: #27272A;
	border-radius: 4px;

	> svg {
		animation-name: spin;
		animation-duration: 5000ms;
		animation-iteration-count: infinite;
		animation-timing-function: linear; 
	
		@keyframes spin {
			from {
					transform:rotate(0deg);
			}
			to {
					transform:rotate(360deg);
			}
		}
	}
`;

