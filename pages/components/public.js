import MicroFrontend from "@/pages/Microfrontends";
import React from "react";

function Public() {
    const host = "http://localhost:3001"

    return (
        <div>
            <MicroFrontend host={host} name="Child1"/>
        </div>
    );
}

export default Public;
