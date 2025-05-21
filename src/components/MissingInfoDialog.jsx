import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function MissingInfoDialog() {
	const navigate = useNavigate();

	return (
		<div className="bg-primary-400 mt-10 rounded-sm px-6 py-4">
			<h3 className="font-heading text-primary-90 text-xl">
				Wish to update missing information?
			</h3>

			<p className="text-primary-80 text-md mt-2 leading-8">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
				corrupti ut nobis earum modi dolorem sunt libero animi tempore ratione
				eius necessitatibus aliquid, non nemo accusantium fugit hic illo quidem
				possimus. Numquam nam nostrum iure libero ab, vero voluptas fuga.
			</p>

			<button
				className="from-primary-50 to-primary-30 text-primary-900 mt-6 flex items-center justify-center rounded-sm bg-linear-to-b px-2 py-2 text-sm hover:cursor-pointer"
				onClick={() => navigate('/issues')}
			>
				<span>Submit Issue</span>
				<span className="ml-1">
					<ArrowRight size={15} />
				</span>
			</button>
		</div>
	);
}

export default MissingInfoDialog;
