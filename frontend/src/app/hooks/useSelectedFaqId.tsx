import { useEffect, useState } from 'react';
import * as bootstrap from 'bootstrap';

const useSelectedFaqId = (initialFaqId: string) => {
	const [selectedFaqId, setSelectedFaqId] = useState(initialFaqId);

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
	}, []);

	useEffect(() => {
		const faqSection = document.getElementById('faq') as HTMLElement;

		[].slice
			.call(faqSection.querySelectorAll('.collapse'))
			.forEach((faq: HTMLElement) => {
				const bsFaq = new bootstrap.Collapse(faq, { toggle: false });

				if (faq.dataset.faqId === selectedFaqId) {
					bsFaq.show();
				} else {
					bsFaq.hide();
				}
			});
	}, [selectedFaqId]);

	return selectedFaqId;
};

export default useSelectedFaqId;
