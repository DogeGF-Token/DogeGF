import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from 'app/constants';

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
				`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
				JSON.stringify({ query }),
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
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
