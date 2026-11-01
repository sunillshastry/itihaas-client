import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import FormErrorLabel from '@/components/views/FormErrorLabel';
import feedbackFormFields from '@/data/issues/feedbackFormFields';
import { GeneralFeedbackInputs } from '@/interfaces/GeneralFeedbackInputs';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import UserInfo from './issues/user/UserInfo';
import BasicButton from '@/components/elements/BasicButton';
import { Send } from 'lucide-react';

interface FunctionProps {
	register: UseFormRegister<GeneralFeedbackInputs>;
	errors: FieldErrors<GeneralFeedbackInputs>;
}

export default function FeedbackSection({ register, errors }: FunctionProps) {
	return (
		<>
			<section className="from-primary-400 to-primary-700 text-primary-70 my-6 rounded-xl bg-linear-to-br p-8 max-md:px-4">
				<div>
					<div className="border-primary-70/35 border-b pb-2">
						<h3 className="text-xl font-medium">Itihaas Platform Feedback</h3>
						<h6 className="mt-1 text-sm">
							Please ensure all fields marked with an '*' are provided with
							content. You can provide multiple entires per field by separating
							them using a{' '}
							<span className="font-semibold underline">comma</span>.
						</h6>
					</div>

					<div>
						{feedbackFormFields.map(function (field) {
							if (field?.type === 'input') {
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
							} else if (field?.type === 'textarea') {
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

						<UserInfo
							register={register}
							errors={errors}
						/>

						<BasicButton
							variant="light"
							className="mt-6 flex w-xs items-center justify-center gap-x-1 py-3 text-center font-medium max-md:w-full"
							type="submit"
						>
							<span>Submit</span>
							<span>
								<Send size={15} />
							</span>
						</BasicButton>
					</div>
				</div>
			</section>
		</>
	);
}
