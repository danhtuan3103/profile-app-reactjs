import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, color, onClick }) {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} onClick={onClick}>
            <span style={{ color: color }} className={cx('icon')}>
                {icon}
            </span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
