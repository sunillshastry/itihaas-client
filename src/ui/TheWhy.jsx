import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function TheWhy() {
	return (
		<div className="text-primary-400 mt-6">
			<h2 className="border-primary-300/25 border-b text-xl font-semibold uppercase first-letter:text-3xl">
				Why Itihaas?
			</h2>

			<div className="mt-3 leading-10">
				<p>
					In a world increasingly driven by access to information and the
					internet, the preservation and dissemination of accurate historical
					knowledge is more important than ever. We believe that Indian history
					is one of the richest and most layered in the world, yet much of it
					remains scattered, undocumented, or buried beneath myth and
					misinformation. At Itihaas, we try bridge that gap by offering a
					platform where history is not only preserved but also made accessible
					and navigable for absolutely anyone who seeks it.
				</p>

				<p className="mt-2">
					Whether you are a student writing a research paper, a teacher crafting
					lesson plans, a historian looking for quick references, a developer
					integrating historical data into your apps, or a naturally curious
					person about history, Itihaas provides the perfect tools and resources
					to support your needs.{' '}
					<strong className="font-semibold">
						We recognize that there numerous resources online to learn more
						about Indian history, but we believe in building a platform, and an
						online presence that is not only user-friendly, but also
						user-driven: a true platform that is built for all kinds of users,
						by all kinds of users.
					</strong>{' '}
					Itihaas welcomes every credible contributions — allowing users to
					suggest additions or corrections backed by reliable sources.
				</p>

				<Link
					to="/issues"
					className="text-primary-300 hover:text-primary-10 inline-flex items-center underline"
				>
					<span>See how to contribute</span>
					<span className="ml-1">
						<ArrowRight size={16} />
					</span>
				</Link>
			</div>
		</div>
	);
}

export default TheWhy;
