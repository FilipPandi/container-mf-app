import React, {useEffect} from "react";

export default function CallbackHookChild({callbackFunction}) {
    let subCallback;

    if ((typeof callbackFunction) === 'function') {
        subCallback = callbackFunction('This is child callback function passed!');
    }

    useEffect(() => {
        console.log("Called from child");
    }, [callbackFunction]);

    return (
        <React.Fragment>
            <div style={{marginBottom: '2%'}}>
                {subCallback}
            </div>
        </React.Fragment>
    );
}
