import FooterLinksTab from './FooterLinksTab';
import FooterLink from './FooterLink';
import { Copyright } from 'lucide-react';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-primary-600 flex justify-between px-14 py-6 pb-8">
			<section className="w-[60%]">
				<div>
					<h3 className="font-logo text-primary-90 text-3xl">Itihaas</h3>
					<p className="text-primary-10 flex items-center text-sm">
						<span>
							<Copyright size={16} />
						</span>
						<span className="ml-1">{year} Itihaas | Licensed under the </span>
						<a
							href="#"
							target="_blank"
							className="ml-1 underline"
						>
							GNU GPL v3
						</a>
					</p>
				</div>

				<p className="text-primary-50 mt-4 leading-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tenetur
					fugiat iure nesciunt, corrupti itaque quasi dolor reiciendis dolorem
					nemo eligendi quisquam quos sapiente. Accusamus explicabo similique
					repudiandae deleniti et praesentium harum, alias dolore ipsam!
				</p>
			</section>

			<section className="flex w-[40%] items-start justify-around">
				<FooterLinksTab title="Product">
					<ul>
						<FooterLink to="/dynasties">Dynasties</FooterLink>
						<FooterLink to="/rulers">Rulers</FooterLink>
						<FooterLink to="/wars">Wars</FooterLink>
					</ul>
				</FooterLinksTab>

				<FooterLinksTab title="Developer">
					<ul>
						<FooterLink to="#">Issues</FooterLink>
						<FooterLink to="#">Docs</FooterLink>
						<FooterLink to="#">GitHub</FooterLink>
					</ul>
				</FooterLinksTab>
			</section>
		</footer>
	);
}

export default Footer;
