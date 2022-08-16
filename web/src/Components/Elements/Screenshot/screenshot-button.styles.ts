import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	border-radius: 4px;
	background: rgba(39, 39, 42);
	color: rgba(244, 244, 245);
	cursor: pointer;
`;

export const DeletePicture = styled.button`
	display: flex;
	justify-content: end;
	align-items: flex-end;
	width: 95px;
	height: 40px;
	background: rgba(39, 39, 42);
	color: #A1A1AA;
	border: 1px solid #52525B;
	border-radius: 4px;
	cursor: pointer;

	:hover {
		color: rgba(244, 244, 245);
	}
`;