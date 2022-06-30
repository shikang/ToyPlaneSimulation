import React, { useCallback, useEffect, useState, useRef } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function Simulation(props) {
    const { unityProvider, addEventListener, removeEventListener, sendMessage } = useUnityContext({
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

    const [sendParamsFlag, setSendParamsFlag] = useState(false)
    const params = useRef(props.params);

    const handlePingForParams = useCallback(() => {
        console.log('handlePingForParams')
        setSendParamsFlag(true)
    }, []);

    useEffect(() => {
        addEventListener("PingForParams", handlePingForParams);
        return () => {
            removeEventListener("PingForParams", handlePingForParams);
        };
    }, [addEventListener, removeEventListener, handlePingForParams]);

    useEffect(() => {
        if (sendParamsFlag) {
            console.log(params)
            sendMessage("StartController", "ReceiveParams", JSON.stringify(params.current));
        }
    }, [sendParamsFlag, params]);

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