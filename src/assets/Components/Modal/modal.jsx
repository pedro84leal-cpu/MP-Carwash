import styles from './modal.module.css'

function Modal({ children, onClose }) {
    return (
        <>
        <div className={styles.overlay} onClick={onClose} />
            <div className={styles.modal}>
                {children}
            </div>
        </>
    )
}

export default Modal