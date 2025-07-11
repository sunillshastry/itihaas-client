function EmptySearchResult() {
	return (
		<div>
			<h3 className="font-medium">
				We found no matches for your search term, here are some resources
			</h3>

			<div className="text-primary-400 mt-4 text-sm">
				<p className="text-primary-600 underline underline-offset-2">
					Suggestion for finding information on Itihaas:
				</p>

				<ul className="mt-1 ml-5 list-disc">
					<li>Make sure all the terms are spelled correctly.</li>
					<li>
						Manually view and search dynasties, rulers or wars catalog in their
						dedicated pages.
					</li>
					<li>Try again with a different query term...</li>
				</ul>
			</div>
		</div>
	);
}

export default EmptySearchResult;
