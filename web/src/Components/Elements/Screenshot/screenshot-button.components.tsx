// Dependencies
import React, { useState } from 'react';
import html2canvas from 'html2canvas';

// Styles
import { Container, DeletePicture } from './screenshot-button.styles';

// Assets
import { Camera, Trash } from 'phosphor-react';
import LoadingPicture from '../Loading/loading-picture.component';

interface ScreenshotButtonProps {
	screenshot: string | null;
	onScreenshotTook: (screenshot: string | null) => void;
}
const ScreenshotButton: React.FC<ScreenshotButtonProps> = ({screenshot, onScreenshotTook}) => {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

	async function handleTakeScreenshot() {
		setIsTakingScreenshot(true);

		const canvas = await html2canvas(document.querySelector('html')!);
		const base64image = canvas.toDataURL('image/png');
		
		onScreenshotTook(base64image);
		setIsTakingScreenshot(false);
	}
	
	if (screenshot) {
		return (
			<DeletePicture 
				type='button'
				onClick={() => onScreenshotTook(null)}
				style={{
					backgroundImage: `url(${screenshot})`,
					backgroundPosition: 'right bottom',
					backgroundSize: 180,
				}}
			>
				<Trash weight='fill' width={24} height={24} />
			</DeletePicture>
		)
	}
	return (
		<Container
			type='button'
			onClick={handleTakeScreenshot}
		>
			
			{isTakingScreenshot ? <LoadingPicture /> : <Camera width={24} height={24} />}
		</Container>
	);
}

export default ScreenshotButton;