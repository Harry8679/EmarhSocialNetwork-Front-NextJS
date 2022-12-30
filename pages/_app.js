import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Header from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
    <>
        <Header>
            <link rel='stylesheet' href='/css/styles.css' />
        </Header>
        <Navbar />
        <Component {...pageProps} />
    </>
    );
}

export default MyApp;