import React from "react";
import MicroFrontend, {unmount} from "@/pages/Microfrontends";

function Cms() {
    const host = "http://localhost:3002"
    const applicationName = "Child2";

    unmount(applicationName);

    return (
        <div>
            <MicroFrontend host={host} name={applicationName}/>
        </div>
    );
}

export default Cms;
