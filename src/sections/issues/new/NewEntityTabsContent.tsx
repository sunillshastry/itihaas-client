import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import { TabsContent } from '@/components/ui/tabs';
import FormErrorLabel from '@/components/views/FormErrorLabel';
import newEntityFields from '@/data/issues/newEntityFields';
import { NewEntityContributionForm } from '@/interfaces/new-contributions/NewEntityContributionForm';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FunctionProps {
	register: UseFormRegister<NewEntityContributionForm>;
	errors: FieldErrors<NewEntityContributionForm>;
}

export default function NewEntityTabsContent({
	register,
	errors,
}: FunctionProps) {
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
					{newEntityFields.map(function (field) {
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
