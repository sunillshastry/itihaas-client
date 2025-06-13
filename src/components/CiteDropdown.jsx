import { useEffect, useState } from 'react';
import { MessageSquareQuote } from 'lucide-react';
import PropTypes from 'prop-types';

import Citations from '../services/Citations';
import formattedMonthName from '../utils/formattedMonthName';
import CitationContent from './CitationContent';

function CiteDropdown({ pageTitle, updatedDate, url }) {
	const update = new Date(updatedDate);
	const formattedUpdateDate = `${update.getUTCDate()} ${formattedMonthName(update.getUTCMonth() + 1)} ${update.getUTCFullYear()}`;

	const accessed = new Date();
	const formattedAccessDate = `${accessed.getUTCDate()} ${formattedMonthName(accessed.getUTCMonth() + 1)} ${accessed.getUTCFullYear()}`;

	const [isCiteTabOpen, setIsCiteTabOpen] = useState(false);
	const [citation, setCitation] = useState(
		Citations.getMLAFormat({
			page: pageTitle,
			updated: formattedUpdateDate,
			url,
			accessed: formattedAccessDate,
		})
	);

	useEffect(
		function () {
			function hideCiteTab(e) {
				if (e.key === 'Escape' || (e.code === 'Escape' && isCiteTabOpen)) {
					setIsCiteTabOpen(false);
				}
			}

			document.addEventListener('keyup', hideCiteTab);

			return () => document.removeEventListener('keyup', hideCiteTab);
		},
		[isCiteTabOpen]
	);

	function onOptionChange(e) {
		const value = e?.value || 'mla';
		updateCitationContent(value);
	}

	function updateCitationContent(format) {
		switch (format) {
			case 'mla':
				setCitation(
					Citations.getMLAFormat({
						page: pageTitle,
						updated: formattedUpdateDate,
						url,
						accessed: formattedAccessDate,
					})
				);
				break;
			case 'apa':
				setCitation(
					Citations.getAPAFormat({
						year: new Date().getUTCFullYear(),
						date: `${new Date().getUTCDate()} ${formattedMonthName(new Date().getUTCMonth() + 1)}`,
						page: pageTitle,
						url,
					})
				);
				break;
			case 'chicago':
				setCitation(
					Citations.getChicagoFormat({
						page: pageTitle,
						updated: formattedUpdateDate,
						url,
					})
				);
				break;
			case 'harvard':
				setCitation(
					Citations.getHarvardFormat({
						page: pageTitle,
						updated: formattedUpdateDate,
						url,
						accessed: formattedAccessDate,
					})
				);
				break;
			default:
				throw new Error(`Invalid citation format: ${format}`);
		}
	}

	return (
		<div className="relative">
			<button
				className="border-primary text-primary from-primary-80 to-primary-90 hover:text-primary-200 hover:border-primary-200 focus-visible:outline-primary-20 focus-visible::outline-2 flex items-center rounded-sm border bg-linear-to-r px-5 py-2 font-medium hover:cursor-pointer"
				onClick={() => setIsCiteTabOpen((current) => !current)}
			>
				<span className="pointer-events-none">Cite Page</span>
				<span className="pointer-events-none ml-1">
					<MessageSquareQuote size={15} />
				</span>
			</button>

			{isCiteTabOpen && (
				<CitationContent
					citation={citation}
					onOptionChange={onOptionChange}
				/>
			)}
		</div>
	);
}

CiteDropdown.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	updatedDate: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default CiteDropdown;
