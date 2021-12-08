import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const query = `{
  artCollection {
    items {
      image {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
    } 
  }
}`;

const useArt = (initialArts: any) => {
	const artMSlider = useRef<Slider>(null);
	const artDSlider = useRef<Slider>(null);
	const [arts, setArts] = useState(initialArts);
	const [currentArtIndex, setCurrentArtIndex] = useState(0);

	useEffect(() => {
		axios
			.post(
				'https://graphql.contentful.com/content/v1/spaces/7kpsd4jzl1w6/',
				JSON.stringify({ query }),
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: 'Bearer pfF4Xe-FjFXm2FB8Kws-4baQZsxwpVDMZR6nEgJoZ2Y',
					},
				}
			)
			.then((res) => {
				setArts(res.data.data.artCollection.items);
			});
	}, []);

	useEffect(() => {
		artMSlider?.current?.slickGoTo(currentArtIndex, true);
		artDSlider?.current?.slickGoTo(currentArtIndex, true);
	}, [currentArtIndex]);

	return [
		arts,
		currentArtIndex,
		setCurrentArtIndex,
		artMSlider,
		artDSlider,
	] as const;
};

export default useArt;
