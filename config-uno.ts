
type Content = { contentMD: string } | { contentHtml: string }
type Popup = Content & { title: string, icon: string, autoOpen?: boolean }
type Hotspot = { coordinates: Vector3, delayMs: number, contentHtml: string }
type Vector3 = { x: number, y: number, z: number }
type AnimationSlice = { from: number, to: number }
type StepIcon = { icon: string } | { iconName: string }

type StepBase = Content & {
    name: string
    popups?: Popup[]
    focusPointCoordinates: Vector3,
    focalLengthZoomOverride?: number,
    animationPatterns: string[],
    animation: AnimationSlice,
    hotspots?: Hotspot[]
};

type Step = StepBase & StepIcon & { isSubstep?: false, substeps: string[] }
type Substep = StepBase & { isSubstep: true }

// Hotspot presnti nella scena e loro proprietà
export const steps: { [key: string]: Step | Substep } = {
    "step3": {
        name: 'Make your UNO',
        isSubstep: false,
        contentMD:`
        #### Step 3.0
        To assemble your Arduino UNO board, you will require the following components:
        - 1 x PCB ASX00040
        - 7 x Resistors
        - 1 x Diode
        - 1 x CRYSTAL 16MHz
        - 2 x Capacitors 22pF
        - 4 x LEDs
        - 1 x Push-Button
        - 1 x USB_C to Serial adapter
        - 1 x Mosfet
        - 1 x LDO 3,3v
        - 2 x Electrolytic Capacitors
        - 1 x LDO 5v
        - 6 x Capacitors 100nF
        - 1 x Atmega 328p socket
        - 2 x connectors I/O 
        - 1 x Connector ICPS
        - 1 x Power Jacks
        - 1 x ATmega 328p Microcontroller
        
        `,
        iconName: '3',
        //"icon": 'next.jpg',
        focalLengthZoomOverride: 70,
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 34,
            to: 34,
        },
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.0.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.0.2.jpg"/>
                    </div>
                `
            }
        ],
        "substeps": ['step3.1', 'step3.2', 'step3.3', 'step3.4', 'step3.5', 'step3.6', 'step3.7', 'step3.8', 'step3.9', 'step3.10', 'step3.11', 'step3.12', 'step3.13', 'step3.14', 'step3.15', 'step3.16', 'step3.17', 'step3.18', 'step3.19', 'step3.20']
    },
    'step3.1': {
        name: '3.1',
        isSubstep: true,
        contentMD:`
        #### Step 3.1
        Grab 5 1k Ohm resistors (brown, black, red, gold).
        
        ![img](new-images/step3/R1K.png)

        These resistors go in the positions on the board labeled R5, R6, R7, R8 and R11 1k Ohm. First remove the tape on both of them ends of the resistor leads. Then, bend over the legs of the resistor and insert it
        
        Once the resistors are in place, it helps to bend the legs slightly outwards so that they do not fall off.
        
        Flip the board over, solder and cut the legs exactly like you did on the other circuits.
        
        ![img](new-images/step3/uno3.1.1.jpg)
        ![img](new-images/step3/uno3.1.2.jpg)
        ![img](new-images/step3/uno3.1.3.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.1.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.1.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.1.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.1.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 34,
            to: 49,
        },
        hotspots: [
            {
                coordinates: { x: -1, y: 1, z: -1 },
                contentHtml: '1Kohm resistors',
                delayMs: 15500
            }
        ]
    },
    'step3.2': {
        name: '3.2',
        isSubstep: true,
        contentMD:`
        #### Step 3.2
        Grab one 10kOhm resistor (brown, black, orange, gold).

        ![img](new-images/step3/R10K.png)

        This resistor goes to the place on the board labeled R9, 10kOhm. 
        
        Flip the board over, solder, and cut the legs.
        
        ![img](new-images/step3/uno3.2.1.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.2.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.2.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 49,
            to: 52,
        },
        hotspots: [
            {
                coordinates: { x: -1, y: 1, z: -1 },
                contentHtml: '10Kohm resistor',
                delayMs: 3500
            }
        ]
    },
    'step3.3': {
        name: '3.3',
        isSubstep: true,
        contentMD:`
        #### Step 3.3
        Grab a 1MOhm resistor (brown, black, green, gold) to populate the last empty resistorslot.

        ![img](new-images/step3/R1M.png)
        
        This resistor goes in R10, 1MOhm. 
        For one last resistor - flip the board over, solder, and cut.
        
        ![img](new-images/step3/uno3.3.1.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.3.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.3.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 52,
            to: 55,
        },
        hotspots: [
            {
                coordinates: { x: -1, y: 1, z: -1 },
                contentHtml: '10Kohm resistor',
                delayMs: 3500
            }
        ]
    },
    'step3.4': {
        name: '3.4',
        isSubstep: true,
        contentMD:`
        #### Step 3.4
        
        Now we solder the D1 Diode. This is, like an LED, a polarized component. 
        
        The Diode has a white band, line up the white band on the component with the white mark on the PCB and solder it to the board.
        
        ![img](new-images/step3/uno3.4.1.jpg)
        ![img](new-images/step3/uno3.4.2.jpg)
        ![img](new-images/step3/uno3.4.3.jpg)
        ![img](new-images/step3/uno3.4.4.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.4.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.4.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.4.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.4.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 55,
            to: 58,
        },
        hotspots: [
            {
                coordinates: { x: -3.15, y: 1, z: 1.6 },
                contentHtml: 'D1 diode',
                delayMs: 3500
            }
        ]
    },
    'step3.5': {
        name: '3.5',
        isSubstep: true,
        contentMD:`
        #### Step 3.5
        
        Now, mount the 16MHz crystal in the Y1 position.
        Flip the board over and solder the crystal to the board.
        
        ![img](new-images/step3/uno3.5.1.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.5.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.5.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.5.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 58,
            to: 61,
        },
        hotspots: [
            {
                coordinates: { x: -1.5, y: 1, z: 0.25 },
                contentHtml: '16MHz Y1 crystal',
                delayMs: 3500
            }
        ]
    },
    'step3.6': {
        name: '3.6',
        isSubstep: true,
        contentMD:`
        #### Step 3.6
        
        Now for the LEDs LD2, LD3, LD4 which should be yellow. Note the direction of the LED leads does matter.
        The long leg is known as the Anode and is the positive (+) lead.
        The short leg is known as the Cathode and is the negative (-) lead.
        Put the LEDs through the holes marked LD2, LD3, LD4.
        Solder the leads to the board.
        
        ![img](new-images/step3/uno3.6.1.jpg)
        ![img](new-images/step3/uno3.6.2.jpg)
        ![img](new-images/step3/uno3.6.3.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.6.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.6.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.6.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 61,
            to: 70,
        },
        hotspots: [
            {
                coordinates: { x: -2.6, y: 1, z: -0.6 },
                contentHtml: 'Yellow LEDs',
                delayMs: 9500
            }
        ]
    },
    'step3.7': {
        name: '3.7',
        isSubstep: true,
        contentMD:`
        #### Step 3.7
        
        Now for the green LED, going in slot LD5. Grab the LED and put the leads through the holes marked LD5.
        Then solder the LED to the board.
        
        ![img](new-images/step3/uno3.7.1.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.7.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.7.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 70,
            to: 73,
        },
        hotspots: [
            {
                coordinates: { x: 0, y: 1, z: -1.1 },
                contentHtml: 'Green LED',
                delayMs: 3500
            }
        ]
    },
    'step3.8': {
        name: '3.8',
        isSubstep: true,
        contentMD:`
        #### Step 3.8
        
        Now let's move on to your capacitors, they are 22pF yellow capacitors.
        These capacitors go in the positions on the board labeled C4 and C5.
        Solder the capacitors to the board.
        
        ![img](new-images/step3/uno3.8.1.jpg)
        ![img](new-images/step3/uno3.8.2.jpg)
        ![img](new-images/step3/uno3.8.3.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.8.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.8.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.8.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 73,
            to: 79,
        },
        hotspots: [
            {
                coordinates: { x: -1.5, y: 1.5, z: -0.15 },
                contentHtml: '22pF capacitators',
                delayMs: 6500
            }
        ]
    },
    'step3.9': {
        name: '3.9',
        isSubstep: true,
        contentMD:`
        #### Step 3.9
        
        Let's move on to the push-button.
        This push-button goes in the position on the board labeled PB1.
        Solder the legs of the push-button to the board.
        
        ![img](new-images/step3/uno3.9.1.jpg)
        ![img](new-images/step3/uno3.9.2.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.9.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.9.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 79,
            to: 82,
        },
        hotspots: [
            {
                coordinates: { x: -4.2, y: 1, z: -1.75 },
                contentHtml: 'Push button',
                delayMs: 3500
            }
        ]
    },
    'step3.10': {
        name: '3.10',
        isSubstep: true,
        contentMD:`
        #### Step 3.10
        Let's move on to the PCB USB-Serial. 
        
        Push it down with the USB-C port facing away from the board.
        Solder it to the board, and cut the legs. 
        
        ![img](new-images/step3/uno3.10.1.jpg)
        ![img](new-images/step3/uno3.10.2.jpg)
        ![img](new-images/step3/uno3.10.3.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.10.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.10.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.10.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 82,
            to: 85,
        },
        hotspots: [
            {
                coordinates: { x: -3.75, y: 1, z: -0.75 },
                contentHtml: 'PCB USB-Serial',
                delayMs: 3500
            }
        ]
    },
    'step3.11': {
        name: '3.11',
        isSubstep: true,
        contentMD:`
        #### Step 3.11
        
        Let's move on to the Mosfet. 
        
        Grab it and push it into the slot marked Q1. This component is non-reversible and needs to go into the board in a specific direction. 
        
        One of the Mosfets sides is flat, match that side with the flat edge on the PCBs drawing.
        Then solder it to the board.
        
        ![img](new-images/step3/uno3.11.1.jpg)
        ![img](new-images/step3/uno3.11.2.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.11.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.11.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.11.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 85,
            to: 88,
        },
        hotspots: [
            {
                coordinates: { x: -2.25, y: 1, z: -0.8 },
                contentHtml: 'Mosfet',
                delayMs: 3500
            }
        ]
    },
    'step3.12': {
        name: '3.12',
        isSubstep: true,
        contentMD:`
        #### Step 3.12
        
        Let's move on to the LDO. 
        
        The LDO is going into the slot marked U2. 
        
        This component is also non-reversible, and also has a flat edge 
        that you can use for alignment. 
        Push it down, and solder it to the board.
        
        ![img](new-images/step3/uno3.12.1.jpg)
        ![img](new-images/step3/uno3.12.2.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.12.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.12.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.12.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 88,
            to: 91,
        },
        hotspots: [
            {
                coordinates: { x: -2.9, y: 1, z: 0.5 },
                contentHtml: 'LDO',
                delayMs: 3500
            }
        ]
    },
    'step3.13': {
        name: '3.13',
        isSubstep: true,
        contentMD:`
        #### Step 3.13
        
        We can now mount the electrolytic capacitors that go in C6 & C7. These capacitors are polarized (47uF / 25V), The negative side is indicated by a white stripe on the body of the capacitor.
        Correctly orient them using the indication on the body, and then solder them to the board.
        
        ![img](new-images/step3/uno3.13.1.jpg)
        ![img](new-images/step3/uno3.13.2.jpg)
        ![img](new-images/step3/uno3.13.3.jpg)
        ![img](new-images/step3/uno3.13.4.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.13.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.13.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.13.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 91,
            to: 97,
        },
        hotspots: [
            {
                coordinates: { x: -3.15, y: 1, z: 1.3 },
                contentHtml: '47uF capacitators',
                delayMs: 6500
            }
        ]
    },
    'step3.14': {
        name: '3.14',
        isSubstep: true,
        contentMD: `
        #### Step 3.14
        Now we can mount the blue 100nF capacitors.
        These capacitors go in the positions on the board marked C8, C9, C10, C11, C12, C13.
        Solder them to the board.
        
        ![img](new-images/step3/uno3.14.1.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.14.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.14.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 97,
            to: 114.042,
        },
        hotspots: [
            {
                coordinates: { x: -2.25, y: 1.5, z: 0 },
                contentHtml: '100nF capacitators',
                delayMs: 17500
            }
        ]
    },
    'step3.15': {
        name: '3.15',
        isSubstep: true,
        contentMD: `
            #### Step 3.15
            Now we can solder the LDO 5v. It goes in the position marked U3. 
            Push the legs through the holes in the PCB, then gently bend the component so that it is flush against the PCB, and the hole in the component lines up with the hole in the PCB. 
            Then solder the LDO to the board.
        
            ![img](new-images/step3/uno3.15.1.jpg)
            ![img](new-images/step3/uno3.15.2.jpg)
            ![img](new-images/step3/uno3.15.3.jpg)
            ![img](new-images/step3/uno3.15.4.jpg)
            ![img](new-images/step3/uno3.15.5.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.15.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.15.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.15.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 114.042,
            to: 118.042,
        },
        hotspots: [
            {
                coordinates: { x: -4, y: 1, z: 0.45 },
                contentHtml: '5V LDO',
                delayMs: 4500
            }
        ]
    },
    'step3.16': {
        name: '3.16',
        isSubstep: true,
        contentMD: `
        #### Step 3.16
        Now we can solder the socket for the ATMEGA328P, that goes in the position marked U1.
        
        ![img](new-images/step3/U1.png)

        Push it in place then solder the legs one by one. 
        
        ![img](new-images/step3/uno3.16.1.jpg)
        ![img](new-images/step3/uno3.16.2.jpg)
        ![img](new-images/step3/uno3.16.3.jpg)
        ![img](new-images/step3/uno3.16.4.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.16.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.16.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.16.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 118.042,
            to: 121,
        },
        hotspots: [
            {
                coordinates: { x: -1.3, y: 1, z: 0.8 },
                contentHtml: 'U1 Socket',
                delayMs: 3500
            }
        ]
    },
    'step3.17': {
        name: '3.17',
        isSubstep: true,
        contentMD:`
        #### Step 3.17
        Now we can mount the pin connectors. 
        Push them into their respective positions, J2 & J3, then solder them to the board.
        
        ![img](new-images/step3/uno3.17.1.jpg)
        ![img](new-images/step3/uno3.17.2.jpg)
        ![img](new-images/step3/uno3.17.3.jpg)
        ![img](new-images/step3/uno3.17.4.jpg)
        ![img](new-images/step3/uno3.17.5.jpg)
        ![img](new-images/step3/uno3.17.6.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.17.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.17.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.17.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.17.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.17.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.17.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.17.7.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 121,
            to: 127,
        },
        hotspots: [
            {
                coordinates: { x: -1.2, y: 1.5, z: 1.85 },
                contentHtml: 'Connector',
                delayMs: 6500
            },
            {
                coordinates: { x: -1.5, y: 1.5, z: -1.85 },
                contentHtml: 'Connector',
                delayMs: 6500
            }
        ]
    },
    'step3.18': {
        name: '3.18',
        isSubstep: true,
        contentMD: `
        #### Step 3.18
        Now we can mount the ICSP headers. On the PCB the position is marked J1.
        Push it into position then solder the component to the board.     
        
        ![img](new-images/step3/uno3.18.1.jpg)
        ![img](new-images/step3/uno3.18.2.jpg)
    `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.18.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.18.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.18.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 127,
            to: 130,
        },
        hotspots: [
            {
                coordinates: { x: 0.15, y: 1, z: -0.15 },
                contentHtml: 'IPCS connector',
                delayMs: 3500
            }
        ]
    },
    'step3.19': {
        name: '3.19',
        isSubstep: true,
        contentMD: `
            #### Step 3.19
            Now we can mount the barrel jack. Line up the three connectors to the slits in the board, and push it down to the board.
            Then solder it to the board.
        
            ![img](new-images/step3/uno3.19.1.jpg)
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.19.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.19.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.19.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 130,
            to: 133,
        },
        hotspots: [
            {
                coordinates: { x: -4.45, y: 1.5, z: 1.4 },
                contentHtml: 'Power jack',
                delayMs: 3500
            }
        ]
    },
    'step3.20': {
        name: '3.20',
        isSubstep: true,
        contentMD: `
        #### Step 3.20
        Lastly, we can insert the ATMEGA328P microcontroller into the socket into the socket mounted just a few steps ago. This is the brain of your board and it is important it is mounted in the right direction. 
        
        The direction of the microcontroller is indicated by a semi-circle on one end of the component. Orient it so the semi-circle faces away from the board.
        
        ![img](new-images/step3/uno3.20.1.jpg)
        ![img](new-images/step3/uno3.20.2.jpg)
        ![img](new-images/step3/uno3.20.3.jpg)
        ![img](new-images/step3/uno3.20.4.jpg)
    `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; gap: 3em; max-width: 100%;">
                        <img style="margin-top: 0.5rem" src="Step3.20.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.20.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.20.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.20.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 133,
            to: 135,
        },
        hotspots: [
            {
                coordinates: { x: -1.3, y: 1, z: 0.7 },
                contentHtml: 'Atmega328 Processor',
                delayMs: 3500
            }
        ]
    }
}
