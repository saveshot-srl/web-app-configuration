
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
    "step1": { // id hotspot, per ora li chiamiamo hotspot1, hotspot2, hotspot3, ecc
        name: 'Learn how to solder', // nome dell'hotspot: questo compare sia sulla barra degli hotspot sotto che sull'hotspot stesso quando è selezionato
        // contentHtml: `
        //     <h4>Required tools</h4>
        //     <p> Place all the components of sachet No.1 on
        //     your desk </p>
        //     <img style="width: 220px;" src="Step1.0.jpg"/>
        // `,
        contentMD: `
            ### Required tools:  
            Place all the components of bag No.2 & 4 on your desk  
        `,
        // icon: 'eyeIcon.png', // icona: path relativo a public. Questo file è public/components/connector.jpg
        iconName: '1', //   se non c'è l'icona viene mostrato questo, altrimenti questo diventa l'alt dell'icona
        focusPointCoordinates: { x: 0, y: 0, z: 0 },
        animationPatterns: ['Animation'], // Pattern del nome animazione Non mettere robe ambigue tipo Null (senza |) se no fa il play di tutte le animazioni che matchano
        animation: {
            from: 0,
            to: 0,
        },
        substeps: ['step1.1', 'step1.2', 'step1.2.1', 'step1.3', 'step1.3.1', 'step1.4', 'step1.5', 'step1.6', 'step1.7', 'step1.8'],
        focalLengthZoomOverride: 28,
        popups: [
            {
                title: 'Required Tools',
                icon: 'eyeIcon.png',
                autoOpen: false,
                // contentHtml: `
                //     <p>WHAT YOU NEED TO ASSEMBLE A KIT</p>
                //     <ul>
                //     <li>Soldering Iron</li>
                //     <li>Solder</li>
                //     <li>Flush Cutter</li>
                //     <li>Safety Glasses</li>
                //     <li>Battery</li>
                //     </ul>
                //     <img src="tools-img.png"/>
                // `
                contentMD: `
                    ## WHAT YOU NEED TO ASSEMBLE A KIT:
                    
                    - Soldering Iron
                    - Solder
                    - Flush Cutter
                    - Safety Glasses
                    - Battery
                    ![img](tools-img.png)
                `
            }
        ],
        hotspots: []
    },
    'step1.1': {
        name: '1.1',
        isSubstep: true,
        contentMD:`
        #### Step 1.1
        Turn your soldering iron on at 400°C (or 763 °F)
        `,
        focusPointCoordinates: { x: 0, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        focalLengthZoomOverride: 28,
        animation: {
            from: 0,
            to: 0,
        },
    },
    'step1.2': {
        name: '1.2',
        isSubstep: true,
        contentMD: `
        #### Step 1.2
        On the right side of your board we have designed a test sheet for your first soldering gig. 
        Practice your soldering skills by filling the holes that make a heart-shape with solder, until you feel comfortable doing the real thing.
        For more information about how to solder, click the tooltip above.
        `,
        popups: [
            {
                title: 'How to Solder',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <p>
                        Melt a tiny bit of solder wire on the iron's tip.
                        <br/>
                        Place the the tip of the soldering iron on the hole of the Board for a couple seconds,
                        then slowly feed in the solder wire and try not to exceed the 3 seconds.
                        Do not worry if the Board gets too hot, it is designed to withstand high temperatures. 
                    </p>
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.2.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.2.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 3, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        focalLengthZoomOverride: 60,
        animation: {
            from: 0,
            to: 0,
        },
    },
    'step1.2.1': {
        name: '1.2.1',
        isSubstep: true,
        contentHtml: `
            <h4>Step 1.2.1</h4>
            <p> On the right side of your board we have
            designed a test sheet for your first solder.
            Dissolve some lead with iron. </p>
        `,
        popups: [
            {
                title: 'How to Solder',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <p>
                        Melt a tiny bit of solder wire on the iron's tip.
                        <br/>
                        Place the the tip of the soldering iron on the hole of the Board for a couple seconds,
                        then slowly feed in the solder wire and try not to exceed the 3 seconds.
                        Do not worry if the Board gets too hot, it is designed to withstand high temperatures. 
                    </p>
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.2.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.2.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 3, y: 0, z: 0 },
        animationPatterns: ['Animation'],
        focalLengthZoomOverride: 60,
        animation: {
            from: 0,
            to: 1,
        },
    },
    'step1.3': {
        name: '1.3',
        isSubstep: true,
        contentMD: `
        #### Step 1.3
        Start with the first 1k Ohm resistor, color coded Brown-Black-Red | Gold.
        
            The colored bands on a resistor represents the resistance of your component, and can be read from left to right.
           
            The first two or three bands represent single digits. Brown = 1, black = 0, read it from left to right and you get 10.
            The third or fourth band is a multiplier. Red tells you to multiply by 100: 
         
            10 * 100 = 1000.
         
            This resistor is to be placed at the location  labeled R1 1k.
            Remove the tape at both ends of the resistors leads, bend them and insert the resistor
            into its designated spot on the circuit board. Orientation is not important.
            Once the resistor is in place, it helps
            To slightly bend the leads outwards to hold the component in place.
            Now solder the resistor using the procedure you learned in Step 1.2
       
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.3.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.8.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 4, y: 0, z: -1 },
        focalLengthZoomOverride: 40,
        animationPatterns: ['Animation'],
        animation: {
            from: 1,
            to: 2,
        },
        hotspots: [
            {
                coordinates: { x: 4, y: 1, z: 0.5 },
                contentHtml: '1Kohm resistor',
                delayMs: 9500
            }
        ]
    },
    'step1.3.1': {
        name: '1.3.1',
        isSubstep: true,
        contentHtml: `
            <h4>Step 1.3</h4>
            <p> Start with the first 1k Ohm resistor, color coded Brown-Black-Red | Gold.
                <br/>
                Brown = 1, Black = 0, Red x 100 =  10  X 100 = 1000.
                This resistor is to be placed at the location  labeled R1 1k.
                Remove the tape at both ends of the resistor’s leads, bend them and insert the resistor
                into its designated spot on the circuit board. Orientation is not important.
                Once the resistor is in place, it helps
                To slightly bend the leads outwards to hold the component in place.
                Now solder the resistor using the procedure you learned in Step 1.2
            </p>
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.3.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.3.8.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 3, y: 0, z: 1 },
        focalLengthZoomOverride: 60,
        animationPatterns: ['Animation'],
        animation: {
            from: 2,
            to: 9.042,
        },
        hotspots: [
            {
                coordinates: { x: 3, y: 0, z: 0.5 },
                contentHtml: '1Kohm resistor',
                delayMs: 9500
            }
        ]
    },
    'step1.4': {
        name: '1.4',
        isSubstep: true,
        contentMD:`
        #### Step 1.4
           
        Now let's mount the 10kOhm R2 (Brown-Black-Orange Gold).
        Place them in the spot labeled R2 10k. 
        Solder it to the board like you did in the previous step.
    
        You only have one resistor left to solder, and it is R3 1MOhm (Brown, black, green, gold).
        This resistor occupies the spot labeled R3 1M. 
        Solder it to the board, and then you can move on to the next step.
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.4.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.4.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.4.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.4.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 2, y: 0, z: -1.5 },
        animationPatterns: ['Animation'],
        focalLengthZoomOverride: 40,
        animation: {
            from: 9.042,
            to: 15,
        },
        hotspots: [
            {
                coordinates: { x: 4, y: 1, z: 0.5 },
                contentHtml: '10Kohm resistor',
                delayMs: 5500
            }
        ]
    },
    'step1.5': {
        name: '1.5',
        isSubstep: true,
        contentMD:`
        #### Step 1.5
      
        Let's move on to your capacitors, the first is a 22pF (picoFarad) yellow capacitor.
        This capacitor goes to the place on the board labeled C1 22pF.
        First remove the tape from both ends of the capacitors leads, then insert it
        in its spot on the circuit board.
        Once the capacitor is in place, it helps to bend the leads slightly outwards to prevent the component from falling off. 
        Solder the two leads to the board using what you have learned so far.
      
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.5.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.5.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.5.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.5.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.5.5.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 4, y: 0, z: 1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 15,
            to: 18,
        },
        hotspots: [
            {
                coordinates: { x: 4, y: 1, z: 1.5 },
                contentHtml: '22pF capacitor',
                delayMs: 3500
            }
        ]
    },
    'step1.6': {
        name: '1.6',
        isSubstep: true,
        contentMD: ` 
            #### Step 1.6
            Let's now solder our first electrolytic capacitor C2. This capacitor is polarized (47uF/25V), meaning that 
            the direction you place it in matters.
            
            On the body of the component you can identify a negative and positive label, the negative side is indicated by a 
            white stripe on the body of the component.
            On the board we have a positive label (+). Insert the positive lead in the hole labeled “+”.
            Then solder it to the board.
            
            `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.6.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.6.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.6.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.6.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.6.5.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 4, y: 0, z: 1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 18,
            to: 21,
        },
        hotspots: [
            {
                coordinates: { x: 4, y: 1, z: 1.5 },
                contentHtml: '47uF capacitor',
                delayMs: 2500
            }
        ]
    },
    'step1.7': {
        name: '1.7',
        isSubstep: true,
        contentMD: `
        #### Step 1.7
        
        We can now solder the second 100nF (nanoFarad) capacitor, which is blue.
        This capacitor goes to the place on the board labeled C3 100nF.
        
        First remove the tape at both ends of the capacitors leads, then insert it his home on the circuit board.
        Once the capacitor is in place, it helps to bend them slightly outwards so that the side does not fall. 
        Now solder the two leads to the board using what you have learned so far.
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.7.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.7.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.7.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: 4, y: 0, z: 1 },
        animationPatterns: ['Animation'],
        animation: {
            from: 21,
            to: 24,
        },
        hotspots: [
            {
                coordinates: { x: 4, y: 1, z: 1.5 },
                contentHtml: '100nF capacitor',
                delayMs: 3500
            }
        ]
    },
    'step1.8': {
        name: '1.8',
        isSubstep: true,
        contentMD:`
        #### Step 1.8
        
        Congratulations! You have completed your first solder experience.
        Now we can clean the board. The solder contains flux that stains your board, but don't worry! It comes off easily!
        Take a sheet of absorbent paper, a toothbrush, and isopropyl alcohol,
        wet the Board and brush fearlessly on both the TOP and BOTTOM sides.
        Once it is clean, detach it from the PCB by twisting it, and you've got yourself a brand new Arduino keychain!
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step1.8.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.4.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.5.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.6.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.7.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.8.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.9.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step1.8.10.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 70,
        focusPointCoordinates: { x: 3, y: 2, z: 1 },
        animationPatterns: ['Animation'],

        animation: {
            from: 24,
            to: 25.025,
        },
        hotspots: [
        ]
    },
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
        Now on to the Yellow LED. 
        
        Note that LEDs are polarized components, meaning that the direction of the LED leads matters as current can only flow in one direction. 
        The long leg is known as the Anode and is the positive (+) lead. The short leg is known as the Cathode and is the negative (-) lead. Put the LED leads through the holes marked LD1, and solder them to the board.
        Now Solder the cables, insert the red cable in the label + and solder. Then solder the black cable to the hole labelled -.
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
    },
    "step3": {
        name: 'Make your UNO',
        isSubstep: false,
        contentMD:`
        #### Step 3.0
        To assemble your Arduino UNO board, you will require the following components:
        - 1 x PCB ASX00040
        - 7 x Resistor
        - 1 x Diodes
        - 1 x CRYSTAL 16MHz
        - 2 x Capacitors 22pF
        - 4 x LEDs
        - 1 x Push-Button
        - 1 x PCB USB_C Serial
        - 1 x Mosfet
        - 1 x LDO 3,3v
        - 2 x Capacitors Electrolytic
        - 1 x LDO 5v
        - 6 x Cap 100nF
        - 1 x Socket U1 Atmega 328p
        - 2 x connectors I/O 
        - 1 x Connector ICPS
        - 1 x Power Jacks
        - 1 x Microcontroller ATmega 328p
        Follow these steps to make sure the process is as easy as possible.
        
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
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.0.1.jpg"/>
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
        These resistors goes in the positions on the board labeled R5, R6, R7, R8 and R11 1k Ohm. First remove the tape on both of them ends of the resistor leads. Then, bend over the legs of the resistor and insert it
        Once the resistors are in place, it helps to bend them slightly outwards so that the side does not fall off.
        Flip the board over, solder and cut the excess leads exactly like you did on the other circuits.
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.1.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.1.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.1.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.1.4.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 50,
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        This resistor goes to the place on the board labeled R9, 10kOhm. 
        Flip the board over, solder, and cut.
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.2.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.2.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        This resistor goes to the place on the board labeled R10, 1MOhm. 
        For one last resistor - flip the board over, solder, and cut.
        
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.3.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.3.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        
        Now we solder the D1 Diode. This is, like an LED, a polarized component. The Diode has a white band, line up the white band on the component with the white mark on the PCB and solder it down to ensure the diode is mounted in the right direction.
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.4.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.4.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.4.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.4.4.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.5.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.5.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.5.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.6.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.6.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.6.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.7.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.7.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.8.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.8.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.8.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.9.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.9.2.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        Solder it to the board, then carefully cut the legs. 
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.10.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.10.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.10.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.11.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.11.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.11.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.12.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.12.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.12.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.13.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.13.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.13.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.14.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.14.2.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 40,
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.15.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.15.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.15.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        Push it in place then solder the legs one by one. 
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.16.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.16.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.16.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        contentMD: `
        #### Step 3.17
        Now we can mount the pin connectors. 
        Push them into their respective positions, J2 & J3, then solder them to the board.
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.17.1.jpg"/>
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.18.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.18.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.18.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.19.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.19.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.19.3.jpg"/>
                    </div>
                `
            }
        ],
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
        `,
        popups: [
            {
                title: 'Step by Step',
                icon: 'eyeIcon.png',
                contentHtml: `
                    <div style="display: flex; justify-content: space-evenly;  flex-wrap: wrap; max-width: 100%;">
                        <img src="Step3.20.1.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.20.2.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.20.3.jpg"/>
                        <img style="margin-top: 0.5rem" src="Step3.20.4.jpg"/>
                    </div>
                `
            }
        ],
        focalLengthZoomOverride: 40,
        focusPointCoordinates: { x: -2.5, y: 0, z: 1 },
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
