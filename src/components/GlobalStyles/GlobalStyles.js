import classNames from 'classnames/bind';
import styles from './GlobalStyles.module.scss';

const cx = classNames.bind(styles);
function GlobalStyles({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>{children}</div>
        </div>
    );
}

export default GlobalStyles;
