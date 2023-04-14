import React, {Suspense, useState} from "react";
import {Panel} from "primereact/panel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {TabMenu} from "primereact/tabmenu";
import Public from "@/pages/components/public";
import Cms from "@/pages/components/cms";
import Private from "@/pages/components/private";

function Header() {
    const [dynComp, setDynComp] = useState(<div/>);

    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: 'Javni dio', icon: 'pi pi-fw pi-home'},
        {label: 'CMS dio', icon: 'pi pi-fw pi-cog'},
        {label: 'Privatni dio', icon: 'pi pi-fw pi-pencil'},
    ];

    const goTo = (e) => {
        setActiveIndex(e.index);
        console.log(e.index)
        if (e.index === 0) {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Public/>
                </Suspense>
            );
        } else if (e.index === 1) {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Cms/>
                </Suspense>
            );
        } else if (e.index === 2) {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <Private/>
                </Suspense>
            );
        }
    }

    return (
        <div style={{margin: '5%'}}>
            <Panel header="Header" className="custom-panel">

                <div style={{padding: '30px'}}></div>

                <div className="card">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setDynComp(goTo(e))}/>
                </div>
            </Panel>
            {dynComp}
        </div>

    );
}

export default Header;
