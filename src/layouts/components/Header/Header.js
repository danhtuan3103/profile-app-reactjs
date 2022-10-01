import { NavLink, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import MobileMenu from '~/layouts/components/Header/MobileMenu';

const cx = classNames.bind(styles);

function Header() {
    const lineRef = useRef();
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const path = window.location.href;

    useEffect(() => {
        const activeElement = document.querySelector('.active');

        const line = lineRef.current;

        line.style.left = activeElement?.offsetWidth + 'px';
        line.style.left = activeElement?.offsetLeft + 'px';
    }, [path]);

    return (
        <header className={cx('wrapper')}>
            <Link to="/" className={cx('logo')}>
                DanhTuan
            </Link>
            <div className={cx('menu')}>
                <NavLink to="/" end className={cx('link-menu')}>
                    Home
                </NavLink>
                <NavLink to="/about" className={cx('link-menu')}>
                    About me
                </NavLink>
                <NavLink to="/project" className={cx('link-menu')}>
                    Project
                </NavLink>
                <NavLink to="/contact" className={cx('link-menu')}>
                    Contact me
                </NavLink>

                <span ref={lineRef} className={cx('line')}></span>
            </div>

            {/* Mobile Memu */}
            {!showMobileMenu && (
                <div
                    className={cx('menu-btn')}
                    onClick={() => {
                        setShowMobileMenu(true);
                    }}
                >
                    <img
                        className={cx('menu-icon')}
                        src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
                        alt="menu"
                    />
                </div>
            )}

            {showMobileMenu && <MobileMenu handleClose={() => setShowMobileMenu(false)} />}
        </header>
    );
}

export default Header;
