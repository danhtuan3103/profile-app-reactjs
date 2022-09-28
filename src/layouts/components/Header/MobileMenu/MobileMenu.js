import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './MobileMenu.module.scss';
import images from '~/assets/images';
import { socials } from '~/assets/data/socials';

const cx = classNames.bind(styles);

function MobileMenu({ handleClose }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={images.avatar} alt="images" />

                <button className={cx('close-btn')} onClick={handleClose}>
                    &#10005;
                </button>
            </div>

            <div className={cx('menu')}>
                <NavLink to="/" end className={(nav) => cx('nav-link', { active: nav.isActive })} onClick={handleClose}>
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={(nav) => cx('nav-link', { active: nav.isActive })}
                    onClick={handleClose}
                >
                    About me
                </NavLink>
                <NavLink
                    to="/contact"
                    className={(nav) => cx('nav-link', { active: nav.isActive })}
                    onClick={handleClose}
                >
                    Contact me
                </NavLink>
                <NavLink
                    to="/project"
                    className={(nav) => cx('nav-link', { active: nav.isActive })}
                    onClick={handleClose}
                >
                    Project
                </NavLink>
                <NavLink
                    to="/question"
                    className={(nav) => cx('nav-link', { active: nav.isActive })}
                    onClick={handleClose}
                >
                    Questions
                </NavLink>
            </div>
            <div className={cx('socials')}>
                {socials.map((social) => {
                    return (
                        <a className={cx('social')} key={social.name} href={social.path} target="_blank">
                            <img src={social.src} alt={social.name} />
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

export default MobileMenu;
