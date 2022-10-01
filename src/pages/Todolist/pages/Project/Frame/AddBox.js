import styles from './Frame.module.scss';
import classNames from 'classnames/bind';
import { IoCreateOutline } from 'react-icons/io5';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function AddBox({ handleClose }) {
    return (
        <div className={cx('create-wrapper')}>
            <span className={cx('close-btn')} onClick={handleClose}>
                &#10005;
            </span>
            <div className={cx('content')}>
                <div className={cx('content-header')}>
                    <h3>Create an Project</h3>
                    <span>
                        <IoCreateOutline />
                    </span>
                </div>
                <div className={cx('content-input')}>
                    <input type="text" className={cx('text-input')} placeholder="Title" />
                    <div className={cx('input-block')}>
                        <input type="color" value="#e44232" className={cx('color-input')} placeholder="Title" />

                        <input type="date" className={cx('date-input')} placeholder="Title" />

                        <input type="time" className={cx('time-input')} placeholder="Title" />
                    </div>
                    <textarea className={cx('desc')} placeholder="Description" />
                </div>
                <div className={cx('btn-block')}>
                    <Button className={cx('btn', 'btn-cancel')} small>
                        Cancel
                    </Button>
                    <Button className={cx('btn', 'btn-create')} small primary>
                        Create
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AddBox;
