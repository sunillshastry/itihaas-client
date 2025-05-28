import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
	return (
		<>
			<main className="home__main px-20">
				<section className="home__main--primary bg-brown-background px-3">
					<Navbar />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Home;
