
export type Content = { contentMD?: string } & { contentHtml?: string }
export type Popup = Content & { title: string, icon: string, autoOpen?: boolean }
export type Hotspot = { coordinates: Vector3, delayMs: number, contentHtml: string }
export type Vector3 = { x: number, y: number, z: number }
export type AnimationSlice = { from: number, to: number }
export type StepIcon = { icon: string } | { iconName: string }

export type StepBase = Content & {
    name: string
    popups?: Popup[]
    focusPointCoordinates: Vector3,
    focalLengthZoomOverride?: number,
    animationPatterns: string[],
    animation: AnimationSlice,
    hotspots?: Hotspot[]
};

export type Step = StepBase & StepIcon & { isSubstep?: false, substeps: string[] }
export type Substep = StepBase & { isSubstep: true }


export const steps: { [key: string]: Step | Substep } = {
    "step4": {
        name: 'Uno Synth Audio Kit',
        "contentHtml": `
            <h4>Step 4.0</h4>
            <p>
                1 x PCB ASX00045
                1 x Resistor 100k Ohm
                1 x Resistor 10 Ohm
                1 x IC LM386
                1 x Capacitors 47nF
                1 x Capacitors Electrolytic 47uF/25v
                1 x Capacitors Electrolytic 220uF/25v
                1 x Cap 100nF
                1 x connectors 6 I/O 
                2 x Connector 8 I/O
                1 x Connector 10 I/O
                6 x Trimmer 10K Ohm

                Follow this order for correct assembly.
            </p>
        `,
        iconName: '4',
        focusPointCoordinates: { x: -3.5, y: 0, z: 2 },
        focalLengthZoomOverride: 28,
        animationPatterns: ['Animation'],
        animation: {
            from: 136,
            to: 136,
        },
        substeps: ['step4.1', 'step4.2', 'step4.3', 'step4.4', 'step4.5', 'step4.6', 'step4.7', 'step4.8', 'step4.9', 'step4.10', 'step4.10.1', 'step4.11', 'step4.12', 'step4.13'],
        popups: [
            {
                title: 'Components',
                icon: 'tool.png',
                autoOpen: true,
                contentHtml: `
                    <img src="Step4.0.1.jpg"/>
                `
            }
        ],
        hotspots: []
    },
    'step4.1': {
        name: '4.1',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.1</h4>
            <p> 
                Now let's mount the 10 Ohm R2 (Brown-Black- Black).
                Place them in the spot labeled R2 10 Ohm. 
                Follow the process in Step 1.3.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.1.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.1.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.1.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.1.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 0, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 136,
            to: 139,
        },
        hotspots: [
            {
                coordinates: { x: -1.2, y: 1, z: 0 },
                contentHtml: '10ohm resistor',
                delayMs: 3500
            }
        ]
    },
    'step4.2': {
        name: '4.2',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.2</h4>
            <p> 
                Now let's mount the 10 Ohm R2 (Brown-Black- Black).
                Place them in the spot labeled R2 10 Ohm. 
                Follow the process in Step 1.3.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.2.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.2.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.2.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 0, z: 1.25 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 139,
            to: 142,
        },
        hotspots: [
            {
                coordinates: { x: -1.75, y: 1, z: 1 },
                contentHtml: '10ohm resistor',
                delayMs: 3500
            }
        ]
    },
    'step4.3': {
        name: '4.3',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.3</h4>
            <p>
                Now let's mount our IC (integrated circuit) Amplifier U1.
                ATTENTION to positioning, on the top side of the integrated we find a sign (half moon see Fig.)
                On the IC and on the Solder to identify Pin 1.
                Position and weld.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.3.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.3.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.3.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 0, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 142,
            to: 144.021,
        },
        hotspots: [
            {
                coordinates: { x: -2.3, y: 1, z: 1.15 },
                contentHtml: 'IC  amplifier',
                delayMs: 2500
            }
        ]
    },
    'step4.4': {
        name: '4.4',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.4</h4>
            <p> 
                Now let's move on to your capacitors, they are 47nF yellow capacitors.
                This capacitor goes to the place on the board labeled C1.

                Solder and cut same Step 1.3
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.4.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.4.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.4.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.4.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 0, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 144.021,
            to: 147.021,
        },
        hotspots: [
            {
                coordinates: { x: -1.3, y: 1, z: 1.7 },
                contentHtml: '47nF capacitator',
                delayMs: 3500
            }
        ]
    },
    'step4.5': {
        name: '4.5',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.5</h4>
            <p> 
                We now solder the electrolytic capacitor C2.
                This capacitor is polarized (47uF / 25V), so on the capacitor we read a negative and positive label,
                on the board we have a positive label, respect the drawing by inserting the positive in the + label.

                Solder and Cut same Step 1.3
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.5.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.5.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.5.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 0, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 147.021,
            to: 150.021,
        },
        hotspots: [
            {
                coordinates: { x: -1.3, y: 1, z: 0.75 },
                contentHtml: '47uF/25V capacitor',
                delayMs: 3500
            }
        ]
    },
    'step4.6': {
        name: '4.6',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.6</h4>
            <p>
            Now we can solder the BLUE 100nF (nanoFarad) capacitors.
            These capacitors go to the place on the board labeled C3.

            Solder and Cut same Step 1.3
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.6.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.6.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step6.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 0, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 150.021,
            to: 153.021,
        },
        hotspots: [
            {
                coordinates: { x: -2.9, y: 1, z: 1.15 },
                contentHtml: '100nF capacitator',
                delayMs: 3500
            }
        ]
    },
    'step4.7': {
        name: '4.7',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.7</h4>
            <p>
                We now solder the electrolytic capacitor C4.
                This capacitor is polarized (220uF / 25V), so on the capacitor we read a negative and positive label, on the board we have a positive label, we respect the drawing by inserting the positive in the + label.
                Here we mount the capacitor horizontally, then we bend the axial (see Photo).
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.7.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.7.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.7.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.7.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 1, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 153.021,
            to: 157.021,
        },
        hotspots: [
            {
                coordinates: { x: -1.3, y: 1, z: 1.3 },
                contentHtml: '220uF/25V capacitor',
                delayMs: 4500
            }
        ]
    },
    'step4.8': {
        name: '4.8',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.8</h4>
            <p>
                Let's now position the trimmers, they are 10K Ohm Trimmers.
                These Trimmers go to the place on the board labeled R3-R4-R5-R6-R7-R8.            
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.8.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.8.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.8.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.8.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -3.5, y: 0, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 157.021,
            to: 168.021,
        },
        hotspots: [
            {
                coordinates: { x: -1.85, y: 1, z: 0 },
                contentHtml: '10Kohm trimmers',
                delayMs: 11500
            },
            {
                coordinates: { x: -1.85, y: 1, z: 2.25 },
                contentHtml: '10Kohm trimmers',
                delayMs: 11500
            }
        ]
    },
    'step4.9': {
        name: '4.9',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.9</h4>
            <p>
                Now we remove our speaker grid, you can simply rotate, insert and screw pin and nut into the holes of the grid.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.9.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.9.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.9.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.9.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.9.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.9.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.9.7.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 1.5, y: 2.5, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 168.021,
            to: 170.021,
        }
    },
    'step4.10': {
        name: '4.10',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.10</h4>
            <p>
                Insert the speaker into the hole holding the cables downwards (see photo). Place the grille on the speaker and screw in the pins.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.10.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.5.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 1.5, y: 0, z: 2 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 170.021,
            to: 172.021,
        }
    },
    'step4.10.1': {
        name: '4.10.1',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.10.1</h4>
            <p>
                Now you can solder the cables on the pads.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.10.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.10.5.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 1.5, y: 0, z: 2 },
        focalLengthZoomOverride: 50,
        animationPatterns: ['Animation'],
        animation: {
            from: 172.021,
            to: 175.021,
        }
    },
    'step4.11': {
        name: '4.11',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.11</h4>
            <p>
                Now we solder the J1-J2-J3-J4 connectors.
                To correctly solder the connectors of the Audio shield, insert the connectors into the sockets of your UNO.
                Now that you have positioned the 4 connectors, insert the BOARD.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.11.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.8.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.9.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 28,
        focusPointCoordinates: { x: -1, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        animation: {
            from: 175.021,
            to: 180.021,
        }
    },
    'step4.11.1': {
        name: '4.11.1',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.11.1</h4>
            <p>
                Start soldering the connectors to the board.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.11.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.8.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.11.9.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 50,
        focusPointCoordinates: { x: -3.5, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        animation: {
            from: 180.021,
            to: 181.021,
        }
    },
    'step4.12': {
        name: '4.12',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.12</h4>
            <p>
                Now we can remove the shield to insert the spacers and pins.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.12.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.12.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.12.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.12.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.12.5.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 28,
        focusPointCoordinates: { x: -1, y: 0, z: 0 },
        animationPatterns: ['Animation'],

        animation: {
            from: 181.021,
            to: 184.042,
        }
    },
    'step4.13': {
        name: '4.13',
        isSubstep: true,
        contentHtml: `
            <h4>Step 4.13</h4>
            <p>
                Now we can insert the knobs, and we are ready to connect the usb-c and load sketch_Audio.
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="step4.13.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.13.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.13.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="step4.13.4.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 28,
        focusPointCoordinates: { x: 1.5, y: 0, z: -1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 184.042,
            to: 188.042,
        },
        hotspots: [
            {
                coordinates: { x: 4, y: 1, z: 1.5 },
                contentHtml: 'Knobs',
                delayMs: 12500
            },
            {
                coordinates: { x: 4, y: 1, z: 1.5 },
                contentHtml: 'Knobs',
                delayMs: 12500
            }
        ]
    },
    "step5": {
        name: 'Final mount',
        isSubstep: false,
        contentHtml: `
            <h4>Step 5.0</h4>
            <p>
            Congratulations, you have completed your Synth Audio Kit.
            </p>
        `,
        iconName: '5',
        focusPointCoordinates: { x: -1, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        animation: {
            from: 188,
            to: 193.021,
        },
        popups: [
            {
                title: 'Final mount',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step5.0.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.8.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.9.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.10.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.1.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 24,
        substeps: ['step5.0.1', 'step5.0.2'],
    },
    'step5.0.1': {
        name: '5.0.1',
        isSubstep: true,
        contentHtml: `
            <h4>Step 5.0.1</h4>
            <p>
                Congratulations, you have completed your Synth Audio Kit.
            </p>
        `,
        popups: [
            {
                title: 'Final mount',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step5.0.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.8.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.9.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.10.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.1.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 24,
        focusPointCoordinates: { x: -1, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        animation: {
            from: 193.021,
            to: 198.021,
        },
        hotspots: []
    },
    'step5.0.2': {
        name: '5.0.2',
        isSubstep: true,
        contentHtml: `
            <h4>Step 5.0.2</h4>
            <p>
                Congratulations, you have completed your Synth Audio Kit.
            </p>
        `,
        popups: [
            {
                title: 'Final mount',
                icon: 'tool.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step5.0.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.8.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.9.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.10.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step5.0.1.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 24,
        focusPointCoordinates: { x: -1, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        animation: {
            from: 198.021,
            to: 203.021,
        },
        hotspots: []
    }
}
