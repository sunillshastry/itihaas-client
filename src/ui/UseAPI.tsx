import { BookCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

function UseAPI() {
	return (
		<div className="bg-primary-400 mt-10 rounded-xs p-6">
			<h2 className="border-primary-30/25 text-primary-80 font-heading border-b text-xl first-letter:text-3xl">
				Are you a developer?
			</h2>
			<div>
				<p className="text-primary-70 mt-3 leading-10">
					Are you passionate about history or building educational tools?
					Itihaas offers a robust, read-only public API that gives you access to
					a rich dataset covering Indian dynasties, rulers, battles, timelines,
					and more. Whether you are working on a personal project, building a
					commercial application, or conducting academic research, our API makes
					it easy to integrate authentic historical data into your platform.
					With comprehensive filtering, sorting, and search capabilities, you
					can tailor the data to suit your needs. Best of all, Itihaas is free
					and safe to use with API key access and rate-limiting for added
					security and usage tracking. Start building today and bring the story
					of India&apos;s past to life in your apps, websites, and tools.
				</p>
				<Link
					to="/docs"
					className="bg-primary-30 text-primary-400 hover:bg-primary-50 mt-4 inline-flex items-center justify-start rounded-sm px-3 py-2 transition-all duration-150 ease-in"
				>
					<span>View Docs</span>
					<span className="ml-1">
						<BookCheck size={18} />
					</span>
				</Link>
			</div>
		</div>
	);
}

export default UseAPI;
