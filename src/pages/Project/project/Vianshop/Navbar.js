import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Vianshop.module.scss';

const cx = classNames.bind(styles);

function Navbar({ onClick }) {
    return (
        <div className={cx('navbar')}>
            <div className={cx('menu')} onClick={onClick}>
                <p>Men</p>
                <p>Women</p>
            </div>
            <h3 onClick={onClick}>VianShop</h3>
            <div className={cx('menu')} onClick={onClick}>
                <p>Login</p>
                <p>Register</p>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    onClick: PropTypes.func,
};
export default Navbar;
