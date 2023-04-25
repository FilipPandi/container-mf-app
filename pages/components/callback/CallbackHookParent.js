import React, {useCallback, useState} from "react";
import {Button} from "primereact/button";
import CallbackHookChild from "@/pages/components/callback/CallbackHookChild";
import Link from "next/link";

//It is used when we need to return the whole function! (useMemo hook returns just data)

//useMemo or useCallback itself requires memory so if we are trying to over-optimize by memoizing every function, it might slow the application down.
//We should also not use useMemo when the function returns a primitive value, such as a boolean or a string.
export default function CallbackHookParent() {
    const [count, setCount] = useState(1);
    const [text, setText] = useState("This is a text Parent passed!");

    const callbackFunction = useCallback((title) => {
        return text + " " + title;
    }, [text]);

    return (
        <React.Fragment>
            <div style={{margin: '4%'}}>
                <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                               icon="pi pi-angle-double-left"
                                                                               label={"Back"}/></Link></h2>
                <div style={{padding: "10px"}}></div>

                <CallbackHookChild callbackFunction={callbackFunction}></CallbackHookChild>

                <Button label={"+ Count"} onClick={() => {
                    setCount(count + 1)
                }}/>

                <div style={{padding: '10px'}}></div>
                {count}
            </div>
        </React.Fragment>
    );
}
