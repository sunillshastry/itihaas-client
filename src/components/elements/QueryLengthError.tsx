import queryLengthErrorImage from '@/assets/query-length-error.svg';

function QueryLengthError() {
	return (
		<div className="relative flex flex-col items-center justify-start pt-8">
			<div className="w-lg opacity-90 max-lg:w-md max-md:w-sm max-sm:w-2xs">
				<img
					src={queryLengthErrorImage}
					alt="Query length error image"
				/>
			</div>

			<h5 className="text-primary-500 mt-6 inline-block text-center text-2xl font-medium">
				Uh oh! Your search query must be at least three characters long...
			</h5>
		</div>
	);
}

export default QueryLengthError;
