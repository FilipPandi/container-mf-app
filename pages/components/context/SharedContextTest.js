import React, {useContext, useState} from "react";
import {SharedContext} from "@/pages/_app";
import Link from "next/link";
import {Button} from "primereact/button";

//Shared context is defined in _app.js on all components.
export default function SharedContextTest() {
    const [sharedDataValues, setSharedDataValues] = useState([]);
    const sharedData = useContext(SharedContext);

    sharedData.then(values => {
        setSharedDataValues(values);
    });

    return (
        <div style={{margin: "4%"}}>
            <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                           icon="pi pi-angle-double-left"
                                                                           label={"Back"}/></Link></h2>
            <div style={{padding: "10px"}}></div>

            {sharedDataValues.map((res) =>
                <React.Fragment key={res.id}>
                    {res.id} - {res.text} - {res.textType}
                    <div style={{padding: "10px"}}></div>
                </React.Fragment>
            )}
        </div>
    );
}
