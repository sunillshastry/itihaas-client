import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewEntityTabsContent from './issues/new/NewEntityTabsContent';
import NewDynastyTabsContent from './issues/new/NewDynastyTabsContent';
import NewRulerTabsContent from './issues/new/NewRulerTabsContent';
import NewWarTabsContent from './issues/new/NewWarTabsContent';
import UserInfo from './issues/user/UserInfo';
import BasicButton from '@/components/elements/BasicButton';
import { Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function AddNewContribution() {
	const [searchParams, setSearchParams] = useSearchParams();

	const tabType = searchParams.get('type') || 'new';
	console.log(tabType);
	const [tabValue, setTabValue] = useState<string>(tabType);

	useEffect(
		function () {
			setSearchParams(function (currentParams) {
				currentParams.set('type', tabValue);
				return currentParams;
			});
		},
		[tabValue, setSearchParams]
	);

	return (
		<section className="from-primary-400 to-primary-700 text-primary-70 my-6 rounded-xl bg-linear-to-br p-8 max-md:px-4">
			<div>
				<Tabs
					defaultValue={tabValue}
					value={tabValue}
					onValueChange={setTabValue}
				>
					<TabsList className="w-sm max-md:w-full">
						<TabsTrigger value="new">New</TabsTrigger>
						<TabsTrigger value="dynasty">Dynasty</TabsTrigger>
						<TabsTrigger value="ruler">Ruler</TabsTrigger>
						<TabsTrigger value="war">War</TabsTrigger>
					</TabsList>

					<div className="mt-2">
						<NewEntityTabsContent />
						<NewDynastyTabsContent />
						<NewRulerTabsContent />
						<NewWarTabsContent />
					</div>
				</Tabs>
				<UserInfo />

				<BasicButton
					variant="light"
					className="mt-6 flex items-center justify-center gap-x-1 text-center font-medium max-md:w-full max-md:py-3"
				>
					<span>Submit</span>
					<span>
						<Send size={15} />
					</span>
				</BasicButton>
			</div>
		</section>
	);
}
