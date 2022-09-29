import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Question.module.scss';
import axios from 'axios';

const cx = classNames.bind(styles);
function Question() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios
            .get('https://profile-app-node-js.herokuapp.com/')
            .then((response) => setQuestions(response.data))
            .catch((err) => console.log(err));
    }, []);

    const handleClick = (e) => {
        if (e.target.offsetHeight === 200) {
            e.target.style.height = '100px';
        } else {
            e.target.style.height = '200px';
        }
    };

    return (
        <div className={cx('wrapper')}>
            {questions.map((question) => {
                return (
                    <div className={cx('info-frame')} key={question.id} onClick={handleClick}>
                        <h3 className={cx('name')}>
                            {question.firstname} {question.lastname}
                        </h3>
                        {/* <p className={cx('email')}>{question.email}</p> */}
                        <p className={cx('question')}>{question.question}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Question;
