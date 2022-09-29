import { useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import uniqid from 'uniqid';

import Button from '~/components/Button';
import styles from './Contact.module.scss';
import { socials } from '~/assets/data/socials';
import OverLay from '~/components/OverLay';
const cx = classNames.bind(styles);

function Contact() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [text, setText] = useState([]);
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        question: '',
    });

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmmit = () => {
        axios
            .post('https://profile-app-node-js.herokuapp.com/', {
                id: uniqid(),
                ...state,
            })
            .then((res) => {
                if (res.data.error) {
                    const err = res.data.error.slice(28).split(',');

                    const newErr = err.map((er) => {
                        const string = er.trim();
                        const text = string[0].toUpperCase() + string.slice(1);
                        return text;
                    });

                    console.log(newErr);

                    setText(newErr);
                    setShowOverlay(true);
                    return;
                }

                setState({
                    firstname: '',
                    lastname: '',
                    email: '',
                    question: '',
                });
                setText(['Send message successfully']);
                setShowOverlay(true);
            })
            .catch((err) => {
                setText(['Send question failary']);
                setShowOverlay(true);
            });
    };

    const handleClose = (e) => {
        e.preventDefault();
        setShowOverlay(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <h2>Have some question ? 😊</h2>
                <p>Please leave feedback about this site and my project or write your questions for me</p>

                <input
                    type="text"
                    name="firstname"
                    className={cx('input')}
                    placeholder="First name"
                    value={state.firstname}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastname"
                    value={state.lastname}
                    className={cx('input')}
                    placeholder="Last name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    className={cx('input')}
                    placeholder="What is your email address ?"
                    onChange={handleChange}
                />
                <textarea
                    className={cx('textarea')}
                    value={state.question}
                    name="question"
                    placeholder="Your question ..."
                    onChange={handleChange}
                />

                <Button className={cx('btn')} rounded onClick={handleSubmmit}>
                    Send question
                </Button>
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

            {showOverlay && (
                <OverLay className={cx('overlay-over')} handleClose={handleClose}>
                    <div className={cx('modal')}>
                        <div className={cx('modal-header')}>
                            <h4 className={cx('title')}>Notifications</h4>
                            <div className={cx('close-btn-block')}>
                                <span className={cx('close-btn')} onClick={handleClose}>
                                    &#10005;
                                </span>
                            </div>
                        </div>
                        <div className={cx('modal-body')}>
                            {text.map((txt, index) => {
                                return (
                                    <p key={index} className={cx('modal-text')}>
                                        {txt}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </OverLay>
            )}
        </div>
    );
}

export default Contact;
