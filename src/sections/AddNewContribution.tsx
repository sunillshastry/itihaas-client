import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import NewEntityTabsContent from './issues/new/NewEntityTabsContent';
import NewDynastyTabsContent from './issues/new/NewDynastyTabsContent';
import NewRulerTabsContent from './issues/new/NewRulerTabsContent';
import NewWarTabsContent from './issues/new/NewWarTabsContent';
import BasicButton from '@/components/elements/BasicButton';
import { Send } from 'lucide-react';
import { FormEventHandler, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import UserInfo from './issues/user/UserInfo';
import { SubmitHandler, useForm } from 'react-hook-form';
import { NewEntityContributionForm } from '@/interfaces/new-contributions/NewEntityContributionForm';
import { NewDynastyContributionForm } from '@/interfaces/new-contributions/NewDynastyContributionForm';
import { NewRulerContributionForm } from '@/interfaces/new-contributions/NewRulerContributionForm';
import { NewWarContributionForm } from '@/interfaces/new-contributions/NewWarContributionForm';

const DEFAULT_NEW_CONTRIBUTION_TAB = 'new';

export default function AddNewContribution() {
	const [searchParams, setSearchParams] = useSearchParams();

	const tabType = searchParams.get('type') || DEFAULT_NEW_CONTRIBUTION_TAB;
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
	// New Entity tab useForm
	const {
		register: newEntityRegister,
		handleSubmit: newEntityHandleSubmit,
		formState: { errors: newEntityErrors },
	} = useForm<NewEntityContributionForm>();

	// New Dynasty tab useForm
	const {
		register: dynastyRegister,
		handleSubmit: dynastyHandleSubmit,
		formState: { errors: dynastyErrors },
	} = useForm<NewDynastyContributionForm>();

	// New Ruler tab useForm
	const {
		register: rulerRegister,
		handleSubmit: rulerHandleSubmit,
		formState: { errors: rulerErrors },
	} = useForm<NewRulerContributionForm>();

	// New War tab useForm
	const {
		register: warRegister,
		handleSubmit: warHandleSubmit,
		formState: { errors: warErrors },
	} = useForm<NewWarContributionForm>();

	// Submit handlers
	const newEntitySubmitForm: SubmitHandler<NewEntityContributionForm> = (
		results
	) => {
		const data = {
			...results,
			type: 'new',
			entity: 'new',
			date: new Date().toString(),
		};

		console.log(data);
		// TODO: Make the request to the backend to submit the contribution form
	};

	const dynastySubmitForm: SubmitHandler<NewDynastyContributionForm> = (
		results
	) => {
		const data = {
			...results,
			type: 'new',
			entity: 'dynasty',
			date: new Date().toString(),
		};

		console.log(data);
		// TODO: Make the request to the backend to submit the contribution form
	};

	const rulerSubmitForm: SubmitHandler<NewRulerContributionForm> = (
		results
	) => {
		const data = {
			...results,
			type: 'new',
			entity: 'ruler',
			date: new Date().toString(),
		};

		console.log(data);
		// TODO: Make the request to the backend to submit the contribution form
	};

	const warSubmitForm: SubmitHandler<NewWarContributionForm> = (results) => {
		const data = {
			...results,
			type: 'new',
			entity: 'war',
			date: new Date().toString(),
		};

		console.log(data);
		// TODO: Make the request to the backend to submit the contribution form
	};

	return (
		<section className="from-primary-400 to-primary-700 text-primary-70 my-6 rounded-xl bg-linear-to-br p-8 max-md:px-4">
			<form
				onSubmit={
					// New Entity
					((tabValue === 'new' &&
						newEntityHandleSubmit(
							newEntitySubmitForm
						)) as FormEventHandler<HTMLFormElement>) ||
					// New Dynasty
					((tabValue === 'dynasty' &&
						dynastyHandleSubmit(
							dynastySubmitForm
						)) as FormEventHandler<HTMLFormElement>) ||
					// New Ruler
					((tabValue === 'ruler' &&
						rulerHandleSubmit(
							rulerSubmitForm
						)) as FormEventHandler<HTMLFormElement>) ||
					// New War
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
						<TabsTrigger value="new">New</TabsTrigger>
						<TabsTrigger value="dynasty">Dynasty</TabsTrigger>
						<TabsTrigger value="ruler">Ruler</TabsTrigger>
						<TabsTrigger value="war">War</TabsTrigger>
					</TabsList>

					<div className="mt-2">
						<NewEntityTabsContent
							register={newEntityRegister}
							errors={newEntityErrors}
						/>
						<NewDynastyTabsContent
							register={dynastyRegister}
							errors={dynastyErrors}
						/>
						<NewRulerTabsContent
							register={rulerRegister}
							errors={rulerErrors}
						/>
						<NewWarTabsContent
							register={warRegister}
							errors={warErrors}
						/>
					</div>
				</Tabs>

				{(tabValue === 'new' && (
					<UserInfo
						register={newEntityRegister}
						errors={newEntityErrors}
					/>
				)) ||
					(tabValue === 'dynasty' && (
						<UserInfo
							register={dynastyRegister}
							errors={dynastyErrors}
						/>
					)) ||
					(tabValue === 'ruler' && (
						<UserInfo
							register={rulerRegister}
							errors={rulerErrors}
						/>
					)) ||
					(tabValue === 'war' && (
						<UserInfo
							register={warRegister}
							errors={warErrors}
						/>
					))}

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
		</section>
	);
}
