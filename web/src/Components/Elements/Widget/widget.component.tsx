// Dependencies
import React, { useState } from 'react';

// Styles
import { Container } from './widget.styles';

// Assets
import { ChatTeardropDots } from 'phosphor-react';
import WidgetForm from '../../Interfaces/Section/widget-form.component';
import Button from '../Button/button.component';

const Widget: React.FC = () => {
	const [ isWidgetOpen, setIsWidgetOpen ] = useState<boolean>(false);

	function closeWidgetVisibility() {
		setIsWidgetOpen(!isWidgetOpen);
	}

	return (
		<Container>
			{isWidgetOpen && <WidgetForm closeWidget={closeWidgetVisibility} />}

			<Button clickedButton={() => closeWidgetVisibility()} type='open'>
				<ChatTeardropDots width={24} height={24} color="white" /> 

				<span>
					<span className='space-between' />
					Feedback
				</span>
			</Button>
		</Container>
	);
}

export default Widget;