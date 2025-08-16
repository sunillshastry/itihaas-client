import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import { TabsContent } from '@/components/ui/tabs';
import newRulerFields from '@/data/issues/newRulerFields';

export default function NewRulerTabsContent() {
	return (
		<>
			<TabsContent value="ruler">
				<div className="border-primary-70/35 border-b pb-2">
					<h3 className="text-xl font-medium">New Ruler</h3>
					<h6 className="mt-1 text-sm">
						Please ensure all fields marked with an '*' are provided with
						content. You can provide multiple entires per field by separating
						them using a <span className="font-semibold underline">comma</span>.
					</h6>
				</div>

				<div>
					{newRulerFields.map(function (field) {
						if (field.type === 'input') {
							return (
								<InputFormControl
									key={field.id}
									label={field.label}
									required={field.required}
									placeholder={field.placeholder}
									id={field.htmlId}
									info={field.info}
								/>
							);
						} else if (field.type === 'textarea') {
							return (
								<TextAreaFormControl
									key={field.id}
									label={field.label}
									required={field.required}
									placeholder={field.placeholder}
									id={field.htmlId}
									info={field.info}
								/>
							);
						}
					})}
				</div>
			</TabsContent>
		</>
	);
}
