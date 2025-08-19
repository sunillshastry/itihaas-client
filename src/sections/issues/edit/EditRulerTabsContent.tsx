import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import { TabsContent } from '@/components/ui/tabs';
import editRulerFields from '@/data/issues/editRulerFields';

export default function EditRulerTabsContent() {
	return (
		<>
			<TabsContent value="ruler">
				<div className="border-primary-70/35 border-b pb-2">
					<h3 className="text-xl font-medium">Edit Ruler</h3>
					<h6 className="mt-1 text-sm">
						Please ensure all fields marked with an '*' are provided with
						content. You can provide multiple entires per field by separating
						them using a <span className="font-semibold underline">comma</span>.
					</h6>
				</div>

				<div>
					{editRulerFields.map(function (field) {
						if (field.type === 'input') {
							return (
								<InputFormControl
									key={field.id}
									id={field.htmlId}
									label={field.label}
									placeholder={field.placeholder}
									info={field.info}
									required={field.required}
								/>
							);
						} else if (field.type === 'textarea') {
							return (
								<TextAreaFormControl
									key={field.id}
									id={field.htmlId}
									label={field.label}
									placeholder={field.placeholder}
									info={field.info}
									required={field.required}
								/>
							);
						}
					})}
				</div>
			</TabsContent>
		</>
	);
}
