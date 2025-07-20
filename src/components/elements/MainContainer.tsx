import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'main'> {
	children: Readonly<React.ReactNode>;
}

function MainContainer({ children, className }: FunctionProps) {
	return (
		<main
			className={twMerge(
				'mx-36 mt-5 max-lg:mx-20 max-md:mx-10 max-sm:mx-5',
				className
			)}
		>
			{children}
		</main>
	);
}

MainContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
	className: PropTypes.string,
};

export default MainContainer;
