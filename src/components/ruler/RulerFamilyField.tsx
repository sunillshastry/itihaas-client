import formatArrayToString from '@/utils/formatArrayToString';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Family {
	father?: string;
	mother?: string;
	wives?: string[];
	children?: string[];
}

interface FunctionProps {
	family: Family;
}

function RulerFamilyField({ family }: FunctionProps) {
	const [showFull, setShowFull] = useState(false);

	const hasAdditionalFamily =
		(family?.children?.length as number) > 0 ||
		(family?.wives?.length as number) > 0;

	return (
		<div className="text-xs">
			<div
				className={twMerge(
					!showFull && hasAdditionalFamily && 'mask-b-from-50% mask-b-to-100%'
				)}
			>
				{family?.father && (
					<p>
						<RulerFamilyFieldTitle>Father</RulerFamilyFieldTitle>
						<RulerFamilyFieldValue>{family.father}</RulerFamilyFieldValue>
					</p>
				)}

				{family?.mother && (
					<p>
						<RulerFamilyFieldTitle>Mother</RulerFamilyFieldTitle>
						<RulerFamilyFieldValue>{family.mother}</RulerFamilyFieldValue>
					</p>
				)}

				{showFull && (
					<>
						{(family?.wives?.length as number) > 0 && (
							<p>
								<RulerFamilyFieldTitle>Wives</RulerFamilyFieldTitle>
								<RulerFamilyFieldValue>
									{formatArrayToString(family.wives as string[])}
								</RulerFamilyFieldValue>
							</p>
						)}

						{(family?.children?.length as number) > 0 && (
							<p>
								<RulerFamilyFieldTitle>Children</RulerFamilyFieldTitle>
								<RulerFamilyFieldValue>
									{formatArrayToString(family.children as string[])}
								</RulerFamilyFieldValue>
							</p>
						)}
					</>
				)}
			</div>
			{hasAdditionalFamily && (
				<button
					className="text-primary-60 hover:text-primary-80 underline hover:cursor-pointer"
					onClick={() => setShowFull((current) => !current)}
				>
					{showFull ? 'See less' : 'See more'}
				</button>
			)}
		</div>
	);
}

function RulerFamilyFieldTitle({
	children,
}: {
	children: Readonly<React.ReactNode>;
}) {
	return (
		<span className="text-primary-40 font-mono uppercase">{children}</span>
	);
}

function RulerFamilyFieldValue({
	children,
	className,
}: {
	children: Readonly<React.ReactNode>;
	className?: string;
}) {
	return <span className={twMerge('ml-1 text-sm', className)}>{children}</span>;
}

export default RulerFamilyField;
