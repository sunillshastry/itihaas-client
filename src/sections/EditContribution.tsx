import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BasicButton from '@/components/elements/BasicButton';
import { Send } from 'lucide-react';
import EditDynastyTabsContent from './issues/edit/EditDynastyTabsContent';
import EditWarTabsContent from './issues/edit/EditWarTabsContent';
import { useSearchParams } from 'react-router-dom';
import { FormEventHandler, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import EditRulerTabsContent from './issues/edit/EditRulerTabsContent';
import UserInfo from './issues/user/UserInfo';
import { EditFormInputs } from '@/interfaces/EditFormInputs';

const DEFAULT_EDIT_CONTRIBUTION_TAB = 'dynasty';

export default function EditContribution() {
	const [searchParams, setSearchParams] = useSearchParams();

	const tabType = searchParams.get('type') || DEFAULT_EDIT_CONTRIBUTION_TAB;

	const [tabValue, setTabValue] = useState<string>(tabType);

	function changeTab(e: string) {
		setTabValue(e);

		setSearchParams(function (currentParams) {
			currentParams.set('type', e);
			return currentParams;
		});
	}

	useEffect(
		function () {
			setSearchParams(function (currentParams) {
				currentParams.set('type', tabValue);
				return currentParams;
			});
		},
		// WARNING: Do not remove eslint comment on the line below, the dependency list for useEffect is currently accurate
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[tabValue]
	);

	// Dedicated useForm clients for each tab
	// Edit Dynasty useForm
	const {
		register: dynastyRegister,
		handleSubmit: dynastyHandleSubmit,
		formState: { errors: dynastyErrors },
	} = useForm<EditFormInputs>();

	// Edit Ruler useForm
	const {
		register: rulerRegister,
		handleSubmit: rulerHandleSubmit,
		formState: { errors: rulerErrors },
	} = useForm<EditFormInputs>();

	// Edit War useForm
	const {
		register: warRegister,
		handleSubmit: warHandleSubmit,
		formState: { errors: warErrors },
	} = useForm<EditFormInputs>();

	// Separate form submit handlers
	const dynastySubmitForm: SubmitHandler<EditFormInputs> = (results) => {
		const data = {
			...results,
			type: 'edit',
			entity: 'dynasty',
			date: new Date().toString(),
		};
		console.log(data);
		// TODO: Make a request to backend to send this form details
	};

	const rulerSubmitForm: SubmitHandler<EditFormInputs> = (results) => {
		const data = {
			...results,
			type: 'edit',
			entity: 'ruler',
			date: new Date().toString(),
		};
		console.log(data);
		// TODO: Make a request to backend to send this form details
	};

	const warSubmitForm: SubmitHandler<EditFormInputs> = (results) => {
		const data = {
			...results,
			type: 'edit',
			entity: 'war',
			date: new Date().toString(),
		};
		console.log(data);
		// TODO: Make a request to backend to send this form details
	};

	return (
		<section className="from-primary-400 to-primary-700 text-primary-70 my-6 rounded-xl bg-linear-to-br p-8 max-md:px-4">
			<div>
				<form
					onSubmit={
						// Dynasty
						((tabValue === 'dynasty' &&
							dynastyHandleSubmit(
								dynastySubmitForm
							)) as FormEventHandler<HTMLFormElement>) ||
						// Ruler
						((tabValue === 'ruler' &&
							rulerHandleSubmit(
								rulerSubmitForm
							)) as FormEventHandler<HTMLFormElement>) ||
						// War
						((tabValue === 'war' &&
							warHandleSubmit(
								warSubmitForm
							)) as FormEventHandler<HTMLFormElement>)
					}
				>
					<Tabs
						defaultValue={tabValue}
						value={tabValue}
						onValueChange={changeTab}
					>
						<TabsList className="w-sm max-md:w-full">
							<TabsTrigger value="dynasty">Dynasty</TabsTrigger>
							<TabsTrigger value="ruler">Ruler</TabsTrigger>
							<TabsTrigger value="war">War</TabsTrigger>
						</TabsList>

						<div className="mt-2">
							<EditDynastyTabsContent
								register={dynastyRegister}
								errors={dynastyErrors}
							/>
							<EditRulerTabsContent
								register={rulerRegister}
								errors={rulerErrors}
							/>
							<EditWarTabsContent
								register={warRegister}
								errors={warErrors}
							/>
						</div>
					</Tabs>

					<UserInfo
						register={
							(tabValue === 'dynasty' ? dynastyRegister : null) ||
							(tabValue === 'ruler' ? rulerRegister : null) ||
							(tabValue === 'war' ? warRegister : null)
						}
						errors={
							(tabValue === 'dynasty' ? dynastyErrors : null) ||
							(tabValue === 'ruler' ? rulerErrors : null) ||
							(tabValue === 'war' ? warErrors : null)
						}
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
				</form>
			</div>
		</section>
	);
}
