import InputFormControl from '@/components/issues/InputFormControl';
import TextAreaFormControl from '@/components/issues/TextAreaFormControl';
import userInfo from '@/data/issues/userInfo';

export default function UserInfo() {
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
					if (field.type === 'input') {
						return (
							<InputFormControl
								key={field.id}
								label={field.label}
								placeholder={field.placeholder}
								required={field.required}
								id={field.htmlId}
							/>
						);
					} else if (field.type === 'textarea') {
						return (
							<TextAreaFormControl
								key={field.id}
								label={field.label}
								placeholder={field.placeholder}
								required={field.required}
								id={field.htmlId}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}
