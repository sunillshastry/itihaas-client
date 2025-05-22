import BackButton from '../components/BackButton';
import MainContainer from '../components/MainContainer';
import Navbar from '../components/Navbar';
import PrimaryHeader from '../components/PrimaryHeader';
import QuickFacts from '../components/QuickFacts';
import RulerQuickFieldsContainer from '../components/RulerQuickFieldsContainer';
import SecondaryHeader from '../components/SecondaryHeader';

function RulerPage() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<>
					<div>
						<BackButton />
						<PrimaryHeader>Pandu</PrimaryHeader>

						<SecondaryHeader>Pāṇḍu, Pandu of Chandravamsha</SecondaryHeader>
						<SecondaryHeader className="mt-4">
							1200 BCE - 800 BCE
						</SecondaryHeader>
					</div>

					<QuickFacts>
						<RulerQuickFieldsContainer />
					</QuickFacts>
				</>
			</MainContainer>
		</>
	);
}

export default RulerPage;
