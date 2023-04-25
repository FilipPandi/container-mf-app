import 'styles/globals.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Layout from "@/pages/layout";
import React, {createContext, useEffect} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import {TextModel} from "@/api/model/TextModel";

async function getAllText() {
    let allTexts = [];

    const url = "http://localhost:8081"
    const prefixText = "/text";
    const resTexts = await axios.get(url + prefixText + "/getAllText");

    if (resTexts) {
        await resTexts.data.forEach(response => {
            allTexts.push(new TextModel(
                response.id,
                response.text,
                response.textType
            ));
        });
    }

    return allTexts;
}

export const SharedContext = createContext(getAllText());

export default function App({Component, pageProps}) {
    const router = useRouter();

    useEffect(() => {
        if (router.asPath !== '/') {
            router.replace('/').catch((e) => {
                console.log(e)
            });
        }
    }, []);

    console.log(typeof window !== 'undefined' ? "DYNAMIC LOAD - COMPONENT NAME: " + Component.name : "SSR LOAD - COMPONENT NAME: " + Component.name);

    return (
        <React.Fragment>
            <SharedContext.Provider value={getAllText()}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SharedContext.Provider>
        </React.Fragment>
    );
}

