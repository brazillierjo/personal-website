import React from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";

export class MainParticles extends React.PureComponent {
    async customInit(engine: Engine): Promise<void> {
        await loadBubblesPreset(engine);
    }

    render() {
        const options = {
            preset: "bubbles",
        };

        return <Particles options={options} init={this.customInit} />;
    }
}
