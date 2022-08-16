// Dependencies
import React from 'react';

// Styles
import { Container } from './button.styles';

interface ButtonProps {
	title?: string;
	children: React.ReactNode;
	type: 'open' | 'close';
	clickedButton?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<Container 
			title={props.title} 
			onClick={props.clickedButton}
		>
			<button className={`appeareance-${props.type}`} >
				{props.children}
			</button>
		</Container>
	);
}

export default Button;