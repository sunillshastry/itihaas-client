import { Volume2 } from 'lucide-react';
import { useRef } from 'react';

function About() {
	const audioElementRef = useRef<HTMLAudioElement>(null);

	function playAudio() {
		audioElementRef.current?.play();
	}

	return (
		<div className="text-primary-600 mt-4 text-base leading-10 max-sm:px-2">
			<audio
				ref={audioElementRef}
				src="https://en-audio.howtopronounce.com/68d6f9715d805875b057e760414259b5.mp3"
				className="hidden"
			></audio>
			<p>
				<strong>Itihaas</strong> (Sanskrit word that translates to "history" -
				literally interpreted as <em>"thus it happened"</em>;{' '}
				<a
					href="https://en.wikipedia.org/wiki/Itihasa-Purana"
					target="_blank"
					className="text-primary-500 hover:text-primary-10 underline transition"
					title="See additional interpretations on Wikipedia"
				>
					see other definitions
				</a>
				; pronounced{' '}
				<span className="inline-flex items-center gap-1">
					<code className="bg-primary-90 rounded-md p-1 text-xs">
						/e-tea-haas/
					</code>
					<button
						onClick={playAudio}
						className="text-primary-400 hover:text-primary-200 transition hover:cursor-pointer"
					>
						<Volume2 />
					</button>
					,
					<span>
						<a
							href="https://simple.wikipedia.org/wiki/Itihasa"
							target="_blank"
							className="text-primary-500 hover:text-primary-10 underline transition"
							title="View etymology on Wikipedia"
						>
							view its etymology
						</a>
					</span>
				</span>
				) is a comprehensive and accessible online platform designed to showcase
				and help explore the rich and diverse history of the Indian subcontinent
				to the fingertips of students, researchers, educators, developers, and
				curious minds alike. Rooted in the belief that history should be
				preserved, studied, and easily explored, Itihaas provides a structured,
				credible, and engaging way to learn about Indian history from its
				earliest civilizations to the dawn of Indian independence in 1947.
			</p>

			<p className="mt-2">
				Covering the vast timeline from 7000 BCE, the era of the Mehrgarh
				Civilization and Indus Valley Civilization to the transformative year of
				Indian Independence, Itihaas aims to be the go-to repository for
				historical knowledge across the Indian subcontinent. Whether you are
				preparing academic work, seeking inspiration from the past, or simply
				curious about the intricate events that shaped modern South Asia,
				Itihaas is built to serve your historical inquiries with precision and
				ease.
			</p>

			<p className="mt-2">
				Itihaas strongly believes in the power of open source and open data. The
				platform itself is built with the community in mind: encouraging users
				from all backgrounds to contribute credible information. Users can
				submit data, sources, or corrections, which are carefully reviewed and
				verified by our team. If deemed accurate and credible, these
				contributions help enrich the platform, expand existing records, and
				improve overall accuracy. As an open source project, Itihaas welcomes
				help from anyone passionate about history and technology, and stands by
				the principle that historical knowledge should be free, accessible, and
				open to all.
			</p>
		</div>
	);
}

export default About;
