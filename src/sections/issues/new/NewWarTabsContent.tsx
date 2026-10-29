import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import { TabsContent } from '@/components/ui/tabs';
import FormErrorLabel from '@/components/views/FormErrorLabel';
import newWarFields from '@/data/issues/newWarFields';
import { NewWarContributionForm } from '@/interfaces/new-contributions/NewWarContributionForm';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FunctionProps {
	register: UseFormRegister<NewWarContributionForm>;
	errors: FieldErrors<NewWarContributionForm>;
}

export default function NewWarTabsContent({ register, errors }: FunctionProps) {
	return (
		<>
			<TabsContent value="war">
				<div className="border-primary-70/35 border-b pb-2">
					<h3 className="text-xl font-medium">New War</h3>
					<h6 className="mt-1 text-sm">
						Please ensure all fields marked with an '*' are provided with
						content. You can provide multiple entires per field by separating
						them using a <span className="font-semibold underline">comma</span>.
					</h6>
				</div>

				<div>
					{newWarFields.map(function (field) {
						if (field.type === 'input') {
							return (
								<>
									<InputFormControl
										key={field.id}
										id={field.htmlId}
										label={field.label}
										required={field.required}
										placeholder={field.placeholder}
										info={field.info}
										{...register(field.registerHookForm, {
											required: {
												value: field.required as boolean,
												message: `${field.label} is a required field`,
											},
										})}
									/>
									{errors[field.registerHookForm] && (
										<FormErrorLabel>
											{errors[field.registerHookForm]?.message}
										</FormErrorLabel>
									)}
								</>
							);
						} else if (field.type === 'textarea') {
							return (
								<>
									<TextAreaFormControl
										key={field.id}
										id={field.htmlId}
										label={field.label}
										placeholder={field.placeholder}
										info={field.info}
										required={field.required}
										{...register(field.registerHookForm, {
											required: {
												value: field.required as boolean,
												message: `${field.label} is a required field`,
											},
										})}
									/>
									{errors[field.registerHookForm] && (
										<FormErrorLabel>
											{errors[field.registerHookForm]?.message}
										</FormErrorLabel>
									)}
								</>
							);
						}
					})}
				</div>
			</TabsContent>
		</>
	);
}
