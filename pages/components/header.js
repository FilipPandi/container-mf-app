import React, {useState} from "react";
import {Panel} from "primereact/panel";

import {TabMenu} from "primereact/tabmenu";

function Header() {
    const [activeIndex, setActiveIndex] = useState(3);
    const items = [
        {label: 'Javni dio', icon: 'pi pi-fw pi-home', url: '/components/public'},
        {label: 'CMS dio', icon: 'pi pi-fw pi-cog', url: '/components/cms'},
        {label: 'Privatni dio', icon: 'pi pi-fw pi-pencil', url: '/components/private'},
    ];

    return (
        <div style={{margin: '2%'}}>
            <Panel header="Header" className="custom-panel">

                <h2>Ovo je MicroFrontend aplikacija!</h2>

                <div style={{padding: '10px'}}></div>
                <div className="card">
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}/>
                </div>
            </Panel>
        </div>

    );
}
export default Header;

