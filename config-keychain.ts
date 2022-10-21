
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
        Place all the components of bag No.1 & 2 on your desk  
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
        Start with the first 1k Ohm resistor, color coded Brown, Black, Red.

        ![1kOhm](https://www.datocms-assets.com/79069/1666272131-1kohm.png)
        
            The colored bands on a resistor represents the resistance of your component, and can be read from left to right.
           
            The first two or three bands represent single digits. Brown = 1, black = 0, read it from left to right and you get 10.
            The third or fourth band is a multiplier. Red tells you to multiply by 100: 
         
            10 * 100 = 1000.

            The last band indicates tolerance, with the gold band of this resistor indicating a tolerance of +/- 5% of the resistorvalue. 
         
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
        contentMD: `
        #### Step 1.3
        Start with the first 1k Ohm resistor, color coded Brown, Black, Red.

        ![1kOhm](https://www.datocms-assets.com/79069/1666272131-1kohm.png)
        
            The colored bands on a resistor represents the resistance of your component, and can be read from left to right.
           
            The first two or three bands represent single digits. Brown = 1, black = 0, read it from left to right and you get 10.
            The third or fourth band is a multiplier. Red tells you to multiply by 100: 
         
            10 * 100 = 1000.

            The last band indicates tolerance, with the gold band of this resistor indicating a tolerance of +/- 5% of the resistorvalue. 
         
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

        ![10kOhm](https://www.datocms-assets.com/79069/1666272137-10kohm.png)

        Solder it to the board like you did in the previous step.
    
        You only have one resistor left to solder, and it is R3 1MOhm (Brown, black, green, gold).
        This resistor occupies the spot labeled R3 1M. 

        ![1MOhm](https://www.datocms-assets.com/79069/1666272134-1mohm.png)

        Solder it to the board, cut the legs, and then you can move on to the next step.
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

        You can also identify the orientation of the component by inspecting the length of the legs. If, on an electrical component, 
        one leg is longer than the other it is normally the positive lead.

        On the board we have a negative label (-). Insert the negative lead in the hole labeled “-”.

        Then solder it to the board, and cut the legs.
        
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
        
        First remove the tape on both ends of the capacitors leads, then insert it in its home on the circuit board.
        Once the capacitor is in place, it helps to bend the legs slightly outwards so that it does not fall out when you flip the board over. 
        
        Now solder the two leads to the board and cut the legs.
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

        Detach it from the PCB by twisting it, and you've got yourself a brand new Arduino keychain!
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
    }
}
