// Assets
import bugImageUrl from '../../Assets/bug.svg';
import ideaImageUrl from '../../Assets/idea.svg';
import thoughtImageUrl from '../../Assets/thought.svg';

export const feedbackTypes = {
	PROBLEM: {
		name: 'Problema',
		image: {
			source: bugImageUrl,
			alt: 'Imagem de um inseto'
		},
	},
	IDEA: {
		name: 'Ideia',
		image: {
			source: ideaImageUrl,
			alt: 'Imagem de uma lâmpada'
		},
	},
	OTHER: {
		name: 'Outros',
		image: {
			source: thoughtImageUrl,
			alt: 'Imagem de um nuvem de pensamento'
		},
	}
};

export type FeedbackType = keyof typeof feedbackTypes;