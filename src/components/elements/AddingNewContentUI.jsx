import PlatformGrowthButton from '../views/PlatformGrowthButton';
import { usePlatformGrowth } from '@/context/PlatformGrowthContext';

function AddingNewContentUI() {
	const { hidden, dispatch } = usePlatformGrowth();

	return (
		<>
			<PlatformGrowthButton
				click={() => dispatch({ type: hidden ? 'unhide' : 'hide' })}
			/>
			{!hidden && (
				<div className="bg-primary-600 rounded-sm p-3 text-primary-50 mb-5">
					<h3 className="text-primary-70 uppercase font-medium">
						For your information...
					</h3>
					<p className="text-sm leading-6 mt-2">
						We are dedicated to continuously researching and verifying credible
						information to expand our platform with new dynasties, wars, and
						rulers. We welcome public contributions, suggestions, and
						corrections to help ensure accuracy and inclusivity in our growing
						historical archive.
					</p>
				</div>
			)}
		</>
	);
}

export default AddingNewContentUI;
