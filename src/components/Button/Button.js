import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, to, href, primary, rounded, whitetext, small, onClick, link, className, ...passprops }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passprops,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {
        [className]: className,
        whitetext,
        primary,
        rounded,
        small,
        link,
    });
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
