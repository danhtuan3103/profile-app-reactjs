import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './OverLay.module.scss';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function OverLay({ handleClose = defaultFn, children, className }) {
    const classes = cx('overlay', {
        [className]: className,
    });
    return (
        <div className={classes} onClick={handleClose}>
            {children}
        </div>
    );
}

OverLay.propTypes = {
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
};
export default OverLay;
