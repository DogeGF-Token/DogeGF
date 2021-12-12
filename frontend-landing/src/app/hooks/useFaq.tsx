import { useEffect, useState } from 'react';
import axios from 'axios';
import * as bootstrap from 'bootstrap';

import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from 'app/constants';

const query = `{
  faqCollection {
    items {
      question
      answer {
        json
      }
    } 
  }
}`;

const useFaq = (initialFaqs: any, initialFaqId: string) => {
	const [faqs, setFaqs] = useState(initialFaqs);
	const [selectedFaqId, setSelectedFaqId] = useState(initialFaqId);

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
				setFaqs(res.data.data.faqCollection.items);
			});
	}, []);

	useEffect(() => {
		const faqSection = document.getElementById('faq') as HTMLElement;

		[].slice
			.call(faqSection.querySelectorAll('.collapse'))
			.forEach((faq: HTMLElement) => {
				faq.addEventListener('show.bs.collapse', () => {
					setSelectedFaqId(faq.dataset.faqId || '');
				});

				faq.addEventListener('hide.bs.collapse', () => {
					setSelectedFaqId((selectedFaqId) => {
						if (faq.dataset.faqId === selectedFaqId) {
							return '';
						} else {
							return selectedFaqId;
						}
					});
				});
			});
	}, [faqs]);

	useEffect(() => {
		const faqSection = document.getElementById('faq') as HTMLElement;

		[].slice
			.call(faqSection.querySelectorAll('.collapse, .collapsing'))
			.forEach((faq: HTMLElement) => {
				const previousSibling = faq.previousSibling as HTMLElement;
				const icon = previousSibling.querySelector('.faq-icon') as HTMLElement;
				const bsFaq = new bootstrap.Collapse(faq, { toggle: false });

				if (faq.dataset.faqId === selectedFaqId) {
					bsFaq.show();
					icon.classList.remove('bi-plus');
					icon.classList.add('bi-dash');
				} else {
					bsFaq.hide();
					icon.classList.remove('bi-dash');
					icon.classList.add('bi-plus');
				}
			});
	}, [selectedFaqId]);

	return [faqs, selectedFaqId];
};

export default useFaq;
