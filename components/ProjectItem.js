import styles from '../styles/Project.module.css'
import Link from "next/link"

export default function ProjectItem({image, tags, title, link, tech, invert}) {
    return (
        <div className={styles.projectItem}>
            <div className={styles.projectImage}>
                <div className={styles.picture}>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className={styles.projectText}>
                <p>{tags}</p>
                <h3>{title}</h3>
                <Link href="/"><a>VIEW PROJECT</a></Link>
                <div className={styles.technologies}>
                {tech.map((t) => (
                    <div key={t.name} className={styles.technologieItem}>
                    <img src={t.icon} className={invert? styles.invert : ""} width={t.width} alt="" />
                    <span>{t.name}</span>
                    </div>
                ))}
                </div>

            </div>
        </div>
    )
}
