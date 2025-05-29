import { ExternalLink } from 'lucide-react';

function About() {
	return (
		<div className="text-primary-600 text-md mt-4 px-5 leading-10">
			<p>
				<strong>Itihaas</strong> is a comprehensive and accessible online
				platform designed to showcase and help explore the rich and diverse
				history of the Indian subcontinent to the fingertips of students,
				researchers, educators, developers, and curious minds alike. Rooted in
				the belief that history should be preserved, studied, and easily
				explored, Itihaas provides a structured, credible, and engaging way to
				learn about Indian history from its earliest civilizations to the dawn
				of independence in 1947.
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

			<a
				href="https://github.com/sunillshastry/itihaas-api/"
				target="_blank"
				className="text-primary-300 hover:text-primary-10 flex items-center underline"
			>
				<span>View on GitHub</span>
				<span className="ml-1">
					<ExternalLink size={16} />
				</span>
			</a>
		</div>
	);
}

export default About;
