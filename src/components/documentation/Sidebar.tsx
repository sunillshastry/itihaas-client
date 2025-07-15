import gettingStartedOptions from '@/data/gettingStartedOptions';
import SidebarItem from './SidebarItem';
import metaInformationOptions from '@/data/metaInformationOptions';
import dynastiesSidebarOptions from '@/data/dynastiesSidebarOptions';
import rulersSidebarOptions from '@/data/rulersSidebarOptions';
import warsSidebarOptions from '@/data/warsSidebarOptions';

function Sidebar() {
	return (
		<aside className="bg-primary-50 sticky top-2 left-0 h-screen overflow-x-hidden overflow-y-auto rounded-md px-6 py-4 pr-8 pb-5">
			<h2 className="text-primary-700 border-primary-20 border-b pb-1 text-xl font-medium">
				API Reference
			</h2>

			<div className="mt-2">
				<SidebarItem
					title="Getting Started"
					subfields={gettingStartedOptions}
				/>

				<SidebarItem
					title="Meta Information"
					subfields={metaInformationOptions}
				/>

				<SidebarItem
					title="Dynasties"
					subfields={dynastiesSidebarOptions}
				/>

				<SidebarItem
					title="Rulers"
					subfields={rulersSidebarOptions}
				/>

				<SidebarItem
					title="Wars"
					subfields={warsSidebarOptions}
				/>
			</div>
		</aside>
	);
}

export default Sidebar;
