import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import UserInfo from './issues/user/UserInfo';
import BasicButton from '@/components/elements/BasicButton';
import { Send } from 'lucide-react';
import EditDynastyTabsContent from './issues/edit/EditDynastyTabsContent';
import EditRulerTabsContent from './issues/edit/EditRulerTabsContent';
import EditWarTabsContent from './issues/edit/EditWarTabsContent';

export default function EditContribution() {
	return (
		<section className="from-primary-400 to-primary-700 text-primary-70 my-6 rounded-xl bg-linear-to-br p-8 max-md:px-4">
			<div>
				<Tabs defaultValue="dynasty">
					<TabsList className="w-sm max-md:w-full">
						<TabsTrigger value="dynasty">Dynasty</TabsTrigger>
						<TabsTrigger value="ruler">Ruler</TabsTrigger>
						<TabsTrigger value="war">War</TabsTrigger>
					</TabsList>

					<div className="mt-2">
						<EditDynastyTabsContent />
						<EditRulerTabsContent />
						<EditWarTabsContent />
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
