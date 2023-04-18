import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Link from "next/link";
import {Button} from "primereact/button";

function Public() {
    return (
        <div style={{margin: '5%'}}>
            <Panel header="Ovo je Javni dio" className="custom-panel">
                Javni dio!
                <br/>
                <h2><Link prefetch={true} className={"link"} href="/components/componentPublic"><Button
                    severity="secondary" icon="pi pi-desktop" label={"Component Public - LINK Routing NextJs"}/></Link>
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

