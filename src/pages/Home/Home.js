import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import Typed from 'typed.js';

import styles from './Home.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Home() {
    const textRef = useRef();

    useEffect(() => {
        const typed = new Typed(textRef.current, {
            strings: ['Danh Tuan', 'Soongsil university student', 'Front-end developer'], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('intro')}>
                <h2>Hello, </h2>
                <h3>
                    I am a{' '}
                    <strong className={cx('typed-text')} ref={textRef}>
                        Danh Tuan
                    </strong>{' '}
                </h3>

                <p>You can't make an omelet without breaking some eggs</p>
                <div className={cx('check-list')}>
                    <input type="radio" className={cx('checkbox')} defaultChecked={true} />
                    <span>Trust</span>
                    <input type="radio" className={cx('checkbox')} defaultChecked={true} />
                    <span>Result Oriented</span>
                    <input type="radio" className={cx('checkbox')} defaultChecked={true} />
                    <span>Next Level Expert</span>
                </div>

                <div className={cx('btn-block')}>
                    <Button className={cx('btn')} to="/contact">
                        Hire me
                    </Button>
                    <Button className={cx('btn')} to="/project?name=banking">
                        Donate me
                    </Button>
                </div>
            </div>
            <div className={cx('img-block')}>
                <img className={cx('home-img')} src={images.homeImage} alt="home-image" />
            </div>
        </div>
    );
}

export default Home;
