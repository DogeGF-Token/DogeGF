import { useEffect, useState } from 'react';
import * as bootstrap from 'bootstrap';

const useNavbarOpen = (initialNavbarOpen: boolean) => {
	const [navbarOpen, setNavbarOpen] = useState(initialNavbarOpen);

	useEffect(() => {
		const navbarContent = document.getElementById(
			'navbarContent'
		) as HTMLElement;

		navbarContent.addEventListener('show.bs.collapse', () =>
			setNavbarOpen(true)
		);

		navbarContent.addEventListener('hide.bs.collapse', () =>
			setNavbarOpen(false)
		);
	}, []);

	useEffect(() => {
		[].slice
			.call(document.querySelectorAll('a'))
			.forEach((link: HTMLAnchorElement) => {
				link.addEventListener('click', (e) => {
					e.preventDefault();

					setNavbarOpen(false);

					const header = document.getElementById('header') as HTMLElement;
					const target = document.querySelector(link.hash) as HTMLElement;

					setTimeout(
						() => window.scrollTo(0, target.offsetTop - header.offsetHeight),
						350
					);
				});
			});
	}, []);

	useEffect(() => {
		const navbarContent = document.getElementById('navbarContent');

		if (navbarContent) {
			const bsNavbarContent = new bootstrap.Collapse(navbarContent, {
				toggle: false,
			});

			if (navbarOpen) {
				bsNavbarContent.show();
			} else {
				bsNavbarContent.hide();
			}
		}
	}, [navbarOpen]);

	return [navbarOpen, setNavbarOpen] as const;
};

export default useNavbarOpen;
