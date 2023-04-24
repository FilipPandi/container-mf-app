import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import axios from "axios";
import {Toast} from "primereact/toast";
import {Button} from "primereact/button";
import Link from "next/link";


export default function EffectAndLayoutEffectHookExample() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);

    const url = "http://localhost:8081"
    const prefixText = "/text";
    const toastRef = useRef();

    const resTexts = axios.get(url + prefixText + "/getAllText");

    //Use effect is run after everything is loaded.
    //Example without array of all states that function is supposed to listen to
    useEffect(() => {
        console.log('USE EFFECT!!');
        if (resTexts) {
            resTexts.then(value => {
                setData1(value.data);
            });
        }

        console.log("NO ARRAY");
        setCount1(count1 + 1);
        toastRef.current.show({
            severity: 'info',
            summery: 'error',
            detail: 'Hook useEffect WITHOUT array of states - count: ' + count1
        });
    }, [count3]);

    //Example with ARRAY of states for function to listen to.
    useEffect(() => {
        if (resTexts) {
            resTexts.then(value => {
                setData2(value.data);
            });
        }
        console.log("ARRAY");

        setCount2(count2 + 1);

        toastRef.current.show({
            severity: 'info',
            summery: 'error',
            detail: 'Hook useEffect WITH array of states - count: ' + count2
        });
    }, []);


    //Use layout effect will run first - always
    useLayoutEffect(() => {
        console.log('USE LAYOUT EFFECT!!');
    }, [count3]);

    const clickButton = () => {
        setCount3(count3 + 1);
        console.log("Count3: " + count3)
    };

    setTimeout(() => {
        if (toastRef && toastRef.current) {
            toastRef.current.clear();
        }
    }, 1000);

    return (
        <React.Fragment>
            <div style={{margin: '4%'}}>
                <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                               icon="pi pi-angle-double-left"
                                                                               label={"Back"}/></Link></h2>


                <Toast ref={toastRef}/>
                <h1>DATA 1: </h1>
                {data1.map((data1Res) => (
                    <li key={data1Res.id}>{data1Res.text} - {data1Res.textType}</li>
                ))}
                <h1>DATA 2: </h1>
                {data2.map((data2Res) => (
                    <li key={data2Res.id}>{data2Res.text} - {data2Res.textType}</li>
                ))}

                <div style={{padding: "10px"}}></div>
                <Button label={"+"} onClick={clickButton}></Button>

            </div>

        </React.Fragment>

    );
}
