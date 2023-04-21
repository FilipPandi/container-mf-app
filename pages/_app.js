import 'styles/globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Layout from "@/pages/layout";
import React, {useEffect} from "react";
import {useRouter} from "next/router";

export default function App({Component, pageProps}) {
    const router = useRouter();

    useEffect(() => {
        if (router.asPath !== '/') {
            router.replace('/').catch((e) => {
                console.log(e)
            });
        }
    }, []);

    console.log(typeof window !== 'undefined' ? "DYNAMIC - _app.js" : "SSR- window: - _app.js");

    return (
        <React.Fragment>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </React.Fragment>
    );
}

