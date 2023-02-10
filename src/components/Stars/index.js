import Star from '../Star';
import PropTypes from 'prop-types';
import './index.css';

function Stars({ count }) {
    const star = Array(count)
        .fill()
        .map((_, idx) => (
            <li key={idx}>
                <Star />
            </li>
        ));

    return (
        count >= 1 &&
        count <= 5 && <ul className="card-body-stars u-clearfix">{star}</ul>
    );
}

Stars.defaultProps = {
    count: 0,
};

Stars.propTypes = {
    count: PropTypes.number,
};

export default Stars;
