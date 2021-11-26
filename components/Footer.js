import styles from '../styles/Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <section className={styles.specialSection}>
                <h2>Ready to discuss <span> your project? </span></h2>
                <Link href=""><a>CONTACT ME</a></Link>
            </section>
            <footer className={styles.footer}>

                <div className={styles.footerContent}>
                    <div>
                        <h3>CONTACTS</h3>
                        <p>+57 3207768205</p>
                        <p>Colombia, Medellin</p>
                    </div>
                    <div>
                        <h3>ENQUIRES</h3>
                        <p>mail@nestormosquera.co</p>
                    </div>
                </div>

                <div>
                    <ul className={styles.networks}>
                        <li><i className='bx bxl-github'></i></li>
                        <li><i className='bx bxl-instagram' ></i></li>
                    </ul>
                    <p className={styles.copy}>&copy; Nestor Mosquera. All rights reserved </p>
                </div>
            </footer>
        </>
    )
}
