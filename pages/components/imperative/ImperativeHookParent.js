import React, {useRef} from "react";
import {Button} from "primereact/button";
import ImperativeHookChild from "@/pages/components/imperative/ImperativeHookChild";
import Link from "next/link";

export default function ImperativeHookParent() {
    const showTextButtonRef = useRef(null);

    return (
        <div style={{margin: '4%'}}>
            <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                           icon="pi pi-angle-double-left"
                                                                           label={"Back"}/></Link></h2>
            <div style={{padding: "10px"}}></div>

            <div className="row">
                <Button style={{marginRight: "100px"}} onClick={() => {
                    showTextButtonRef.current.showText()
                }} label={"PARENT BUTTON"}></Button>
            </div>

            <div style={{padding: "10px"}}></div>

            <ImperativeHookChild ref={showTextButtonRef}/>
        </div>
    )
}
