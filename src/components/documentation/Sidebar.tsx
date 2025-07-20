import gettingStartedOptions from '@/data/gettingStartedOptions';
import SidebarItem from './SidebarItem';
import metaInformationOptions from '@/data/metaInformationOptions';
import dynastiesSidebarOptions from '@/data/dynastiesSidebarOptions';
import rulersSidebarOptions from '@/data/rulersSidebarOptions';
import warsSidebarOptions from '@/data/warsSidebarOptions';
import { twMerge } from 'tailwind-merge';

interface FunctionProps {
	refOpen?: boolean;
	sidebarClick?: () => void;
}

function Sidebar({ refOpen, sidebarClick }: FunctionProps) {
	return (
		<aside
			className={twMerge(
				'bg-primary-50 max sticky top-2 left-0 z-40 h-screen overflow-x-hidden overflow-y-auto rounded-md px-6 py-4 pr-8 pb-5 max-xl:hidden',
				refOpen && 'fixed top-0 left-0 max-xl:block'
			)}
		>
			<h2 className="text-primary-700 border-primary-20 border-b pb-1 text-xl font-medium">
				API Reference
			</h2>

			<div className="mt-2">
				<SidebarItem
					title="Getting Started"
					subfields={gettingStartedOptions}
					sidebarClick={sidebarClick}
				/>

				<SidebarItem
					title="Meta Information"
					subfields={metaInformationOptions}
					sidebarClick={sidebarClick}
				/>

				<SidebarItem
					title="Dynasties"
					subfields={dynastiesSidebarOptions}
					sidebarClick={sidebarClick}
				/>

				<SidebarItem
					title="Rulers"
					subfields={rulersSidebarOptions}
					sidebarClick={sidebarClick}
				/>

				<SidebarItem
					title="Wars"
					subfields={warsSidebarOptions}
					sidebarClick={sidebarClick}
				/>
			</div>
		</aside>
	);
}

export default Sidebar;
