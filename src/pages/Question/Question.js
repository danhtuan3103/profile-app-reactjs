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
    return (
        <div className={cx('wrapper')}>
            {questions.map((question) => {
                return (
                    <div className={cx('info-frame')} key={question.id}>
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
