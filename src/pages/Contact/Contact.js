import { useState } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import uniqid from 'uniqid';

import Button from '~/components/Button';
import styles from './Contact.module.scss';
import { socials } from '~/assets/data/socials';
const cx = classNames.bind(styles);

function Contact() {
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        question: '',
    });

    console.log(state);

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

                    const text = newErr.reduce((init, cur) => init + `${cur}\n`, '');

                    alert(text);
                    return;
                }
                console.log(res);
                setState({
                    firstname: '',
                    lastname: '',
                    email: '',
                    question: '',
                });
                alert('Send question succeesfully');
            })
            .catch((err) => {
                console.log(err);
                alert('Send question failary');
            });
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
        </div>
    );
}

export default Contact;
