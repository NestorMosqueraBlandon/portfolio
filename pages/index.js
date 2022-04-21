import Image from 'next/image'
import BlogItem from '../components/BlogItem'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <main>
        <h1 className={styles.heroTitle}>Design-driven <span>development of <br /> your</span> web products <br /> <span>for years</span></h1>
        <section className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.projectSection}>

          <ProjectItem tags="Contruction, Building, 3D Printing, CAD"  title="$40 Million Raised by Mighty Buildings in Series B Funding" image="./img/work.png" tech={[{name: "AdobeXD", icon:"https://api.iconify.design/simple-icons/adobexd.svg", width: "30px"},{width:"50px", name: "NextJs", icon: "https://api.iconify.design/logos/nextjs.svg"}, {name: "NodeJs", icon: "https://api.iconify.design/logos/nodejs.svg", width: "50px"} ]} invert="true" />
          <ProjectItem tags="E-commerce, 3D Builder, Esports"  title="Co-creating Innnovation for Esports Apparel Industry Leader" image="./img/work.png" tech={[{name: "AdobeXD", icon:"https://api.iconify.design/simple-icons/adobexd.svg", width: "30px"},{width:"50px", name: "NextJs", icon: "https://api.iconify.design/logos/nextjs.svg"}, {name: "NodeJs", icon: "https://api.iconify.design/logos/nodejs.svg", width: "50px"} ]} invert="true"  />
          <ProjectItem tags="Legal, Privacy, Data, Accounting"  title="Best Usability and Performance by G2 Scoring" image="./img/work.png" tech={[{name: "AdobeXD", icon:"https://api.iconify.design/simple-icons/adobexd.svg", width: "30px"},{width:"50px", name: "NextJs", icon: "https://api.iconify.design/logos/nextjs.svg"}, {name: "NodeJs", icon: "https://api.iconify.design/logos/nodejs.svg", width: "50px"} ]} invert="true"  />
          <ProjectItem tags="B2C, Content Management, SAAS"  title="Tailored B2C Portal for Europe Bibliophile Audience" image="./img/work.png" tech={[{name: "AdobeXD", icon:"https://api.iconify.design/simple-icons/adobexd.svg", width: "30px"},{width:"50px", name: "NextJs", icon: "https://api.iconify.design/logos/nextjs.svg"}, {name: "NodeJs", icon: "https://api.iconify.design/logos/nodejs.svg", width: "50px"} ]} invert="true"  />
          </div>
        </section>
        <section className={styles.section}>
          <h2>Blog</h2>
          <div className={styles.blogSection}>
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />  
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />  
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />            
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />  

          </div>

        </section>

      </main>
    </Layout>
  )
}
