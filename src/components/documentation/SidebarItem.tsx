import { SidebarSubfield } from '@/interfaces/SidebarSubfield';

interface FunctionProps {
	title: string;
	subfields: SidebarSubfield[];
	sidebarClick?: () => void;
}

function SidebarItem({ title, subfields, sidebarClick }: FunctionProps) {
	const titleId = `#${title.toLowerCase().split(' ').join('-')}`;

	return (
		<div>
			<h4 className="text-base font-medium hover:underline">
				<a href={titleId}>{title}</a>
			</h4>
			<ul className="ml-2 text-sm">
				{subfields.map(function (subfield) {
					const subfieldId = `#${subfield.content.toLowerCase().split(' ').join('-').replace('/', '-')}`;
					return (
						<li
							key={subfieldId}
							className="hover:text-primary-200 my-1 hover:underline"
						>
							<a
								href={subfield?.id ? `#${subfield.id}` : subfieldId}
								onClick={sidebarClick}
							>
								{subfield.content}
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default SidebarItem;
