import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Bank.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCardAlt } from '@fortawesome/free-regular-svg-icons';
import Button from '~/components/Button';
import OverLay from '~/components/OverLay';

const cx = classNames.bind(styles);
function Bank({ name, img, bankNumber, color, href }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const copy = async () => {
        await navigator.clipboard.writeText(bankNumber);
        alert('Text copied');
    };
    return (
        <div className={cx('wrapper')} style={{ backgroundColor: color }}>
            <div className={cx('header')}>
                <span className={cx('chip')}>
                    <FontAwesomeIcon icon={faCreditCardAlt} size="2x" />
                </span>
                <div className={cx('right-text')}></div>
                <span className={cx('text')}>Cookie</span>
            </div>

            <div className={cx('body')} onClick={() => setShowOverlay(true)}>
                <div className={cx('bank-block')}>
                    <img className={cx('bank-img')} src={img} />
                    <h3 className={cx('bank-name')}>{name}</h3>
                </div>
                <div className={cx('user-info')}>
                    <h4 className={cx('user-name')}>NGUYEN DANH TUAN</h4>
                    <p className={cx('bank-number')}>{bankNumber}</p>
                </div>

                <Button href={href} link className={cx('btn')} target="_blank">
                    Go to Bank
                </Button>
            </div>

            <div className={cx('footer')}>
                <img className={cx('master-img')} src={images.master} alt="mastercard" />
                <img className={cx('banking-img')} src={images.banking} alt="banking" />
            </div>

            {showOverlay && (
                <OverLay handleClose={() => setShowOverlay(false)}>
                    <Button whitetext onClick={copy}>
                        Copy
                    </Button>
                </OverLay>
            )}
        </div>
    );
}

export default Bank;
