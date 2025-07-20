import { Link } from 'react-router-dom';

function Offers() {
	return (
		<div className="text-primary-400 mt-6 max-sm:px-2">
			<h2 className="border-primary-300/25 border-b text-xl font-semibold uppercase first-letter:text-3xl">
				What can you find?
			</h2>
			<div className="mt-3 leading-10">
				<p className="italic">
					At its core, Itihaas offers three major components or categories of
					historical data to help users explore and learn selectively.
				</p>

				<ul>
					<li>
						<span className="font-semibold underline">Dynasties</span>
						<span className="ml-1">
							Discover influential ruling houses from the Mauryas and Guptas to
							the Marathas and Mughals. Learn about their origins, territories,
							timelines, contributions, articles, and significance.&nbsp;
						</span>
						<span className="hover:text-primary-10 underline">
							<Link to="/dynasties">View dynasties catalog</Link>
						</span>
					</li>

					<li>
						<span className="font-semibold underline">Rulers</span>
						<span className="ml-1">
							Delve into the lives and legacies of emperors, kings, and queens,
							the leaders who shaped history with their governance, vision, and
							conquests.&nbsp;
						</span>
						<span className="hover:text-primary-10 underline">
							<Link to="/rulers">View rulers catalog</Link>
						</span>
					</li>

					<li>
						<span className="font-semibold underline">Wars</span>
						<span className="ml-1">
							Explore pivotal battles and conflicts that redefined borders,
							ideologies, and the course of history, from ancient wars to
							colonial resistance.&nbsp;
						</span>
						<span className="hover:text-primary-10 underline">
							<Link to="/wars">View wars catalog</Link>
						</span>
					</li>
				</ul>

				<p className="mt-4">
					Each piece of information is curated using strict historical standards
					and referenced from reliable, unbiased sources. The platform
					disregards speculative or politically skewed narratives, aiming to
					provide a factual, evidence-based view of history. Additionally,
					authors and collaborators to all sources are credited with their name
					and publisher for any article or reading based resource used on
					Itihaas. We value all contributions and are grateful for it. If you
					are an existing collaborator, or wish to add new resource or fix
					missing content, you can do so{' '}
					<Link
						to="/issues"
						className="hover:text-primary-10 underline"
					>
						here
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Offers;
