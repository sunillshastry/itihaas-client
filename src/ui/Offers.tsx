import getRandomDynasty from '@/api/getRandomDynasty';
import getRandomRuler from '@/api/getRandomRuler';
import RandomEntityView from '@/components/views/RandomEntityView';
import { Dynasty } from '@/interfaces/Dynasty';
import { Ruler } from '@/interfaces/Ruler';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Offers() {
	// Fetch random dynasty
	const {
		error: randomDynastyError,
		data: randomDynasty,
		isPending: randomDynastyLoading,
		refetch: refetchDynasty,
	} = useQuery({
		queryKey: ['random-dynasty'],
		queryFn: getRandomDynasty,
		refetchOnWindowFocus: false,
	});

	// Fetch random ruler
	const {
		error: randomRulerError,
		data: randomRuler,
		isPending: randomRulerLoading,
		refetch: refetchRuler,
	} = useQuery({
		queryKey: ['random-ruler'],
		queryFn: getRandomRuler,
		refetchOnWindowFocus: false,
	});

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
					<li className="mt-2">
						<p className="flex flex-col">
							<span className="text-xl font-semibold underline">Dynasties</span>
							<span className="mt-1">
								Discover influential ruling houses from the Mauryas and Guptas
								to the Marathas and Mughals. Learn about their origins,
								territories, timelines, contributions, articles, and
								significance. Here is a small snippet of what the entity content
								might look like.
							</span>
						</p>

						<RandomEntityView
							type="dynasties"
							entity={randomDynasty as Dynasty & Ruler}
							loading={randomDynastyLoading}
							refetch={refetchDynasty}
							error={randomDynastyError as Error}
						/>

						<Link
							to="/dynasties"
							className="bg-primary-600 text-primary-60 hover:bg-primary-400 inline-flex items-center gap-x-2 rounded-sm p-3 text-base transition"
						>
							<span>Dynasties Catalog</span>
							<span>
								<ArrowRight size={17} />
							</span>
						</Link>
					</li>

					<li className="mt-10">
						<p className="flex flex-col">
							<span className="text-xl font-semibold underline">Rulers</span>
							<span className="mt-1">
								Delve into the lives and legacies of emperors, kings, and
								queens, the leaders who shaped history with their governance,
								vision, and conquests. Here is a small snippet of what the
								entity content might look like.
							</span>
						</p>
						<RandomEntityView
							type="rulers"
							entity={randomRuler as Dynasty & Ruler}
							loading={randomRulerLoading}
							refetch={refetchRuler}
							error={randomRulerError as Error}
						/>

						<Link
							to="/rulers"
							className="bg-primary-600 text-primary-60 hover:bg-primary-400 inline-flex items-center gap-x-2 rounded-sm p-3 text-base transition"
						>
							<span>Rulers Catalog</span>
							<span>
								<ArrowRight size={17} />
							</span>
						</Link>
					</li>

					<li className="mt-10">
						<p className="flex flex-col">
							<span className="text-xl font-semibold underline">Wars</span>
							<span className="mt-1">
								Explore pivotal battles and conflicts that redefined borders,
								ideologies, and the course of history, from ancient wars to
								colonial resistance. Here is a small snippet of what the entity
								content might look like.
							</span>
						</p>
						{/* TODO: Uncomment and setup request to Wars when implemented */}
						{/* <RandomEntityView /> */}

						<Link
							to="/wars"
							className="bg-primary-600 text-primary-60 hover:bg-primary-400 inline-flex items-center gap-x-2 rounded-sm p-3 text-base transition"
						>
							<span>Wars Catalog</span>
							<span>
								<ArrowRight size={17} />
							</span>
						</Link>
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
					missing content, you can do so on our{' '}
					<Link
						to="/issues"
						className="hover:text-primary-10 underline"
					>
						contributions page.
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Offers;
