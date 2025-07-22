import { Link } from 'react-router-dom';
import newEntriesImage from '@/assets/new-entries-banner.svg';
import { ArrowRight } from 'lucide-react';

function BuildingContentBanner() {
	return (
		<div className="bg-primary-700 text-primary-70 flex rounded-lg px-10 py-5 shadow-md max-lg:px-8 max-md:px-6">
			<div className="w-64 max-lg:hidden">
				<img
					src={newEntriesImage}
					className="w-full"
				/>
			</div>

			<div className="pl-4 max-lg:pl-0">
				<h3 className="text-lg font-medium">There's more on the way!</h3>
				<p className="text-primary-50 mt-2 leading-8">
					We are actively researching and adding more historical data and
					records to expand this collection. More content will be available
					shortly.
				</p>

				<Link
					to="/issues"
					className="bg-primary-70 text-primary-700 hover:bg-primary-90 group shadow-primary-60 mt-3 inline-flex items-center justify-start gap-x-1 rounded-2xl px-3 py-1 shadow-xs transition duration-200 ease-in hover:shadow-sm"
				>
					<span>Contribute to Itihaas</span>
					<span className="transition duration-200 ease-in group-hover:translate-x-0.5">
						<ArrowRight size={16} />
					</span>
				</Link>
			</div>
		</div>
	);
}

export default BuildingContentBanner;
