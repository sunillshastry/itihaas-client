import PropTypes from 'prop-types';
import DynastyQuickFieldsContainer from './DynastyQuickFieldsContainer';

function QuickFacts({ dynasty }) {
	return (
		<section className="from-primary-100 via-primary-300 to-primary-500 mt-6 rounded-lg bg-linear-to-br px-5 py-8 shadow-lg">
			<h2 className="text-primary-70 font-heading border-primary-70/35 border-b pb-3 text-2xl">
				Quick Facts
			</h2>

			<ul className="mt-5 grid grid-cols-3 grid-rows-3 gap-y-5">
				<DynastyQuickFieldsContainer dynasty={dynasty} />
			</ul>
		</section>
	);
}

QuickFacts.propTypes = {
	dynasty: PropTypes.object.isRequired,
};

export default QuickFacts;
