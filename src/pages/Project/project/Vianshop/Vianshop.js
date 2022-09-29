import { useState, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Vianshop.module.scss';
import Button from '~/components/Button';

import images from '~/assets/images';
import Navbar from './Navbar';
import OverLay from '~/components/OverLay';

const cx = classNames.bind(styles);
function Vianshop() {
    console.log('re-render vianshop');
    const [showOverlay, setShowOverlay] = useState(false);
    const handleClick = () => {
        setShowOverlay(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setShowOverlay(false);
    };

    const handleClickGoToWebsite = (e) => {
        e.preventDefault();
        window.open('https://www.vianshop.store/');
    };
    return (
        <div className={cx('wrapper')}>
            <Navbar onClick={handleClick} />
            <div className={cx('content')}>
                <div className={cx('intro')}>
                    <h2>Hello !! Wellcome to VianShop</h2>
                    <p>
                        VianShop is a place to sell clothes in Korea . Let's choose for yourself a few favorite items.
                    </p>

                    <div className={cx('btn-block')}>
                        <Button primary className={cx('btn', 'btn-primary')} onClick={handleClick}>
                            Shopping
                        </Button>
                        <Button className={cx('btn')} onClick={handleClick}>
                            Login
                        </Button>
                    </div>
                </div>

                <div className={cx('img-block')}>
                    <img onClick={handleClick} className={cx('img')} src={images.vianshop} alt="img" />
                </div>
            </div>

            {showOverlay && (
                <OverLay handleClose={handleClose}>
                    <Button whitetext onClick={handleClickGoToWebsite}>
                        Go to Website
                    </Button>
                </OverLay>
            )}
        </div>
    );
}

export default memo(Vianshop);
