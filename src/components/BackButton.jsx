import { ArrowBigLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
	const navigate = useNavigate();

	function goToPreviousPage() {
		try {
			navigate(-1);
		} catch {
			navigate('/');
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

export default BackButton;
