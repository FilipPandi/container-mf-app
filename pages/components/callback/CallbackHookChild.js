import React, {useEffect} from "react";

export default function CallbackHookChild({callbackFunction}) {
    useEffect(() => {
        console.log("Called from child");
    }, [callbackFunction]);

    return (
        <React.Fragment>
            <div style={{marginBottom: '2%'}}>
                {callbackFunction("And this is Child part of text!")}
            </div>
        </React.Fragment>
    );
}
