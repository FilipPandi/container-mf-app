import React from "react";
import MicroFrontend from "@/pages/Microfrontends";

function Cms() {
    const host = "http://localhost:3002"

    return (
        <div>
            <MicroFrontend host={host} name="Child2"/>
        </div>
    );
}

export default Cms;
