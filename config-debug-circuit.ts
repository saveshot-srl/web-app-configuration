
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
    "step2": {
        name: 'Create a Debug circuit',
        isSubstep: false,
        contentMD:`
        #### Step 2.0
        
        You can now solder your first debug circuit. This PCB is equipped with a resistor, a LED and a pair of cables.
        
        Once you've completed your UNO board, you can use this circuit to easily test the pin connections to verify that everything is working as it should.
        `,
        iconName: '2',
        //"icon": 'next.jpg',
        focusPointCoordinates: { x: 2, y: 0, z: 1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 26,
            to: 26,
        },
        popups: [],
        focalLengthZoomOverride: 70,
        substeps: ['step2.1', 'step2.2'],
    },
    'step2.1': {
        name: '2.1',
        isSubstep: true,
        contentMD:`
        #### Step 2.1
        
        Take the 1 Kohm R4 resistor (brown, black and red) and mount it on the PCB, flip the board over and solder the resistor to the board.

        ![1kOhm](https://www.datocms-assets.com/79069/1666272131-1kohm.png)

        Now on to the Yellow LED. 
        
        Note that LEDs are polarized components, meaning that the direction of the LED leads matters as current can only flow in one direction. 
        The long leg is known as the Anode and is the positive (+) lead. The short leg is known as the Cathode and is the negative (-) lead. Put the LED leads through the holes marked LD1, and solder them to the board.
       
        Now Solder the cables, insert the red cable in the label + and solder. Then solder the black cable to the hole labelled -.

        If you're having a hard time getting the cables through the holes in the pcb you may find it helpful to twist the tip of the cable before trying to insert it. 

        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step2.0.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.8.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.9.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.1.10.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 50,
        focusPointCoordinates: { x: 1, y: 0, z: 1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 26,
            to: 32,
        },
        hotspots: []
    },
    'step2.2': {
        name: '2.2',
        isSubstep: true,
        contentMD:`
        #### Step 2.2
        Well done! 
        You have now completed your debug circuit, you can detach the board by twisting the PCB.
        
        Grab a battery, and touch the ends of the wires to the poles of the battery, to make sure that the LED lights up, then put it aside for later.
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step2.2.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step2.2.2.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 70,
        focusPointCoordinates: { x: 1, y: 2, z: 1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 32,
            to: 33,
        },
        hotspots: []
    }
}
