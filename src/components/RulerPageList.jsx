import PropTypes from 'prop-types';
import RulerPageItem from './RulerPageItem';

function RulerPageList({ rulers }) {
	return (
		<section className="mt-10">
			<ul>
				{rulers &&
					rulers.map(function (ruler) {
						return (
							<RulerPageItem
								key={ruler._id}
								ruler={ruler}
							/>
						);
					})}
			</ul>
		</section>
	);
}

RulerPageList.propTypes = {
	rulers: PropTypes.array.isRequired,
};
export default RulerPageList;
