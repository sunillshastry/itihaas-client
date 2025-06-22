import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import MainContainer from '@/components/elements/MainContainer';
import Navbar from '@/components/elements/Navbar';
import NotFound404Title from '@/components/elements/NotFound404Title';
import Footer from '@/components/elements/Footer';

function NotFound() {
	return (
		<>
			<Navbar />
			<MainContainer className="relative flex min-h-[60vh] items-center justify-center">
				<NotFound404Title />

				<div className="flex flex-col items-center text-center">
					<h3 className="text-primary-400 font-heading text-6xl text-shadow-lg">
						Page not found!
					</h3>
					<p className="text-primary-400 mt-4 text-lg font-medium text-shadow-2xs">
						The resource you are looking for is not found
					</p>

					<div className="mt-10 flex">
						<Link
							className="text-primary-500 flex items-center underline text-shadow-2xs"
							to="/"
						>
							<span>
								<ArrowLeft size={14} />
							</span>
							<span className="ml-1">Back home</span>
						</Link>

						<Link
							to="/docs"
							className="text-primary-500 ml-6 flex items-center underline text-shadow-2xs"
						>
							<span>View docs</span>
							<span className="ml-1">
								<ArrowRight size={14} />
							</span>
						</Link>
					</div>
				</div>
			</MainContainer>
			<Footer className="mt-36" />
		</>
	);
}

export default NotFound;
