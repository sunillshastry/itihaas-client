import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import FormErrorLabel from '@/components/views/FormErrorLabel';
import userInfo from '@/data/issues/userInfo';
import { EditFormInputs } from '@/interfaces/EditFormInputs';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface FunctionProps {
	register: UseFormRegister<EditFormInputs> | null;
	errors: FieldErrors<EditFormInputs> | null;
}

export default function UserInfo({ register, errors }: FunctionProps) {
	return (
		<div className="border-primary-70/35 mt-5 border-t pt-2">
			<h3 className="text-xl font-medium">User Info</h3>
			<h6 className="mt-1 text-sm">
				Please enter your personal details below, these fields are used for
				contact purposes regarding your submission(s). Your details are{' '}
				<span className="font-semibold underline">not</span> shared or sold.
			</h6>

			<div>
				{userInfo.map(function (field) {
					if (field.type === 'input' && register !== null && errors !== null) {
						return (
							<>
								<InputFormControl
									key={field.id}
									label={field.label}
									placeholder={field.placeholder}
									required={field.required}
									id={field.htmlId}
									info={field.info}
									{...register(field.registerHookForm, {
										required: {
											value: field.required as boolean,
											message: `${field.label} is a required field`,
										},
										pattern: {
											value: field.validationPattern
												? (field.validationPattern as RegExp)
												: /.*/,
											message: 'Please enter a valid email address',
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
					} else if (
						field.type === 'textarea' &&
						register !== null &&
						errors !== null
					) {
						return (
							<>
								<TextAreaFormControl
									key={field.id}
									label={field.label}
									placeholder={field.placeholder}
									required={field.required}
									id={field.htmlId}
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
					}
				})}
			</div>
		</div>
	);
}
