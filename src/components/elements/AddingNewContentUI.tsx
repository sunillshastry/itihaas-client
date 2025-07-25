import PlatformGrowthButton from '@/components/views/PlatformGrowthButton';
import { usePlatformGrowth } from '@/context/PlatformGrowthContext';
import { BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

function AddingNewContentUI() {
	const { hidden, dispatch } = usePlatformGrowth();

	return (
		<>
			<PlatformGrowthButton
				onClick={() => dispatch({ type: hidden ? 'unhide' : 'hide' })}
			/>
			{!hidden && (
				<div className="bg-primary-600 text-primary-50 mb-5 rounded-sm p-3">
					<h3 className="text-primary-70 font-medium uppercase">
						For your information...
					</h3>
					<p className="mt-2 text-sm leading-6">
						We are dedicated to continuously researching and verifying credible
						information to expand our platform with new dynasties, wars, and
						rulers. We welcome public contributions, suggestions, and
						corrections to help ensure accuracy and inclusivity in our growing
						historical archive.
					</p>

					<Link
						to="/issues"
						className="from-primary-40 to-primary-60 text-primary-700 hover:from-primary-50 hover:to-primary-70 mt-3 inline-flex items-center justify-start gap-x-1 rounded-md bg-linear-to-r px-2 py-1.5 text-sm font-medium shadow-sm hover:shadow-md"
					>
						<span>View contribution guide</span>
						<span>
							<BookText size={15} />
						</span>
					</Link>
				</div>
			)}
		</>
	);
}

export default AddingNewContentUI;
