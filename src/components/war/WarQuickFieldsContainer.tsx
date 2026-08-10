import { War } from '@/interfaces/War';
import QuickFactField from '../views/QuickFactField';
import QuickFactsNoField from '../views/QuickFactsNoField';
import formatArrayToString from '@/utils/formatArrayToString';

interface FunctionProps {
	war: War;
}

interface Belligerent {
	name: string;
	type: string;
	leaders: string[];
	_id: string;
}

export default function WarQuickFieldsContainer({ war }: FunctionProps) {
	const firstBelligerent: Belligerent = war?.belligerents[0] || null;
	const secondBelligerent: Belligerent = war?.belligerents[1] || null;

	return (
		<>
			<QuickFactField
				title="Winners"
				content={
					war?.outcome?.winners ? war?.outcome.winners : <QuickFactsNoField />
				}
			/>

			<QuickFactField
				title="Losers"
				content={
					war?.outcome?.losers ? war?.outcome.losers : <QuickFactsNoField />
				}
			/>

			<QuickFactField
				title="Casualties"
				content={
					<>
						{(war?.casualties?.sideA && war?.casualties?.sideB && (
							<>
								<span>{war?.casualties?.sideA}</span>
								<span>&</span>
								<span>{war?.casualties?.sideB}</span>
							</>
						)) || <QuickFactsNoField />}
					</>
				}
			/>

			<QuickFactField
				title="locations"
				content={
					(war?.locations && formatArrayToString<string>(war?.locations)) || (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title={`Leaders (${firstBelligerent.name})`}
				content={
					firstBelligerent?.leaders?.length !== 0 ? (
						formatArrayToString(firstBelligerent?.leaders)
					) : (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title={`Leaders (${secondBelligerent.name})`}
				content={
					secondBelligerent?.leaders?.length !== 0 ? (
						formatArrayToString(secondBelligerent.leaders)
					) : (
						<QuickFactsNoField />
					)
				}
			/>

			<QuickFactField
				title="Causes"
				content={
					war?.causes ? formatArrayToString(war?.causes) : <QuickFactsNoField />
				}
			/>
		</>
	);
}
