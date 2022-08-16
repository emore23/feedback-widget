// Dependencies
import React, { useState } from 'react';

// Components
import Button from '../../../Elements/Button/button.component';

// Utils
import { FeedbackType, feedbackTypes } from '../../../../Utils/models/feedbackTypes';

// Styles
import { Container } from './type-step.styles';

// Assets
import { X } from 'phosphor-react';

interface FeedbackTypesStepsProps {
	onFeedbackTypeChanged: (type: FeedbackType)  => void;
	closeButton: () => void;
}

const FeedbackTypeStep: React.FC<FeedbackTypesStepsProps> = ({ onFeedbackTypeChanged, closeButton }) => {
	return (
		<Container>
			<div className='header'>
				<p className='your-feedback'>Deixe seu feedback</p>

				<Button title='Fechar Formulário' clickedButton={closeButton} type='close'>
						<X weight='bold' width={16} height={16} />
				</Button>
			</div>
			
			<div className='feedback-type'>
				{Object.entries(feedbackTypes).map(([key, value]) => {

					return (
						<button 
							key={key}
							className='button-type' 
							onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
						>
							<img src={value.image.source} alt={value.image.alt} />

							<p>{value.name}</p>
						</button>
					);
				})}
			</div>
		</Container>
	);
}

export default FeedbackTypeStep;