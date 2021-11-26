import styles from "../styles/Blog.module.css"

export default function BlogItem({title, category, image}) {
    return (
        <div className={styles.blogItem}>
            <img src={image} alt="" />
            <div className={styles.content}>

            <p>#{category}</p>
            <h2>{title}</h2>
            </div>

        </div>
    )
}
