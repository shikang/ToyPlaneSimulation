import React, { useCallback, useEffect } from "react";
//import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Simulation() {
    const { unityProvider, addEventListener, removeEventListener } = useUnityContext({
    //const { unityProvider } = useUnityContext({
        // local
        loaderUrl: "ToyPlaneSimulationWeb/sim/sim.loader.js",
        dataUrl: "ToyPlaneSimulationWeb/sim/sim.data",
        frameworkUrl: "ToyPlaneSimulationWeb/sim/sim.framework.js",
        codeUrl: "ToyPlaneSimulationWeb/sim/sim.wasm",

        // prod
        /*
        loaderUrl: "sim/sim.loader.js",
        dataUrl: "sim/sim.data",
        frameworkUrl: "sim/sim.framework.js",
        codeUrl: "sim/sim.wasm",
        */
    });

    const handleSendParams = useCallback(() => {
        console.log('handleSendParams')
    }, []);

    useEffect(() => {
        addEventListener("PingForParams", handleSendParams);
        return () => {
            removeEventListener("PingForParams", handleSendParams);
        };
    }, [addEventListener, removeEventListener, handleSendParams]);
    
    return (
        <Unity
            style={{
                width: "90%",
                justifySelf: "center",
                alignSelf: "center",
            }}
            unityProvider={unityProvider}
        />
    );
}

export default Simulation;