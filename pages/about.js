import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'
import About from '../styles/About.module.css'
import { useState } from "react";

export default function about() {

    const frontend = [{
        name: 'ReactJs',
        icon: 'https://api.iconify.design/akar-icons/react-fill.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'NextJs',
        icon: 'https://api.iconify.design/logos/nextjs.svg',
        invert: 'true',
        width: '50px',
    },
    {
        name: 'Flutter',
        icon: 'https://api.iconify.design/bx/bxl-flutter.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'Electron',
        icon: 'https://api.iconify.design/cib/electron.svg',
        invert: 'true',
        width: '30px',
    },

    ]


    const backend = [{
        name: 'NodeJs',
        icon: 'https://api.iconify.design/bx/bxl-nodejs.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'Php',
        icon: 'https://api.iconify.design/bx/bxl-php.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'C#',
        icon: 'https://api.iconify.design/teenyicons/c-sharp-solid.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'Python',
        icon: 'https://api.iconify.design/akar-icons/python-fill.svg',
        invert: 'true',
        width: '30px',
    },

    ]


    const database = [{
        name: 'MySQL',
        icon: 'https://api.iconify.design/fontisto/mysql.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'MongoDB',
        icon: 'https://api.iconify.design/cib/mongodb.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'MariaDB',
        icon: 'https://api.iconify.design/simple-icons/mariadb.svg',
        invert: 'true',
        width: '30px',
    },
    {
        name: 'PostgreSQL',
        icon: 'https://api.iconify.design/simple-icons/postgresql.svg',
        invert: 'true',
        width: '30px',
    },

    ]


    const [techState, setTechState] = useState("d")

    return (
        <Layout>
            <main>
                <section className={styles.section}>
                    <h2>My Flow</h2>
                    <div className={About.flow}>
                        <button>
                            <span>1</span>
                            <p>RESEARCH</p>
                        </button>
                        <button>
                            <span>2</span>
                            <p>DESIGN</p>
                        </button>
                        <button>
                            <span>3</span>
                            <p>DEVELOPMENT</p>
                        </button>
                        <button>
                            <span>4</span>
                            <p>TESTING</p>
                        </button>
                        <button>
                            <span>5</span>
                            <p>LAUNCH</p>
                        </button>
                        <button>
                            <span>6</span>
                            <p>SUPPORT</p>
                        </button>

                    </div>

                </section>
                <section className={styles.section}>
                    <h2>Technologies</h2>
                    <div>
                        <div className={About.buttons}>
                            <button className={techState == "f"? About.techActive : ""} onClick={() => setTechState("f")} >FRONTEND</button>
                            <button className={techState == "b"? About.techActive : ""} onClick={() => setTechState("b")} >BACKEND</button>
                            <button className={techState == "d"? About.techActive : ""} onClick={() => setTechState("d")} >DATABASE</button>
                        </div>
                        <div className={About.technologies}>
                            {techState == "f" ?
                                (
                                    <>
                                        {frontend.map((t) => (
                                            <div key={t.name} className={About.technologieItem}>
                                                <img src={t.icon} className={t.invert ? About.invert : ""} width={t.width} alt="" />
                                                <span>{t.name}</span>
                                            </div>
                                        ))}
                                    </>
                                )

                                : techState == "b" ? (
                                    <>
                                        {backend.map((t) => (
                                            <div key={t.name} className={About.technologieItem}>
                                                <img src={t.icon} className={t.invert ? About.invert : ""} width={t.width} alt="" />
                                                <span>{t.name}</span>
                                            </div>
                                        ))}
                                    </>
                                )
                                    :
                                    <>
                                        {database.map((t) => (
                                            <div key={t.name} className={About.technologieItem}>
                                                <img src={t.icon} className={t.invert ? About.invert : ""} width={t.width} alt="" />
                                                <span>{t.name}</span>
                                            </div>
                                        ))}
                                    </>
                            }

                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}
