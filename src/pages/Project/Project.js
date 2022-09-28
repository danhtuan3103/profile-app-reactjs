import { useState, useEffect } from 'react';

import { Outlet, useSearchParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import images from '~/assets/images';

import Vianshop from './project/Vianshop';
import Banking from './project/Banking';
import OverLay from '~/components/OverLay';
const cx = classNames.bind(styles);

const PROJECT_LIST = [
    { to: 'vianshop', name: 'Vian Shop', component: Vianshop },
    { to: 'banking', name: 'Banking', component: Banking },
];
function Project() {
    console.log('rerender');
    const [searchParams, setSearchParams] = useSearchParams();
    const [project, setProject] = useState(() => {
        const temp = PROJECT_LIST.find((project) => project.to === searchParams.get('name')) || PROJECT_LIST[0];
        return temp;
    });

    const [showPreview, setShowPreview] = useState(false);

    let Project = project.component;

    useEffect(() => {
        setProject(() => {
            const temp = PROJECT_LIST.find((project) => project.to === searchParams.get('name')) || PROJECT_LIST[0];
            return temp;
        });
    }, [setSearchParams]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <img className={cx('avatar')} src={images.avatar} alt="Avatar" onClick={() => setShowPreview(true)} />
                <h3>I'm Danh Tuan</h3>
                <div className={cx('project-list')}>
                    {PROJECT_LIST.map((pro, index) => {
                        return (
                            <p
                                // to={`?name=${pro.to}`}
                                key={index}
                                className={pro.name === project.name ? cx('active') : ''}
                                onClick={() => setSearchParams(`name=${pro.to}`)}
                            >
                                {pro.name}
                            </p>
                        );
                    })}
                </div>
                <Outlet />
            </div>
            <div className={cx('content')}>
                <Project />
            </div>

            {showPreview && (
                <OverLay handleClose={() => setShowPreview(false)}>
                    <div className={cx('modal')}>
                        <span className={cx('close-btn')} onClick={() => setShowPreview(false)}>
                            &#10005;
                        </span>
                        <img className={cx('preview-avatar')} src={images.avatar} alt="avatar" />
                        <p className={cx('description')}>Xin Chao !! </p>
                    </div>
                </OverLay>
            )}
        </div>
    );
}

export default Project;
