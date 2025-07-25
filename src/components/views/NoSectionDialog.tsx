import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ArrowRight } from 'lucide-react';

import SubHeader from '@/components/elements/SubHeader';
import SubHeaderLink from './SubHeaderLink';

interface FunctionProps {
	name: string;
	id: string;
}

function NoSectionDialog({ name, id }: FunctionProps) {
	return (
		<section className="mt-5">
			<SubHeader>
				<SubHeaderLink to={`#${id}`}>{name}</SubHeaderLink>
			</SubHeader>
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
