import IssueEntryField from '@/components/IssueEntryField';

function IssuesUserDetails() {
	return (
		<section className="mt-10">
			<div>
				<h2 className="font-heading text-primary-400 text-xl">User Details</h2>
				<p className="text-primary-400/60 text-sm">
					For any potential contact purposes regarding issues, sources, etc.
					Your information will not be shared to anyone. Fields marked with *
					are required
				</p>
			</div>

			<div className="mt-5 flex items-center justify-start">
				<IssueEntryField
					label="Full Name"
					required={true}
					variant="small"
				/>
				<IssueEntryField
					className="ml-10"
					label="Email"
					variant="small"
					required={true}
				/>
			</div>
		</section>
	);
}

export default IssuesUserDetails;
