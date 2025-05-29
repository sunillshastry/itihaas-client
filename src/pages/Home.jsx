import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../ui/About';
import Offers from '../ui/Offers';
import TheWhy from '../ui/TheWhy';

function Home() {
	return (
		<>
			<main className="home__main px-20">
				<section className="home__main--primary bg-brown-background px-7">
					<Navbar />
					<About />
					<Offers />
					<TheWhy />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Home;
