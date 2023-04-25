import React, {useCallback, useState} from "react";
import {Button} from "primereact/button";
import CallbackHookChild from "@/pages/components/callback/CallbackHookChild";

//It is used when we need to return the whole function! (useMemo hook returns just data)
export default function CallbackHookParent() {
    const [count, setCount] = useState(1);
    const [text, setText] = useState("This is a text Parent passed!");

    const callbackFunction = useCallback((title) => {
        return text + " " + title;
    }, [text]);


    return (
        <React.Fragment>
            <div style={{margin: '4%'}}>
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
