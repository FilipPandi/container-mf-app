import Header from "@/pages/components/header";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Head from 'next/head'
import axios from "axios";

const url = "http://localhost:8081"
const prefixText = "/text";
export default function Home({allTexts}) {
    return (
        <div>
            <header>
                <link rel="prerender" href="http://localhost:3002"/>
            </header>
            <Head>
                <title>MicroFrontend Container Root</title>
            </Head>
            <Header allTexts={allTexts}></Header>
        </div>
    );
}

export async function getStaticProps() {
    let allTexts;

    const resTexts = await axios.get(url + prefixText + "/getAllText");

    if (resTexts) {
        allTexts = await resTexts.data;
    }

    return {
        props: {
            allTexts
        }
    }
}
