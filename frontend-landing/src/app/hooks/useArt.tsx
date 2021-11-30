import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';

const useArt = () => {
	const artMSlider = useRef<Slider>(null);
	const artDSlider = useRef<Slider>(null);
	const [currentArtIndex, setCurrentArtIndex] = useState(0);

	useEffect(() => {
		artMSlider?.current?.slickGoTo(currentArtIndex, true);
		artDSlider?.current?.slickGoTo(currentArtIndex, true);
	}, [currentArtIndex]);

	return [currentArtIndex, setCurrentArtIndex, artMSlider, artDSlider] as const;
};

export default useArt;
