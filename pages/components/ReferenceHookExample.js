import React, {useRef} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import Link from "next/link";

// Used to control specific DOM element.
export default function ReferenceHookExample() {
    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
        inputRef.current.value = "";
    };

    return (
        <div style={{margin: '4%'}}>
            <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                           icon="pi pi-angle-double-left"
                                                                           label={"Back"}/></Link></h2>
            <div className="row">
             <span className="p-float-label">
                <InputText id="text" ref={inputRef}/>
                <label htmlFor="text">Text</label>
             </span>

                <Button style={{position: "absolute", marginLeft: "300px"}} label={"Change Text"}
                        onClick={onClick}></Button>

            </div>
        </div>
    );

}
