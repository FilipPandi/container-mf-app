import {Panel} from "primereact/panel";
import {Button} from "primereact/button";
import Link from "next/link";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function ComponentPublic() {
    return (
        <div style={{margin: '5%'}}>
            <Panel header="Routing public" className="custom-panel">
                Ovo je routing public komponenta....

                <div style={{paddingTop: "2%"}}></div>

                <h2><Link prefetch={true} className={"link"} href="/"><Button severity="secondary"
                                                                              icon="pi pi-angle-double-left"
                                                                              label={"Back"}/></Link></h2>
            </Panel>
        </div>
    );
}
