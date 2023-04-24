import React, {forwardRef, useImperativeHandle, useState} from "react";
import {Button} from "primereact/button";

const ImperativeHookChild = forwardRef((props, ref) => {

    const [showChildText, setChildTextShow] = useState(false);

    useImperativeHandle(ref, () => ({
        showText() {
            setChildTextShow(!showChildText);
        }
    }));

    return (
        <React.Fragment>
            <Button style={{marginRight: "100px"}} label={"CHILD BUTTON"}></Button>

            {showChildText && <h1>THIS IS CHILD TEXT!</h1>}
        </React.Fragment>
    )
});
export default ImperativeHookChild;
