import { SVGProps } from 'react';

const BurgerIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			{...props}
			fill="currentColor"
			width="24"
			height="24"
			viewBox="0 0 19 19"
		>
			<path d="M9.5 7.38922L16.8892 0L19 2.11078L11.6108 9.5L19 16.8892L16.8892 19L9.5 11.6108L2.11078 19L0 16.8892L7.38922 9.5L0 2.11078L2.11078 0L9.5 7.38922Z" />
		</svg>
	);
};

export default BurgerIcon;
