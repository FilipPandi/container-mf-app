import React from "react";
import MicroFrontend, {unmount} from "@/pages/Microfrontends";

function Private() {
    const host = "http://localhost:3003"
    const applicationName = "Child3";

    unmount(applicationName);

    return (
        <React.Fragment>
            <MicroFrontend style={{margin: '4%'}} host={host} name={applicationName}/>
        </React.Fragment>
    );
}

export default Private;
