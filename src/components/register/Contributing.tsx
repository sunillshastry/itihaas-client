import { Link } from 'react-router-dom';
import Badge from '../elements/Badge';

function Contributing() {
	return (
		<>
			<div className="mt-5">
				<h4 className="text-primary-600 text-lg font-semibold">
					Contributing to Itihaas{' '}
					<Badge className="rounded-lg p-1 px-1.5">Help wanted!</Badge>
				</h4>

				<p>
					At Itihaas, we welcome and appreciate all kinds of contributions to
					our platform — whether you are a developer, historian, researcher,
					student, or just someone passionate about preserving history.
					Contributions can include, but are not limited to, addition of new
					entities (such as dynasties, rulers, wars or something else), updating
					existing content, correcting inaccuracies, improving the user
					interface, enhancing the API structure or performance, or writing
					clearer, more comprehensive documentation. No contribution is too
					small — even fixing a typo or suggesting better structure helps move
					the project forward. If you're interested in helping shape the future
					of Itihaas, we would love to have you involved!
				</p>

				<p className="mt-1 font-medium">
					You can view the full guide about contributing to Itihaas{' '}
					<Link
						to="/issues"
						className="text-primary-600 hover:text-primary-10 underline"
					>
						here
					</Link>
					.
				</p>
			</div>
		</>
	);
}

export default Contributing;
