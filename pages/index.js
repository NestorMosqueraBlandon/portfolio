import Image from 'next/image'
import BlogItem from '../components/BlogItem'
import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <main className={styles.container}>
        <h1>
        I&apos;m a seasoned web development expert with a knack for UX design.
        </h1>
        <p>Over the last decade I helped several companies take their complex products from concept to market delivery. I can help you do the same.</p>
        <div className={styles.logos}>
        </div>
        
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
          {/* <h2>Blog</h2> */}
          <div className={styles.blogSection}>
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />  
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />  
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />            
            <BlogItem title="How to check the website before releasing it"  category="Agency" image="./img/blog.png" />  

          </div>

        </section>

        <section className={styles.section}>
          <h2>Hire me if you need...</h2>
          <div className={styles.hire}>
            <h4>⏳ A self-managing contributor who won&apos;t waste your time</h4>
            <p>I&apos;ve worked as an independent contractor since the beginning of my career and I don&apos;t need constant hand-holding in order to be productive. I know when to make decisions independently and when to ask for additional information or help.</p>
            <h4>⛵️ To ship a polished product with minimal overhead</h4>
            <p>To ship the first version of your product, you don&apos;t need to spend months assembling a team of developers. Such strategy often introduces massive management overhead, slows you down, and if you&apos;re not an experienced manager — leaves you with disappointing results.</p>
            <p>I&apos;ve proven my ability to ship products by myself, or with another back-end developer when met with complexity that warrants an additional hire. You don&apos;t need to spend resources on a designer either. I will design your product on the fly and still produce admirable results.</p>
            <h4>😌 To reduce risks associated with hiring someone</h4>
            <p>When dealing with agencies clients often end up being locked into rigid contracts. I prefer signing a simple, flexible contract which you can terminate at any point. It shouldn&apos;t come to that though, as I haven&apos;t been fired yet (knock on wood 🌲).</p>
            <p>If you&apos;re a non-technical person, feel free to bring in another consultant to periodically check-in on my work. It&apos;s completely fine by me and it might bring you additional confidence.</p>
          </div>
          

        </section>

      </main>
    </Layout>
  )
}
