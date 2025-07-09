import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'button'> {
	children: Readonly<React.ReactNode>;
}

function BasicButton({ children, onClick, className }: FunctionProps) {
	return (
		<button
			onClick={onClick}
			className={twMerge(
				'from-primary-200 to-primary-600 text-primary-70 hover:from-primary-400 hover:to-primary-700 focus:outline-primary-10 flex items-center rounded-sm bg-linear-to-b px-3 py-2 text-sm shadow-md hover:cursor-pointer focus:outline-3',
				className
			)}
		>
			{children}
		</button>
	);
}

BasicButton.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
	onClick: PropTypes.func,
	className: PropTypes.string,
};

export default BasicButton;
