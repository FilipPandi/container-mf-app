import Header from "@/pages/components/header";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>MicroFrontend Container Root</title>
            </Head>
            <Header></Header>
        </div>
    );
}