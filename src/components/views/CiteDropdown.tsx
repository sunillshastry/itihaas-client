import { useCallback, useEffect, useState } from 'react';
import { MessageSquareQuote } from 'lucide-react';
import PropTypes from 'prop-types';

import Citations from '@/services/Citations';
import formattedMonthName from '@/utils/formattedMonthName';
import CitationContent from '@/components/views/CitationContent';
import { useCitation } from '@/context/CitationContext';
import { useSearchParams } from 'react-router-dom';
import { SingleValue } from 'react-select';

interface FunctionProps {
	pageTitle: string;
	updatedDate: string | Date;
	url: string;
}

interface DropdownOption {
	value: string;
	label: string;
}

function CiteDropdown({ pageTitle, updatedDate, url }: FunctionProps) {
	const update = new Date(updatedDate);
	const formattedUpdateDate = `${update.getUTCDate()} ${formattedMonthName(update.getUTCMonth() + 1)} ${update.getUTCFullYear()}`;

	const accessed = new Date();
	const formattedAccessDate = `${accessed.getUTCDate()} ${formattedMonthName(accessed.getUTCMonth() + 1)} ${accessed.getUTCFullYear()}`;

	const { dispatch } = useCitation();
	const [params, setParams] = useSearchParams();

	const [isCiteTabOpen, setIsCiteTabOpen] = useState<boolean>(false);
	const [citation, setCitation] = useState<string>(
		Citations.getMLAFormat({
			page: pageTitle,
			updated: formattedUpdateDate,
			url,
			accessed: formattedAccessDate,
		})
	);

	const updateCitationContent = useCallback(
		(format: string) => {
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

	useEffect(
		function () {
			function hideCiteTab(e: KeyboardEvent) {
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

			if (citationTab) {
				if (citationTab === 'open') {
					setIsCiteTabOpen(true);
				} else if (citationTab === 'close') {
					setIsCiteTabOpen(false);
				}
			} else {
				setIsCiteTabOpen(false);
			}
		},
		[params]
	);

	useEffect(
		function () {
			const format = params.get('citationFormat');

			if (format) {
				const allowedFormats = ['harvard', 'mla', 'apa', 'chicago'];
				if (allowedFormats.includes(format)) {
					updateCitationContent(format);
					const dispatchValue = `format/${format?.toLowerCase()}`;
					dispatch({ type: dispatchValue });
				} else {
					dispatch({ type: 'format/mla' });
					setParams(function (current) {
						current.set('citationFormat', 'mla');
						return current;
					});
				}
			}
		},
		[dispatch, params, updateCitationContent, setParams]
	);

	function onOptionChange(
		newValue: SingleValue<DropdownOption>
		// actionMeta: ActionMeta<DropdownOption>
	) {
		const value = newValue?.value || 'mla';

		updateCitationContent(value);

		const citationContextDispatchValue = `format/${value}`;

		dispatch({ type: citationContextDispatchValue });

		setParams(function (current) {
			current.set('citationFormat', value);
			return current;
		});
	}

	function handleCitationToggle() {
		const opposite = !isCiteTabOpen;
		console.log('hello!');

		setIsCiteTabOpen((current) => !current);

		if (opposite) {
			dispatch({ type: 'open/true' });

			setParams(function (current) {
				current.set('citationTab', 'open');
				return current;
			});
		} else {
			dispatch({ type: 'open/false' });

			setParams(function (current) {
				current.set('citationTab', 'close');
				return current;
			});
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
