import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import { TabsContent } from '@/components/ui/tabs';

export default function NewEntityTabsContent() {
	return (
		<>
			<TabsContent value="new">
				<div className="border-primary-70/35 border-b pb-2">
					<h3 className="text-xl font-medium">New Entity</h3>
					<h6 className="mt-1 text-sm">
						Please ensure all fields marked with an '*' are provided with
						content
					</h6>
				</div>

				<div>
					<InputFormControl
						label="Entity Name"
						required
					/>

					<TextAreaFormControl label="Description" />
				</div>
			</TabsContent>
		</>
	);
}
