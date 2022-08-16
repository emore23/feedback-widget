// Dependencies
import React from 'react';

// Components
import Button from "../../../Elements/Button/button.component";

// Styles
import { Container } from './feedback-success-step.styles';

// Assets
import { X } from "phosphor-react";
import success from '../../../../Assets/success.svg';

interface FeedbackSuccessStepProps {
  closeButton: () => void;
  onFeedbackSent: () => void;
}

const FeedbackSuccessStep: React.FC<FeedbackSuccessStepProps> = ({ closeButton, onFeedbackSent }) => {
	return (
		<Container>
			<Button type="close" clickedButton={closeButton}>
				<X weight="bold" width={16} height={16} />
			</Button>

			<div className='content'>
				<img src={success} alt="" />

				<p>Agradecemos seu feedback!</p>

				<button className='other-feedback' onClick={onFeedbackSent}>Quero enviar outro</button>
			</div>
		</Container>
	);
}

export default FeedbackSuccessStep;