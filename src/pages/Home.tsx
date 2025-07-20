import Footer from '@/components/elements/Footer';
import Navbar from '@/components/elements/Navbar';
import About from '@/ui/About';
import Offers from '@/ui/Offers';
import TheWhy from '@/ui/TheWhy';
import UseAPI from '@/ui/UseAPI';

function Home() {
	return (
		<>
			<main className="home__main px-20 pb-36 max-lg:px-10 max-md:px-0 max-md:pb-0">
				<section className="home__main--primary bg-brown-background px-7 pb-5 max-lg:px-4 max-md:pb-10 max-sm:px-0 max-sm:pb-0">
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
