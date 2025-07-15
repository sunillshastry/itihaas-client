import gettingStartedOptions from '@/data/gettingStartedOptions';
import SidebarItem from './SidebarItem';

function Sidebar() {
	return (
		<aside className="bg-primary-50 rounded-md px-6 py-2">
			<h2 className="text-primary-700 border-primary-20 border-b pb-1 text-xl font-medium">
				API Reference
			</h2>

			<div className="mt-2">
				<SidebarItem
					title="Getting Started"
					subfields={gettingStartedOptions}
				/>

				<div className="mt-1">
					<h4 className="text-base font-medium">Dynasties</h4>
					<ul className="ml-2 text-sm">
						<li>Get all dynasties</li>
						<li>Get dynasty by ID parameter</li>
						<li>Get dynasty by Slug parameter</li>
						<li>Get list of dynasty titles</li>
						<li>Get random dynasty</li>
						<li>Get dynasty by search query</li>
					</ul>
				</div>

				<div className="mt-1">
					<h4 className="text-base font-medium">Rulers</h4>
					<ul className="ml-2 text-sm">
						<li>Get all rulers</li>
						<li>Get ruler by ID parameter</li>
						<li>Get ruler by Slug parameter</li>
						<li>Get list of ruler titles</li>
						<li>Get random ruler</li>
						<li>Get ruler by search query</li>
					</ul>
				</div>

				<div className="mt-1">
					<h4 className="text-base font-medium">Wars</h4>
					<ul className="ml-2 text-sm">
						<li>Get all wars</li>
						<li>Get war by ID parameter</li>
						<li>Get war by Slug parameter</li>
						<li>Get list of war titles</li>
						<li>Get random war</li>
						<li>Get war by search query</li>
					</ul>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
