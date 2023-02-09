import Star from '../Star';
import PropTypes from 'prop-types';
import './index.css';

function Stars({ count }) {
    const star = [];

    for (let i = 1; i <= count; i++) {
        star.push(
            <li key={i}>
                <Star />
            </li>
        );
    }

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
