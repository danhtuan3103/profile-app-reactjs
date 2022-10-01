import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { BsPlusLg } from 'react-icons/bs';

import styles from './Frame.module.scss';
import OverLay from '~/components/OverLay';
import Card from '~/pages/Todolist/component/Card';
import AddBox from './AddBox';
const cx = classNames.bind(styles);
function Frame({ id, children, title, count = 0, data = [] }) {
    const ref = useRef();

    const [showAll, setShowAll] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const handleResize = () => {
        if (ref.current.style.height === '300px') {
            ref.current.style.height = '100%';
            return;
        }
        ref.current.style.height = '300px';
    };

    const HandleSeeAll = (e) => {
        if (data.length) {
            setShowAll(true);
        }
    };

    const handleClickPlus = (e) => {
        setShowAdd(true);
        console.log(title);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setShowAll(false);
        setShowAdd(false);
    };

    return (
        <div className={cx('frame')} ref={ref}>
            <div className={cx('header')}>
                <div className={cx('title')} onClick={handleResize}>
                    {title}
                </div>
                <Tippy content="See all">
                    <span className={cx('number')} onClick={HandleSeeAll}>
                        {count}
                    </span>
                </Tippy>
            </div>
            <div className={cx('plus')} onClick={handleClickPlus}>
                <BsPlusLg />
            </div>
            <div className={cx('project-wrapper')}>{children}</div>

            {/* See all */}
            {showAll && (
                <OverLay className={cx('seeall-overlay')}>
                    <span className={cx('close-btn')} onClick={handleClose}>
                        &#10005;
                    </span>
                    <div className={cx('container-overlay')}>
                        {data.map((child, index) => (
                            <Card
                                key={index}
                                title={child.title}
                                description={child.description}
                                className={cx('card')}
                            />
                        ))}
                    </div>
                </OverLay>
            )}
            {/* Add block */}
            {showAdd && (
                <OverLay className={cx('addbox-overlay')}>
                    <AddBox handleClose={handleClose} />
                </OverLay>
            )}
        </div>
    );
}

Frame.propsTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};

export default Frame;
