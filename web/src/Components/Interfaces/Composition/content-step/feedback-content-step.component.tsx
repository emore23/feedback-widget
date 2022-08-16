// Dependencies
import React, { FormEvent, useState } from "react";

// Components
import Button from "../../../Elements/Button/button.component";
import ScreenshotButton from "../../../Elements/Screenshot/screenshot-button.components";

// Styles
import { Container } from "./feedback-content-step.styles";

// Assets
import { ArrowLeft, X, CircleNotch } from "phosphor-react";

// Utils
import {
  FeedbackType,
  feedbackTypes,
} from "../../../../Utils/models/feedbackTypes";

// Services
import { api } from "../../../../Server/api";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  closeButton: () => void;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
  feedbackType,
  closeButton,
  onFeedbackRestartRequested,
  onFeedbackSent
}) => {
  const [ screenshot, setScreenshot ] = useState<string | null>(null);
  const [ comment, setComment ] = useState<string>('');
  const [ isSendingFeedback, setIsSendingFeedback ] = useState<boolean>(false);
  
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    })
    
    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <Container>
      <div className="header">
        <Button type="close" clickedButton={onFeedbackRestartRequested}>
          <ArrowLeft weight="bold" />
        </Button>

        <div className="feedback">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
          />

          <p className="feedback-title">{feedbackTypeInfo.name}</p>
        </div>

        <Button
          title="Fechar Formulário"
          clickedButton={closeButton}
          type="close"
        >
          <X weight="bold" width={16} height={16} />
        </Button>
      </div>

      <form 
        onSubmit={handleSubmitFeedback}
        className="feedback-type"
      >
        <textarea
          className="description"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={event => setComment(event.target.value)}
        />
				
				<footer>
					<ScreenshotButton 
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
					
					<button 
            className="submit-feedback" 
            type="submit"
            disabled={comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <CircleNotch />  : 'Enviar feedback'}						
					</button>
				</footer>
      </form>
    </Container>
  );
};

export default FeedbackContentStep;
