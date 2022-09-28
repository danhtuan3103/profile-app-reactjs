import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
import images from '~/assets/images';
import { Vietnamese, Korean, English } from './Intro';
const cx = classNames.bind(styles);

function About() {
    const LIST_INTRO = [
        { title: 'English', value: 'English', component: English },
        { title: 'Vietnamses', value: 'Vietnamses', component: Vietnamese },
        { title: 'Korean', value: 'Korean', component: Korean },
    ];

    const [select, setSelect] = useState(LIST_INTRO[1]);

    let Select = select.component;

    const handleSelect = (e) => {
        const selected = LIST_INTRO.find((language) => {
            return language.value === e.target.value;
        });

        setSelect(selected);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-block')}>
                <img className={cx('img')} src={images.groom} alt="groom" />
            </div>

            <div className={cx('text-block')}>
                <div className={cx('selection-chooose')}>
                    <label className={cx('label')} label="language">
                        Choose a language :{' '}
                    </label>
                    <select className={cx('lan-selection')} name="language" id="language" onChange={handleSelect}>
                        {LIST_INTRO.map((language) => {
                            return (
                                <option key={language.value} value={language.value}>
                                    {language.title}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className={cx('content-wrapper')}>
                    <Select />
                </div>
            </div>
        </div>
    );
}

export default About;
