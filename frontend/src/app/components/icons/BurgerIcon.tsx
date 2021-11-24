import { SVGProps } from 'react';

const BurgerIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			fill="currentColor"
			width="24"
			height="24"
			viewBox="0 0 26 24"
		>
			<path d="M0.25 0.666748H25.75V3.50008H0.25V0.666748ZM8.75 10.5834H25.75V13.4167H8.75V10.5834ZM0.25 20.5001H25.75V23.3334H0.25V20.5001Z" />
		</svg>
	);
};

export default BurgerIcon;
