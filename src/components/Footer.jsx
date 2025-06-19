import { Copyright, SquareArrowOutUpRight } from 'lucide-react';
import PropTypes from 'prop-types';

import FooterLinksTab from './FooterLinksTab';
import FooterLink from './FooterLink';
import { twMerge } from 'tailwind-merge';

function Footer({ className }) {
	const year = new Date().getFullYear();

	return (
		<footer
			className={twMerge(
				'bg-primary-700 flex justify-between px-14 pt-10 pb-8',
				className
			)}
		>
			<section className="w-[60%] pr-8">
				<div>
					<h3 className="font-logo text-primary-90 text-3xl">Itihaas</h3>
					<p className="text-primary-10 flex items-center text-sm">
						<span>
							<Copyright size={16} />
						</span>
						<span className="ml-1">{year} Itihaas | Licensed under the </span>
						<a
							href="https://github.com/sunillshastry/itihaas-client/blob/master/LICENSE"
							target="_blank"
							className="hover:text-primary-30 ml-1 underline"
						>
							GNU GPL v3
						</a>
					</p>
				</div>

				<p className="text-primary-50 mt-4 text-sm leading-8">
					Itihaas is a platform to help individuals and researchers explore the
					vast history of the Indian subcontinent. Explore a rich catalog of
					dynasties, rulers, and wars, search for specific topics, browse the
					historical timeline, or help build Itihaas even further by providing
					credible information and insights. Whether you&apos;re a student,
					researcher, curious reader, or a developer, Itihaas makes discovering
					the extensive history of India simple and engaging.
				</p>
			</section>

			<section className="border-l-primary-10/15 flex w-[40%] items-start justify-around border-l-2">
				<FooterLinksTab title="Product">
					<ul>
						<FooterLink to="/dynasties">Dynasties</FooterLink>
						<FooterLink to="/rulers">Rulers</FooterLink>
						<FooterLink to="/wars">Wars</FooterLink>
					</ul>
				</FooterLinksTab>

				<FooterLinksTab title="Developer">
					<ul>
						<FooterLink to="/issues">Issues</FooterLink>
						<FooterLink to="/docs">Docs</FooterLink>
						<a
							href="https://github.com/sunillshastry/itihaas-api/"
							target="_blank"
							className="text-primary-30 hover:text-primary-60 mt-4 inline-flex items-center hover:underline"
						>
							<span>GitHub</span>
							<span className="ml-1">
								<SquareArrowOutUpRight size={15} />
							</span>
						</a>
					</ul>
				</FooterLinksTab>
			</section>
		</footer>
	);
}

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
