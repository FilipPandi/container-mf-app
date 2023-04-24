import React, {useReducer} from "react";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import Link from "next/link";


const reducer = (state, action) => {
    switch (action.type) {
        case "SHOW":
            return {show: !state.show, write: state.write};
        case "WRITE":
            return {show: true};
        default:
            return state;
    }
};

export default function ReducerHookExample() {

    //Use when we have more than one action to do!
    const [state, dispatch] = useReducer(reducer, {show: true, write: ""});
    return (
        <div style={{margin: '4%'}}>
            <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                           icon="pi pi-angle-double-left"
                                                                           label={"Back"}/></Link></h2>

            <div className="row">

                {state.show && <InputText id="text" value={state.write} onChange={(e) => {
                    dispatch({type: "WRITE"});
                    state.write = e.target.value;
                }}/>}


                <Button style={{position: "absolute", marginLeft: "300px"}} label={"Toggle show"} onClick={() => {
                    dispatch({type: "SHOW"});
                }}></Button>
            </div>
            <div style={{margin: '4%'}}>{state.show && <p>{state.write}</p>}</div>
        </div>
    );
}
