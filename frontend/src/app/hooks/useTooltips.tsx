import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';

const useTooltips = () => {
	useEffect(() => {
		[].slice
			.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
			.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
	}, []);
};

export default useTooltips;
