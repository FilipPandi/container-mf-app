import React from "react";
import MicroFrontend, {unmount} from "@/pages/Microfrontends";

function Private() {
    const host = "http://localhost:3003"
    const applicationName = "Child3";

    unmount(applicationName);

    return (
        <div>
            <MicroFrontend host={host} name={applicationName}/>
        </div>
    );
}

export default Private;
