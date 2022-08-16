import styled from 'styled-components';

export const Container = styled.div`
	button.appeareance-close {
		background: none;
		display: flex;
		color: #A1A1AA;

		:hover {
			color: #F4F4F5;
			cursor: pointer;
		}
	}

	button.appeareance-open {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 12px;
		background: #8257E5;
		border-radius: 50px;
		color: white;
		cursor: pointer;

		span {
			max-width: 0;
			overflow: hidden;

			font-family: 'Inter';
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
			color: #FFFFFF;
			
			.space-between {
				margin-left: 4px;
			}
	
			:hover {
				max-width: 64px;
			}
		}

		:hover > span {
			max-width: 240px;
			transition: all ease-in-out 0.5s;
		}
	}
`;
