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
};

export default useSelectedFaqId;
