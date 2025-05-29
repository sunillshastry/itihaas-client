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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
					tempore mollitia fuga reprehenderit tenetur, itaque sequi aspernatur
					voluptas corporis exercitationem est non culpa accusamus illo eius
					iure ratione qui repellat cum rerum porro a. Laboriosam tenetur
					dolorem earum explicabo adipisci ullam dignissimos numquam voluptates
					ipsam, repellendus omnis, nam libero ipsum impedit. Sit ducimus unde
					vitae! Illum cupiditate ea tenetur voluptate unde temporibus neque
					nesciunt eaque quidem atque, minus a distinctio labore facere nisi
					quae libero dignissimos excepturi. Error architecto totam officiis?
					Qui, architecto amet ex nam ut rerum minima sapiente.
				</p>
				<Link
					to="/docs"
					className="bg-primary-30 text-primary-400 hover:bg-primary-50 mt-3 inline-flex items-center justify-start rounded-sm px-3 py-2 transition-all duration-150 ease-in"
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
