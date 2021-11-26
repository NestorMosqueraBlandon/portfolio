import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img className={styles.logo} src="./img/logo.jpg" alt="" />
            </div>
            <div className={styles.menu}>
            <i className='bx bx-menu'></i>
            </div>
        </header>
    )
}
