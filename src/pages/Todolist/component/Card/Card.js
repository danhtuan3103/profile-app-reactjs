import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ImAttachment } from 'react-icons/im';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Card.module.scss';

const cx = classNames.bind(styles);
function Card({ id, title, description, className, color = '#fff' }) {
    return (
        <div className={cx('wrapper', { [className]: className })} style={{ backgroundColor: color }}>
            <div className={cx('header')}>
                <span className={cx('dot')}></span>

                <h3 className={cx('title')}>{title}</h3>
                <Tippy
                    interactive
                    offset={[0, 0]}
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            <p>See detail</p>
                            <p>Delete</p>
                            <p>Move</p>
                        </div>
                    )}
                >
                    <span className={cx('gim')}>
                        <ImAttachment />
                    </span>
                </Tippy>
            </div>
            <p className={cx('description')}>{description}</p>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    className: PropTypes.string,
};
export default Card;
