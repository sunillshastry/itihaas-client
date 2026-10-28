import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import FormErrorLabel from '@/components/views/FormErrorLabel';
import userInfo from '@/data/issues/userInfo';
import { Info } from 'lucide-react';
import {
	FieldErrors,
	FieldValues,
	Path,
	UseFormRegister,
} from 'react-hook-form';
import { Tooltip } from 'react-tooltip';

interface FunctionProps<T extends FieldValues> {
	register: UseFormRegister<T> | null;
	errors: FieldErrors<T> | null;
}

export default function UserInfo<T extends FieldValues>({
	register,
	errors,
}: FunctionProps<T>) {
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
						const fieldError =
							errors[field.registerHookForm as keyof FieldErrors<T>];
						return (
							<>
								<InputFormControl
									key={field.id}
									label={field.label}
									placeholder={field.placeholder}
									required={field.required}
									id={field.htmlId}
									info={field.info}
									{...register(field.registerHookForm as Path<T>, {
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
								{fieldError && (
									<FormErrorLabel>
										{fieldError.message?.toString()}
									</FormErrorLabel>
								)}
							</>
						);
					} else if (
						field.type === 'textarea' &&
						register !== null &&
						errors !== null
					) {
						const fieldError =
							errors[field.registerHookForm as keyof FieldErrors<T>];
						return (
							<>
								<TextAreaFormControl
									key={field.id}
									label={field.label}
									placeholder={field.placeholder}
									required={field.required}
									id={field.htmlId}
									info={field.info}
									{...register(field.registerHookForm as Path<T>, {
										required: {
											value: field.required as boolean,
											message: `${field.label} is a required field`,
										},
									})}
								/>
								{fieldError && (
									<FormErrorLabel>
										{fieldError.message?.toString()}
									</FormErrorLabel>
								)}
							</>
						);
					} else if (
						field.type === 'checkbox' &&
						register !== null &&
						errors !== null
					) {
						const fieldError =
							errors[field.registerHookForm as keyof FieldErrors<T>];

						const tooltipId = `${field.label}-${field.id}`;

						return (
							<div className="mt-4 flex items-center justify-start gap-x-2">
								{field?.info && (
									<>
										<Tooltip id={tooltipId}>
											<p className="max-w-[250px] text-sm font-medium max-md:max-w-[180px]">
												{field?.info}
											</p>
										</Tooltip>
									</>
								)}
								<input
									type="checkbox"
									className="text-primary-10 accent-primary-20 h-4 w-4 rounded-md focus:ring-2"
									id={field.htmlId}
								/>

								<label
									htmlFor={field.htmlId}
									className="text-sm font-semibold hover:cursor-pointer"
								>
									{field.label}
								</label>

								{field?.info && (
									<>
										<span
											data-tooltip-id={field?.info && tooltipId}
											data-tooltip-place="top"
										>
											<Info size={14} />
										</span>
									</>
								)}
								{fieldError && (
									<FormErrorLabel>
										{fieldError.message?.toString()}
									</FormErrorLabel>
								)}
							</div>
						);
					}
				})}
			</div>
		</div>
	);
}
