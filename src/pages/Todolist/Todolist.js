import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Todolist.module.scss';
import { IoCreateOutline, IoTodayOutline } from 'react-icons/io5';
import { AiOutlineSchedule } from 'react-icons/ai';
import { MdSchedule } from 'react-icons/md';
import { BsCalendar2Month } from 'react-icons/bs';
import { GiOnTarget } from 'react-icons/gi';

import Navbar from './Navbar';
import Menu from './Menu';
import MenuItem from './Menu/MenuIem';
import { Project, Today, Schedule, Dayly, Monthly, Goals } from './pages';
import OverLay from '~/components/OverLay';
const cx = classNames.bind(styles);

const MENU_LIST = [
    { title: 'Schedule', to: '/todolist-app/schedule', icon: AiOutlineSchedule, color: '#23d98d', component: Schedule },
    { title: 'Project', to: '/todolist-app/create', icon: IoCreateOutline, color: '#3d8de3', component: Project },
    { title: 'Today', to: '/todolist-app/today', icon: MdSchedule, color: '#6c23d9', component: Today },
    { title: 'Dayly', to: '/todolist-app/dayly', icon: IoTodayOutline, color: '#d96223', component: Dayly },
    { title: 'Monthly', to: '/todolist-app/monthly', icon: BsCalendar2Month, color: '#81d923', component: Monthly },
    { title: 'Goals', to: '/todolist-app/goals', icon: GiOnTarget, color: '#d923d3', component: Goals },
];
function Todolist() {
    // Change page
    const path = window.location.pathname;
    const [page, setPage] = useState(() => {
        const temp = MENU_LIST.find((page) => page.to === path) || MENU_LIST[0];
        return temp;
    });

    const [showOverlay, setShowOverlay] = useState(false);
    const menuRef = useRef();
    const isPhone = document.documentElement.clientWidth < 739;
    console.log(showOverlay);

    const handleClickMenuIcon = () => {
        if (menuRef.current.style.width === '0px') {
            menuRef.current.style.width = '250px';
            setShowOverlay(true);

            return;
        }
        setShowOverlay(false);
        menuRef.current.style.width = '0px';
    };

    const Page = page.component;

    const handleClickLink = (e) => {
        if (isPhone) {
            setShowOverlay(false);
            menuRef.current.style.width = '0px';
            return;
        } else {
            return;
        }
    };

    useEffect(() => {
        setPage(() => {
            const temp = MENU_LIST.find((page) => page.to === path) || MENU_LIST[0];
            return temp;
        });
    }, [path]);

    return (
        <div className={cx('wrapper')}>
            <Navbar onClickMenuIcon={handleClickMenuIcon} />

            <div className={cx('body')}>
                <Menu ref={menuRef}>
                    {MENU_LIST.map((item, index) => {
                        let Icon = item.icon;
                        return (
                            <MenuItem
                                key={index}
                                title={item.title}
                                to={item.to}
                                icon={<Icon />}
                                color={item.color}
                                onClick={handleClickLink}
                            />
                        );
                    })}
                </Menu>

                <div className={cx('content')}>
                    <Page />
                </div>
            </div>
            {isPhone && showOverlay ? <div className={cx('overlay')} onClick={handleClickMenuIcon}></div> : <></>}
        </div>
    );
}

export default Todolist;
