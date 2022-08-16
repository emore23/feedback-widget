// Dependencies
import React from 'react';

// Styles
import { Container } from './loading-picture.styles';

// Assets
import { CircleNotch } from 'phosphor-react';

const LoadingPicture: React.FC = () => {
	return (
		<Container>
			<CircleNotch weight='bold' width={24} height={24} />
		</Container>
	);
}

export default LoadingPicture;