import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import About from '../ui/About';
import Offers from '../ui/Offers';
import TheWhy from '../ui/TheWhy';
import UseAPI from '../ui/UseAPI';

function Home() {
	return (
		<>
			<main className="home__main px-20 pb-36">
				<section className="home__main--primary bg-brown-background px-7 pb-5">
					<Navbar />
					<About />
					<Offers />
					<TheWhy />
					<UseAPI />
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Home;
