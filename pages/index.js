import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <header>
                <link rel="prerender" href="http://localhost:3002"/>
            </header>
            <Head>
                <title>MicroFrontend Container Root</title>
            </Head>
        </div>
    );
}

