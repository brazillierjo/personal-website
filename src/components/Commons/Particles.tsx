import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";

export default class MyParticles extends React.PureComponent {
    async customInit(engine: Engine): Promise<void> {
        await loadBubblesPreset(engine);
    }

    render() {
        const options = {
            preset: "bubbles",
            background: {
                color: {
                    value: "#f3f4f6",
                },
            },
        };

        return <Particles options={options} init={this.customInit} />;
    }
}
