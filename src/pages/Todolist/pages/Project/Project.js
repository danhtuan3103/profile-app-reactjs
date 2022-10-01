import classNames from 'classnames/bind';
import styles from './Project.module.scss';

import Frame from './Frame';
import Card from '~/pages/Todolist/component/Card';
const cx = classNames.bind(styles);

function Project() {
    const description =
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  ';

    const PROJECT_LIST = [
        {
            id: 1,
            title: 'To do',
            children: [
                { id: 1, title: 'Design', description: description, color: '#34eba8' },
                { id: 2, title: 'Design', description: description, color: '#22998d' },
                { id: 3, title: 'Design', description: description, color: '#992273' },
                { id: 4, title: 'Design', description: description, color: '#979922' },
                { id: 5, title: 'Design', description: description, color: '#979922' },
                { id: 6, title: 'Design', description: description, color: '#22998d' },
                { id: 7, title: 'Design', description: description, color: '#22998d' },
            ],
        },

        {
            id: 2,
            title: 'In Progress',
            children: [{ id: 7, title: 'Design', description: description, color: '#22998d' }],
        },
        {
            id: 3,
            title: 'Completed',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Projects</h2>
            <div className={cx('projects')}>
                {PROJECT_LIST.map((project, index) => {
                    const children = project.children;
                    return (
                        <Frame
                            key={index}
                            id={project.id}
                            title={project.title}
                            count={project.count}
                            data={project.children}
                        >
                            {children &&
                                children.map((child, index) => (
                                    <Card
                                        key={index}
                                        id={child.id}
                                        title={child.title}
                                        description={child.description}
                                        color={child.color}
                                    />
                                ))}
                        </Frame>
                    );
                })}
            </div>
        </div>
    );
}

export default Project;
