import PropTypes from 'prop-types';
import SubHeader from './SubHeader';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function NoSectionDialog({ name }) {
	return (
		<section className="mt-5">
			<SubHeader>{name}</SubHeader>
			<p className="text-primary-500 mt-2 flex font-medium italic">
				Nothing here for now. Got something to share?&nbsp;
				<Link
					to="/issues"
					className="text-primary-200 hover:text-primary-500 flex items-center underline"
				>
					<span>Suggest one yourself</span>
					<span className="ml-1">
						<ArrowRight size={16} />
					</span>
				</Link>
			</p>
		</section>
	);
}

NoSectionDialog.propTypes = {
	name: PropTypes.string.isRequired,
};

export default NoSectionDialog;
