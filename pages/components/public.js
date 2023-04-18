import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Link from "next/link";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

function Public({allTexts}) {
    return (
        <div style={{margin: '2%'}}>
            <Panel header="Ovo je Javni dio" className="custom-panel">
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
                <h2><Link prefetch={true} className={"link"} href="/components/editor/TextEditor"><Button
                    severity="secondary" icon="pi pi-desktop" label={"Add Text - LINK Routing NextJs"}/></Link>
                </h2>
                <hr/>
                <Link prefetch={true} href="http://localhost:3002">3002 PREFETCH</Link>
                <hr/>
                <Link prefetch={false} href="http://localhost:3003">3003</Link>
                <hr/>
            </Panel>
        </div>
    );
}

export default Public;

