import React, {useState} from "react";
import {Panel} from "primereact/panel";

import {TabMenu} from "primereact/tabmenu";
import Link from "next/link";
import {useRouter} from "next/router";

function Header({children}) {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(3);

    const items = [
        {label: 'Javni dio', icon: 'pi pi-fw pi-home', to: '/components/public'},
        {label: 'CMS dio', icon: 'pi pi-fw pi-cog', to: '/components/cms'},
        {label: 'Privatni dio', icon: 'pi pi-fw pi-pencil', to: '/components/private'},
    ].map(item => ({...item, to: <Link href={item.to}>{item.label}</Link>}));

    const handleChange = (event) => {
        setActiveIndex(event.index);
        router.push(event.value.to.props.href).catch((e) => {
            console.log(e)
        });
    };

    return (
        <React.Fragment>
            <Panel style={{margin: '2%'}} header="Header" className="custom-panel">

                <h2>Ovo je MicroFrontend aplikacija!</h2>

                <div style={{padding: '10px'}}></div>
                <div className="card">
                    <TabMenu model={items} children={children} activeIndex={activeIndex} onTabChange={(e) => {
                        handleChange(e)
                    }}/>
                </div>
            </Panel>
        </React.Fragment>

    );
}
export default Header;

