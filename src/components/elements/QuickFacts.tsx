import PropTypes from 'prop-types';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

function QuickFacts({ children }: FunctionProps) {
	return (
		<section className="from-primary-100 via-primary-300 to-primary-500 mt-6 rounded-lg bg-linear-to-br px-5 py-8 shadow-lg">
			<h2 className="text-primary-70 font-heading border-primary-70/35 border-b pb-3 text-2xl">
				Quick Facts
			</h2>

			<ul className="mt-5 grid grid-cols-3 gap-y-5 max-md:grid-cols-2 max-sm:grid-cols-1">
				{children}
			</ul>
		</section>
	);
}

QuickFacts.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.node,
		PropTypes.string,
	]),
};

export default QuickFacts;
