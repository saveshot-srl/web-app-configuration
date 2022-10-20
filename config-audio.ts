
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
        name: 'MAKE YOUR SYNTH SHIELD',
        "contentMD": `
            #### Step 4.0
            Place all the components of bag No.3, 4 & 5 on your desk  
        
            To assemble your Synth Shield, you will require the following components:
               - 1 x PCB ASX00045
               - 1 x Resistor 100k Ohm
               - 1 x Resistor 10 Ohm
               - 1 x IC LM386
               - 1 x Capacitor 47nF
               - 1 x Electrolytic Capacitor 47uF/25v
               - 1 x Electrolytic Capacitor 220uF/25v
               - 1 x Cap 100nF
               - 1 x connectors 6 I/O 
               - 2 x Connector 8 I/O
               - 1 x Connector 10 I/O
               - 6 x 10K Ohm Potentiometers

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
        contentMD: `
            #### Step 4.1
                Let's start with the 100kOhm Resistor, that is colour coded brown, black, yellow.
                This resistor goes in the slot labelled R1. 

                ![100kOhm](https://www.datocms-assets.com/79069/1666272143-100kohm.png)

                Place it in position, then solder it to the board.
        
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
        contentMD: `
        #### Step 4.2
        Now let's mount the 10 Ohm Resistor, that is colour coded brown, black, black.

        ![10Ohm](https://www.datocms-assets.com/79069/1666272140-10ohm.png)https://www.datocms-assets.com/79069/1666272140-10ohm.png)

        This resistor goes in R2. 

        Place it in position, then solder it to the board.
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
        contentMD: `
            #### Step 4.3
          
            Grab the LM-386N IC, this is your amplifier chip, and place it in U1. 

            Be careful when positioning it to orient it properly. Just like the atmega328p microcontroller on your UNO board, this amplifier chip has an indented semi circle that you can use to orient it properly.
            
            Align the semi-circle on the chip with the semi-circle on the PCBs drawing.

            Then flip the PCB over and solder the chip to the board.
        
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
        contentMD: `
            #### Step 4.4
                Grab your yellow 47 nF capacitor, and place it in C1.

                Solder it to the board and cut the legs.
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
        contentMD: `
            #### Step 4.5
            
            Now grab the smaller of the electrolytic capacitors (47uF / 25V) and place it in C2. 

            This component is polarized, identify the negative side by the white stripe on the side of the capacitor, and insert it into the hole labelled with a -.

            You can also identify the negative side by its shorter leg. 

            Solder it to the board and cut the legs.
        
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
        contentMD: `
            #### Step 4.6
        
            Grab the blue 100 nF capacitor and place it in C3.

            Solder it to the board and cut the legs.
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
        contentMD: `
            #### Step 4.7
        
                Now let's mount the larger of the electrolytic capacitors (220µf/25V). 

                Follow the same procedure as the smaller electrolytic capacitor to identify the negative side, as this capacitor also is polarized. 

                Once this capacitor is soldered to the board you will want to bend it flush to the PCB. 
                So don't push the component through all the way down to the board, but leave enough of the legs to be able to bend. 

                Solder it to the board, cut the legs, and bend the capacitors legs.
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
        contentMD: `
            #### Step 4.8
            
                Let's now position the potentiometers, a potentiometer can be thought of as a variable resistor. If you turn 
                the shaft on this potentiometer all the way it has a resistance of 10kOhm.

                These potentiometers go in R3, R4, R5, R6, R7, R8.
                
                Put them in position, flip the PCB and solder them to the board.

                You may find it easier to keep them in place if you solder each potentiometer to the board before you put the next one in position.
         
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
                contentHtml: '10Kohm potentiometer',
                delayMs: 11500
            },
            {
                coordinates: { x: -1.85, y: 1, z: 2.25 },
                contentHtml: '10Kohm potentiometer',
                delayMs: 11500
            }
        ]
    },
    'step4.9': {
        name: '4.9',
        isSubstep: true,
        contentMD: `
            #### Step 4.9
            
            Now turn your attention to the speaker grill. Twist it to remove the grill from the PCB. 
            
            Grab two screws, and two nuts and attach them to the opposing holes in the grill.
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
        contentMD: `
            #### Step 4.10

                Grab the speaker, and place it where you just detached the speaker grill from, be sure that the cables from the speaker are fed through to the other side.
                
                Now reattach the grill to the main PCB with 2 more nuts, holding the speaker in place.
            
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
        contentMD: `
            #### Step 4.10.1
            
                Now you can solder the cables on to the pads of the PCB. 
            
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
        contentMD: `
            #### Step 4.11
            
                Grab the pin-headers that go in J1, J2, J3, and J4.

                To make the assembly easier for yourself, insert the pin headers into the UNO board you previously assembled, to keep the pins straight while you're soldering them to the shield.
               
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
        contentMD: `
            #### Step 4.11.1
            
                Solder the pin-headers to the board one by one.
            
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
        contentMD: `
            #### Step 4.12
            
                Now remove the shield from the board again, so you can insert all the spacers and pins.
            
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
        contentMD: `
            #### Step 4.13
        
                Now we can insert the knobs into the potentiometers, and then we are ready to connect a USB-C and upload the test sketch to the UNO. You can find it back on the MAKE YOUR UNO website

                And with that, you have completed the assembly of your Synth Shield! What an achievement!
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
        contentMD: `
            #### Step 5.0
            
            The packaging for this kit also doubles as a housing for your new synth. 

            These instructions will tell you how to mount everything properly.

            Remove the speaker grill and the screws attached to it again.

            Use the screws to attach the grill to the cardboard face.
        
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
        contentMD: `
            <h4>Step 5.0.1</h4>
            <p>
                Detach the knobs from the potentiometers, and remove the shield from the UNO board.

                Mount the shield to the cardboard face using the screws on the speaker grill.
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
                Now reattach the UNO board and place the entire assembly inside of the cardboard box. 

                Reattach the potentiometer knobs and you are all done!

                Well done! Now return to the MAKE YOUR UNO website to learn about the next steps to bring your new synthesizer to life!
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
