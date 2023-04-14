import React from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function Public() {
    return (
        <div style={{margin: '5%'}}>
            <Panel header="Ovo je Javni dio" className="custom-panel">
                Javni dio!
            </Panel>
        </div>
    );
}

export default Public;
