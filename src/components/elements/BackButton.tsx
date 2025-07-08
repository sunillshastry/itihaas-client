import { useNavigate } from 'react-router-dom';
import { ArrowBigLeft } from 'lucide-react';
import PropTypes from 'prop-types';

function BackButton({ to }) {
	const navigate = useNavigate();

	function goToPreviousPage() {
		if (to) {
			try {
				navigate(to);
			} catch {
				navigate('/');
			}
		} else {
			try {
				navigate(-1);
			} catch {
				navigate('/');
			}
		}
	}

	return (
		<button
			onClick={goToPreviousPage}
			className="bg-primary-40 hover:bg-primary-400 hover:text-primary-60 border-primary-600 text-primary-600 mb-6 flex items-center rounded-full border-2 px-5 py-2 text-sm hover:cursor-pointer"
		>
			<span>
				<ArrowBigLeft size={18} />
			</span>
			<span>Back</span>
		</button>
	);
}

BackButton.propTypes = {
	to: PropTypes.string,
};

export default BackButton;
