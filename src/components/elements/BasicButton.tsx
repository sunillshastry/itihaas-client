import PropTypes from 'prop-types';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface FunctionProps extends ComponentPropsWithoutRef<'button'> {
	children: Readonly<React.ReactNode>;
	variant?: 'light' | 'dark';
}

function BasicButton({
	children,
	onClick,
	className,
	variant = 'dark',
}: FunctionProps) {
	const styles = {
		dark: 'from-primary-200 to-primary-600 text-primary-70 hover:from-primary-400 hover:to-primary-700 focus:outline-primary-10',
		light:
			'from-primary-30 to-primary-60 text-primary-700 hover:from-primary-60 hover:to-primary-80 focus:outline-primary-20',
	};

	return (
		<button
			onClick={onClick}
			className={twMerge(
				variant === 'dark' ? styles.dark : styles.light,
				'flex items-center rounded-sm bg-linear-to-b px-3 py-2 text-sm shadow-md transition hover:cursor-pointer focus:outline-3',
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
