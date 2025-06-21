import { useCallback, useEffect, useState } from 'react';
import { MessageSquareQuote } from 'lucide-react';
import PropTypes from 'prop-types';

import Citations from '@/services/Citations';
import formattedMonthName from '@/utils/formattedMonthName';
import CitationContent from '@/components/views/CitationContent';
import { useCitation } from '@/context/CitationContext';
import { useSearchParams } from 'react-router-dom';

function CiteDropdown({ pageTitle, updatedDate, url }) {
	const update = new Date(updatedDate);
	const formattedUpdateDate = `${update.getUTCDate()} ${formattedMonthName(update.getUTCMonth() + 1)} ${update.getUTCFullYear()}`;

	const accessed = new Date();
	const formattedAccessDate = `${accessed.getUTCDate()} ${formattedMonthName(accessed.getUTCMonth() + 1)} ${accessed.getUTCFullYear()}`;

	const { dispatch, format } = useCitation();
	const [params] = useSearchParams();

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

	useEffect(
		function () {
			const citationTab = params.get('citationTab');
			if (citationTab === 'open') {
				setIsCiteTabOpen(true);
			} else if (citationTab === 'close') {
				setIsCiteTabOpen(false);
			}
		},
		[params]
	);

	function onOptionChange(e) {
		const value = e?.value || 'mla';
		updateCitationContent(value);

		const citationContextDispatchValue = `format/${value}`;

		dispatch({ type: citationContextDispatchValue });
	}

	const updateCitationContent = useCallback(
		(format) => {
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
		},
		[formattedAccessDate, formattedUpdateDate, pageTitle, url]
	);

	function handleCitationToggle() {
		const opposite = !isCiteTabOpen;

		setIsCiteTabOpen((current) => !current);

		if (opposite) {
			dispatch({ type: 'open/true' });
		} else {
			dispatch({ type: 'open/false' });
		}
	}

	useEffect(
		function () {
			const citationFormat = params.get('citationFormat');
			if (citationFormat) {
				updateCitationContent(citationFormat);
			} else {
				updateCitationContent('mla');
			}
		},
		[params, updateCitationContent]
	);

	return (
		<div className="relative">
			<button
				className="border-primary text-primary from-primary-80 to-primary-90 hover:text-primary-200 hover:border-primary-200 focus-visible:outline-primary-20 focus-visible::outline-2 flex items-center rounded-sm border bg-linear-to-r px-5 py-2 font-medium hover:cursor-pointer"
				onClick={handleCitationToggle}
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
