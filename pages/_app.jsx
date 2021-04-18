import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/global.scss'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <Navbar />
            
            <div className="container-fluid">
                <Component {...pageProps} />
            </div>

            <Footer />
        </>
    )
}
