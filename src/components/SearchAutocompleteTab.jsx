import PropTypes from 'prop-types';

function SearchAutocompleteTab({ displayed, query }) {
	return (
		<div
			className={`absolute max-h-[250px] w-full overflow-y-scroll bg-white p-2 text-sm ${displayed ? 'block' : 'hidden'}`}
		>
			<ul className="list-none">
				<li className="autocomplete__link">
					<a href="#">Link-1</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-2</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-3</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-4</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-5</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-6</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-7</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-8</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-9</a>
				</li>
				<li className="autocomplete__link">
					<a href="#">Link-10</a>
				</li>
			</ul>
		</div>
	);
}

SearchAutocompleteTab.propTypes = {
	displayed: PropTypes.bool.isRequired,
	query: PropTypes.string,
};

export default SearchAutocompleteTab;
