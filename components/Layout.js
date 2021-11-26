import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

export default function Layout({children}) {
    return (
        <div>
        <Head>
        <title>Nestor Mosquera</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'></link>
        </Head>
        <Header />
        {children}
        <Footer />
      </div>
    )
}
