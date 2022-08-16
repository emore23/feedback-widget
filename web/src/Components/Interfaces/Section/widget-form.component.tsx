// Dependencies
import React, { useState } from 'react';

// Styles
import { Container } from './widget-form.styles';

// Components
import FeedbackTypeStep from '../Composition/type-step/type-step.componen';
import FeedbackContentStep from '../Composition/content-step/feedback-content-step.component';

// Utils
import { FeedbackType } from '../../../Utils/models/feedbackTypes';
import FeedbackSuccessStep from '../Composition/success-step/feedback-success-step.component';

interface WidgetFormProps {
	closeWidget: () => void;
}

const WidgetForm: React.FC<WidgetFormProps> = ({closeWidget}) => {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);

	function handleRestartFeedback() {
		setFeedbackSent(false);
		setFeedbackType(null);
	}

	return (
		<Container>			
			{feedbackSent ? (
				<FeedbackSuccessStep 
					closeButton={closeWidget} 
					onFeedbackSent={handleRestartFeedback} 
				/>
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep 
							onFeedbackTypeChanged={setFeedbackType} 
							closeButton={closeWidget} 
						/>
					) : (
						<FeedbackContentStep 
							feedbackType={feedbackType}
							closeButton={closeWidget} 
							onFeedbackRestartRequested={handleRestartFeedback}
							onFeedbackSent={() => setFeedbackSent(true)}
						/>
					)}
				</>
			)}
	
			<div className='footer'>
				<p className='made-by'>Feito com ♥ pela Rocketseat</p>
			</div>
		</Container>
	);
}

export default WidgetForm;