import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
 <Header />
<Component {...pageProps} />
<Footer />

    </>
  )
  
}

export default MyApp
