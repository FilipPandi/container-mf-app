import React from "react";
import MicroFrontend from "@/pages/Microfrontends";

function Private() {
    const host = "http://localhost:3003"

    return (
        <div>
            <MicroFrontend host={host} name="Child3"/>
        </div>
    );
}

export default Private;
