import React, {useEffect} from "react";

export function unmount(name) {
    const unmountMicroFrontend = () => {
        window[`unmount${name}`] && window[`unmount${name}`](`${name}-container`);
    };

    return unmountMicroFrontend();
}

function MicroFrontend({name, host}) {
    useEffect(() => {
        const scriptId = `micro-frontend-script-${name}`;

        const renderMicroFrontend = () => {
            window[`render${name}`](`${name}-container`);
        };

        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        fetch(`${host}/asset-manifest.json`)
            .then((res) => res.json())
            .then((manifest) => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest.files["main.js"]}`;
                script.onload = () => {
                    renderMicroFrontend();
                };
                document.head.appendChild(script);
            });

        return () => {
            unmount(name);
        };
    });

    return <main id={`${name}-container`} />;
}

export default MicroFrontend;
