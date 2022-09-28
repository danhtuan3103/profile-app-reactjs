import styles from './OverLay.module.scss';
import Button from '~/components/Button';
function OverLay({ handleClose, children }) {
    return (
        <div className={styles.overlay} onClick={handleClose}>
            {children}
        </div>
    );
}

export default OverLay;
