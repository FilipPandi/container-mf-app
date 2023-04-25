import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Link from "next/link";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import axios from "axios";

const url = "http://localhost:8081"
const prefixText = "/text";

function Public({allTexts}) {
    return (
        <React.Fragment>
            <Panel style={{margin: '4%'}} header="Ovo je Javni dio" className="custom-panel">
                <div style={{padding: "10px"}}>
                    <h3>Podaci sa servera (http://localhost:8081/text/getAllText): </h3>

                    <DataTable value={allTexts} paginator rows={3} rowsPerPageOptions={[5, 10, 25, 50]}
                               tableStyle={{minWidth: '50rem'}}>
                        <Column field="id" header="ID" style={{width: '33%'}}></Column>
                        <Column field="text" header="Text" style={{width: '33%'}}></Column>
                        <Column field="textType" header="Text Type" style={{width: '33%'}}></Column>
                    </DataTable>

                </div>

                <br/>

                <div className="row">
                    <h2><Link className={"link"} href="/components/editor/MainEditor"><Button
                        severity="secondary" icon="pi pi-spin pi-cog" label={"Add Text - LINK Routing NextJs"}/></Link>
                    </h2>

                    <h2><Link className={"link"} href="/components/ImageExample"><Button
                        severity="secondary" icon="pi pi-spin pi-cog" label={"Image Examples"}/></Link>
                    </h2>
                </div>

                <div style={{padding: "10px"}}></div>
                <div className="row">
                    <h2><Link className={"link"} href="/components/ReducerHookExample"><Button
                        severity="secondary" icon="pi pi-spin pi-cog" label={"Reducer Hook"}/></Link>
                    </h2>

                    <h2><Link className={"link"} href="/components/ReferenceHookExample"><Button
                        severity="secondary" icon="pi pi-spin pi-cog" label={"Reference Hook"}/></Link>
                    </h2>

                    <h2><Link className={"link"} href="/components/EffectAndLayoutEffectHookExample"><Button
                        severity="secondary" icon="pi pi-spin pi-cog" label={"Effect/Layout Effect Hooks"}/></Link>
                    </h2>

                    <h2><Link className={"link"} href="/components/imperative/ImperativeHookParent"><Button
                        severity="secondary" icon="pi pi-spin pi-cog" label={"Imperative Hook"}/></Link>
                    </h2>

                    <h2><Link className={"link"} href="/components/callback/CallbackHookParent"><Button
                        severity="secondary" icon="pi pi-spin pi-cog" label={"Callback Hook"}/></Link>
                    </h2>
                </div>
            </Panel>
        </React.Fragment>
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

export default Public;

