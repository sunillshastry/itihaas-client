import Footer from '@/components/elements/Footer';
import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import PrimaryHeader from '@/components/elements/PrimaryHeader';
import RegisterInfo from '@/components/register/RegisterInfo';

function Register() {
	return (
		<>
			<Navbar />
			<MainContainer>
				<PrimaryHeader>API Registration</PrimaryHeader>

				<section className="mt-5">
					<RegisterInfo />
				</section>
			</MainContainer>
			<Footer className="mt-36 max-md:mt-20" />
		</>
	);
}

export default Register;
