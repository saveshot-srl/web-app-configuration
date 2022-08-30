
THIS FILE IS USED TO SET THE CONFIGURATION OF THE ENTIRE WEB APPLICATION

In this file are defined the data that are used in the project.

# Introduction
This web application organizes its contents into steps and substeps.

## Steps
A step is somehow like a chapter in a book, has its own title, and it is directly displayed on the Steps bar on the right side of the application.  
If selected shows its content. Optionally it can also display Popups having additional information.

When the user selects a step the application displays under the step content a button to go to the following step, or substep, this is the main content navigation tool.

Sticking to the book example you can change chapters following the index, but in order to read each paragraph you have to search it through the chapter.

## Substeps
A substep is somehow like a paragraph, it belongs to a step and has its own content. It has no icon and it is not directly accessible from the right bar of the application.
Similarly to the step it has a content and can have one or more Popups to show additional content.
You can access substep content by selecting its parent Step and navigating forwart using the "Next" button, located under the content of the Step.

## Additional steps and substeps features

### Popup
Both Steps and Substeps can define Popups.
A Popup is a frame meant to show some html or markdown content. This gives you the freedom to embed images, videos, every type of content.
Each title has a title and an icon and creates a button on the Step or Substep to open it.
Each Step / Substep can define more than one Popup. 
If a Popup is open, opening a different one or changing step causes it to be closed.

### Hotspot

/*
    This is the list of steps and substep defined for the scene
    The two main components of the list are the step and substep components.
    Some mandatory fields must be set for the application to run, while others are optional and can be skipped. They will be labeled using [MANDATORY] to distinguish them

    !!!ATTENTION!!!
    The names of the step and substep components must be set in a way that can be easily ordered in alphabetical order like:
        - "step1", "step1.1", "step1.2", "step2", "step3", "step3.1", "step3.2", etc...
        - "stepA", "stepA.1", "stepA.2", "stepB", "stepC", "stepC.1", "stepC.2", etc...
    The order of alphanumerical characters is defined as:
        - [0 to 9]
        - [A to Z]
        - [a to z]
    (Numbers before uppercase characters and uppercase characters before under case characters)
*/
export const steps = {
                                                        // [ATTENTION] This component is a STEP
    "step1": {                                          // [MANDATORY] The name of the component
        name: '',                                       // [MANDATORY] The label text that is shown in the hotspot bar and when it is selected
        isSubstep: false,                               // [MANDATORY] This specifies if a component is a STEP or a SUBSTEP
                                                        // [ATTENTION] One field between "contentHtml" and "contentMD" must be set. These fields are mutually exclusive, only one between the two must be set
        contentHtml: ``,                                // [OPTIONAL]  Content displayed using HTML syntax
        contentMD: ``,                                  // [OPTIONAL]  Content displayed using markdown syntax
                                                        // [ATTENTION] One field between "icon" and "iconName" must be set. These fields are mutually exclusive, only one between the two must be set
        icon: '',                                       // [OPTIONAL]  The relative path to the file from the "public" folder of the project. So if the image is located in "public/tool.png", the value assigned here must be "tool.png". To include external images just set the HTTP link to it (i.e. http://www.wikipedia.org/static/images/project-logos/enwiki.png)
        iconName: '',                                   // [OPTIONAL]  The label text that will be shown in the hotspot ball
        focusPointCoordinates: { x: 0, y: 0, z: 0 },    // [MANDATORY] The vector that defines the position of the point the camera orbits around on this particular step. The camera is animated between steps if this value changes
        animationPatterns: [],                          // [MANDATORY] The names of the animation inside the model
        animation: {                                    // [MANDATORY] The starting and ending point of the animation to display when entering a step or a substep
            from: 0,
            to: 0,
        },
        substeps: ['step1.1', 'step1.2'],               // [MANDATORY] The list of the substeps to be displayed under this step. The values in the list are the keys of the substep defined after this step component
        focalLengthZoomOverride: 28,                    // [OPTIONAL]  A value of zoom that override the base zoom value defined in the Camera component at the beginning of the file
                                                        // [OPTIONAL]  A list of popups to be displayed for this specific step. For each entry of the list will be displayed a button with an image and a label specified for each popup component
        popups: [
            {
                title: 'Required Tools',                // [MANDATORY] The label text that is shown in the button to open/close the popup
                icon: 'tool.png',                       // [MANDATORY] The relative path to the file from the "public" folder of the project. So if the image is located in "public/tool.png", the value assigned here must be "tool.png". To include external images just set the HTTP link to it (i.e. http://www.wikipedia.org/static/images/project-logos/enwiki.png)
                autoOpen: false,                        // [MANDATORY] It defines if the popup will open automatically when entering the step
                                                        // [ATTENTION] One field between "contentHtml" and "contentMD" must be set. These fields are mutually exclusive, only one between the two must be set
                contentHtml: ``,                        // [OPTIONAL]  Content displayed using HTML syntax
                contentMD: ``,                          // [OPTIONAL]  Content displayed using markdown syntax
            }
        ],
                                                        // [OPTIONAL]  The list of hotspots to be displayed in the 3d scene. The field can be skipped or defined as an empty list ("[]") if no hotspot must be showed
        hotspots: [
            {
                coordinates: { x: 1, y: 1, z: 1 },      // [MANDATORY] The vector where the hotspot label is displayed in the 3d scene 
                contentHtml: '',                        // [MANDATORY] The content of the label to display using the HTML syntax
                delayMs: 500                            // [MANDATORY] The delay in ms for when the hotspot label will be displayed from the start of the animation
            }
        ]
    },
                                                        // [ATTENTION] This component is a SUBSTEP
    'step1.1': {
        name: '',                                       // [MANDATORY] The name of the component
        isSubstep: true,                                // [MANDATORY] This specifies if a component is a STEP or a SUBSTEP
                                                        // [ATTENTION] One field between "contentHtml" and "contentMD" must be set. These fields are mutually exclusive, only one between the two must be set
        contentHtml: ``,                                // [OPTIONAL]  Content displayed using HTML syntax
        contentMD: ``,                                  // [OPTIONAL]  Content displayed using markdown syntax
        focusPointCoordinates: { x: 0, y: 0, z: 0 },    // [MANDATORY] The vector that defines the position of the camera
        animationPatterns: [],                          // [MANDATORY] The pattern of the name of animations to load and be displayed
        focalLengthZoomOverride: 28,                    // [OPTIONAL]  The value of zoom that overrides the base zoom value defined in the Camera component at the beginning of the file
        animation: {                                    // [MANDATORY] The starting and ending point of the animation to display when entering a step or a substep
            from: 0,
            to: 0,
        },
    }
}
