import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ApiFormInputs } from '@/interfaces/ApiFormInputs';
import { FormEventHandler, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import ApiIssuesTabsContent from './issues/api/ApiIssuesTabsContent';
import DocsIssuesTabsContent from './issues/api/DocsIssuesTabsContent';
import UserInfo from './issues/user/UserInfo';

const DEFAULT_EDIT_CONTRIBUTION_TAB = 'api';

export default function ApiContributionSection() {
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
	// API issues useForm
	const {
		register: apiRegister,
		handleSubmit: apiHandleSubmit,
		formState: { errors: apiErrors },
	} = useForm<ApiFormInputs>();

	// Docs issues useForm
	const {
		register: docsRegister,
		handleSubmit: docsHandleSubmit,
		formState: { errors: docsErrors },
	} = useForm<ApiFormInputs>();

	// Separate form submit handlers
	const apiSubmitForm: SubmitHandler<ApiFormInputs> = (results) => {
		const data = {
			...results,
			type: 'api',
			entity: 'api',
			date: new Date().toString(),
		};
		console.log(data);
		// TODO: Make a request to backend to send this form details
	};

	const docsSubmitForm: SubmitHandler<ApiFormInputs> = (results) => {
		const data = {
			...results,
			type: 'api',
			entity: 'docs',
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
						// API issues
						((tabValue === 'api' &&
							apiHandleSubmit(
								apiSubmitForm
							)) as FormEventHandler<HTMLFormElement>) ||
						// Docs issues
						((tabValue === 'docs' &&
							docsHandleSubmit(
								docsSubmitForm
							)) as FormEventHandler<HTMLFormElement>)
					}
				>
					<Tabs
						defaultValue={tabValue}
						value={tabValue}
						onValueChange={changeTab}
					>
						<TabsList className="w-sm max-md:w-full">
							<TabsTrigger value="api">API</TabsTrigger>
							<TabsTrigger value="docs">Docs</TabsTrigger>
						</TabsList>

						<div className="mt-2">
							<ApiIssuesTabsContent />
							<DocsIssuesTabsContent />
						</div>
					</Tabs>

					<UserInfo
						register={
							(tabValue === 'api' ? apiRegister : null) ||
							(tabValue === 'docs' ? docsRegister : null)
						}
						errors={
							(tabValue === 'api' ? apiErrors : null) ||
							(tabValue === 'docs' ? docsErrors : null)
						}
					/>
				</form>
			</div>
		</section>
	);
}
