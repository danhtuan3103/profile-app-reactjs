import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Banking.module.scss';
import Bank from '~/components/Bank';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const BANK_LIST = [
    {
        image: images.woori,
        name: 'Woori',
        bankNumber: '1002560243677',
        href: 'https://www.wooribank.com/',
    },
    {
        image: images.shinhan,
        name: 'Shinhan',
        bankNumber: '110525796054',
        href: 'https://www.shinhan.com/index.jsp',
        color: '#7A8FE082',
    },
    {
        image: images.woori,
        name: 'Woori Supper Bank',
        bankNumber: '1002461507728',
        href: 'https://www.wooribank.com/',
        color: '#C853C082',
    },
    {
        image: images.nonghuyp,
        name: 'Nonhyup',
        bankNumber: '3021517570711',
        href: 'https://banking.nonghyup.com/',
        color: '#079C7982',
    },
];
function Banking() {
    console.log('re-render Banking');
    const [index, setIndex] = useState(0);
    const [isCopied, setIsCopied] = useState(false);

    let bank = BANK_LIST[index];

    const handleClickPrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(BANK_LIST.length - 1);
        }
    };

    const handleClickNext = () => {
        if (index < BANK_LIST.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(bank.bankNumber)
            .then(() => {
                // If successful, update the isCopied state value
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className={cx('wrapper')}>
            <Bank img={bank.image} name={bank.name} bankNumber={bank.bankNumber} href={bank.href} color={bank.color} />

            <div className={cx('control')}>
                <div className={cx('left-icon')} onClick={handleClickPrevious}>
                    <FontAwesomeIcon icon={faCaretLeft} />
                </div>
                <Button className={cx('btn')} small onClick={handleCopyClick}>
                    {isCopied ? 'Copied!' : 'Copy'}
                </Button>
                <div className={cx('right-icon')} onClick={handleClickNext}>
                    <FontAwesomeIcon icon={faCaretRight} />
                </div>
            </div>
        </div>
    );
}

export default Banking;
