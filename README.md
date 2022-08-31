# Introduction
This web application organizes its contents into steps and substeps. 

Contents are present inside a configuration file. The app reads the config file from this repository on the main branch.

The configuration file is written in Typescirpt.  
It is a module that MUST export a Dictionary called `steps`  
(something like: `export const steps = {...}`).

If you want to break down the configuration by defining steps separately you can do it as long as you export a dictionary conatining every step.
```
// this is a valid configuration file structure

const step1: Step = {...}
const step2: Step = {...}

export const steps = { step1, step2 }

```

```
// Also this is a valid configuration file structure

export const steps = { 
    step1: {...},
    step2: {...} 
}

```


This `steps` object is a Dictionary having strings as keys, representing the ids of the steps and substeps.
This Dictionary has as value Steps or Substeps  
In typescript: `export const steps: Dictionary<Step|Substep> = {...}`  

The keys representing the ids of the steps have to be ordered because this order will be used to determine the step or substep to be shown when clicking next or prev.

For example if we have a config defined as the following one:  

```
export const steps = {
    'step1': Step,
    'step1.1': Substep,
    'aaaa': Step,
} 
``` 
The first step shown is the one corresponding to the `aaaa` key because keys are sorted before rendering. 

Basically the key of the dictionary should be something sorted:
`['step1', 'step1.1', 'step1.2', 'step2', 'step2.1']`

# Step
A step is somehow like a chapter in a book, has its own title, and it is directly displayed on the Steps bar on the right side of the application.  
When a step is selected it shows its content. Optionally it can also display Popups having additional information.

When the user selects a step the application displays under the step content a button to go to the following step, or substep.
This is the main content navigation tool.


## Step Parameters

The type column refers to Typescript types. Optional types will have a ? at the end.

| Param name |Type| Description |
|-----|-----|-----|
|`name`|`string`|This is the name of the Step, it is shown on the right side bar.|
|`isSubstep`|`false`|This is used to discriminate if the Step is Step or Substep. On Steps it has to have false as `value`|
|`contentHtml`|`string`|The content of the step. It is shown on the right side bar when a step is selected. This specific field accepts any html string as a value and renders it as html. You can include images, videos, links. Some default formatting will be applied to the elements, but you can also include some `style` tag in order to override it if necessary.|
|`contentMD`|`string`|Alternatively to html you can also insert the Step content as a Markdown string. Note that you can use either `contentMD` or `contentHtml`, not both at the same time|
|`icon`|`string?`|This is the path of the icon that will be shown as Step Icon on the Step bar on the right. It is the `src` of an image tag so you can use both some local files (under the public directory i.e. `tools.png`) or a link to some image on the web (like `https://site/image.png`). This field is optional if you specify `iconName`|
|`iconName`|`string?`|If you dont want to have an image as a symbol for the step you can specify a string content to be shown as step indicator. For instance you can have `1` as value. If you specify this value it will be displayed instead of the Step icon|
|`focusPointCoordinates`|`{ x: number, y: number, z: number }`| The vector that defines the position of the point the camera orbits around on this particular step. The camera is animated between steps if this value changes|
|`animationPatterns`|`string[]`|This represents the list of animations (embedded inside the 3d model) to be played when the step i selected, usually there's only one animation called `Animation`|
|`animation`|`{ from: number, to: number }`|This object sets the second the animation starts, and ends. For example with a value of `{from: 1, to: 3}` when this step is selected the application plays the animations specified under `animation` key from their second 1 to second 3|
|`substeps`|`string[]`|The list of the names of the keys of the substeps contained into this step.|
|`focalLengthZoomOverride`| `number?`| This optional parameter sets the zoom level towards the point defined in `focusPointCoordinates`. Each zoom change is animated. |
|`popups`|`Popup[]`|A list of popups to show additional content for the step. Each popup shows inside the step its title and icon. It is displayed when selected. More on this on the Popup section below. |
|`hotspots`| `Hotspot[]`| A list of hotspots to show some labels on the 3d model when this step is selected. More on this on the Hotspot section|



## Step Example

The following one is an example of a working step config object. It includes also a Popup and an Hotspot. More on Popup and Hotspot params later

```
    {                                          
        name: 'Step 1',
        isSubstep: false,
        contentMD: `
        # some content
        Markdown content
        `,
        iconName: '1.1',
        focusPointCoordinates: { x: 0, y: 0, z: 0 },
        animationPatterns: ["Animation"],
        animation: {
            from: 0,
            to: 0,
        },
        substeps: ['step1.1', 'step1.2'],
        focalLengthZoomOverride: 28,
        popups: [
            {
                title: 'Required Tools', 
                icon: 'tool.png',
                autoOpen: false,
                contentMD: `#Some content here`,
            }
        ],
        hotspots: [
            {
                coordinates: { x: 1, y: 1, z: 1 },
                contentHtml: '10Kohm resistor',
                delayMs: 500
            }
        ]
    },
```

# Substep
A substep is somehow like a paragraph, it belongs to a step and has its own content. It has no icon and it is not directly accessible from the right bar of the application.
You can access substep content by selecting its parent Step and navigating forwart using the "Next" button, located under the content of the Step.
Like a book, you can directly access chapters using the index but in order to read each paragraph you have to search it through the chapter.

Similarly to the Step a Substep has a content and can have one or more Popups to show additional content.

### Substep Params

| Param name |Type| Description |
|-----|-----|-----|
|`name`|`string`|This is the name of the Substep|
|`isSubstep`|`true`|This is used to discriminate if the Step is Step or Substep. On Steps it has to have false as `value`|
|`contentHtml`|`string`|The content of the Substep. It is shown on the right side bar when a Substep is selected. This specific field accepts any html string as a value and renders it as html. You can include images, videos, links. Some default formatting will be applied to the elements, but you can also include some `style` tag in order to override it if necessary.|
|`contentMD`|`string`|Alternatively to html you can also insert the Step content as a Markdown string. Note that you can use either `contentMD` or `contentHtml`, not both at the same time|
|`focusPointCoordinates`|`{ x: number, y: number, z: number }`| The vector that defines the position of the point the camera orbits around on this particular step. The camera is animated between steps if this value changes|
|`animationPatterns`|`string[]`|This represents the list of animations (embedded inside the 3d model) to be played when the step i selected, usually there's only one animation called `Animation`|
|`animation`|`{ from: number, to: number }`|This object sets the second the animation starts, and ends. For example with a value of `{from: 1, to: 3}` when this step is selected the application plays the animations specified under `animation` key from their second 1 to second 3|
|`focalLengthZoomOverride`| `number?`| This optional parameter sets the zoom level towards the point defined in `focusPointCoordinates`. Each zoom change is animated. |
|`popups`|`Popup[]`|A list of popups to show additional content for the step. Each popup shows inside the step its title and icon. It is displayed when selected. More on this on the Popup section below. |
|`hotspots`| `Hotspot[]`| A list of hotspots to show some labels on the 3d model when this step is selected. More on this on the Hotspot section|

### Substep Example

This is the example of a Substep object
```
    {
        name: '1.1',
        isSubstep: true,
        contentHtml: `
            <h4>Step 1.1</h4>
            <p> Turn your soldering iron on at 400° (or 763°F) </p>
            <img style="width: 220px;" src="Step1.1.jpg"/>
        `,
        focusPointCoordinates: { x: 0, y: 0, z: 0 },
        animationPatterns: [],
        focalLengthZoomOverride: 28,
        animation: {
            from: 0,
            to: 0,
        }
    }
```
# Additional steps and substeps features

## Popup
Both Steps and Substeps can define Popups.
A Popup is a frame meant to show some html or markdown content. This gives you the freedom to embed images, videos, every type of content.
Each title has a title and an icon and creates a button on the Step or Substep to open it.
Each Step / Substep can define more than one Popup. 
If a Popup is opened, opening a different one or changing step causes it to be closed.

## Popup Params

| Param name |Type| Description |
|-----|-----|-----|
|`title`|`string`|The title of the Popup. It is displayed on its parent Step or Substep as the text of the button used to open it|
|`icon`|`string`|The icon of the step this is an image path, for example `tools.png`, it supports also urls for external images|
|`autoOpen`|`boolean?`|This param determines the behaviour of the popup when its parent step is selected. If this param is set to true the popup will open as soon as the step is selected, otherwise it will open only if the user clicks on its button on the Step/Substep|
|`contentHtml`|`string`|The content of the popup. It is shown when a popup is selected. This specific field accepts any html string as a value and renders it as html. You can include images, videos, links. Some default formatting will be applied to the elements, but you can also include some `style` tag in order to override it if necessary.||
|`contentMD`|`string`|Alternatively to html you can also insert the Step content as a Markdown string. Note that you can use either `contentMD` or `contentHtml`, not both at the same time|

## Popup Example

This is the example of a Popup object. It has to be included into a Step or Substep `popups` attribute

```
    {
        title: 'Required Tools',
        icon: 'tool.png',
        autoOpen: false,
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
        `,

    }

```

## Hotspot
An Hotspot is a label with some coordinates that can appear on the 3d model when a step is selected to show some additional content.
Each Step or Substep can define many Hotspots.
Each Hotspot has a `delayMs` property that defines after how many milliseconds the Hotspot is supposed to appear.
Changing Step will hide every Hotspot and cancel every scheduled one.

## Hotspot Params

| Param name |Type| Description |
|-----|-----|-----|
|`coordinates`|`{ x: number, y: number, z: number }`|This is the vector with the coordinates of the position the Hotspot will be displayed to. The Hotspot always faces the camera inside 3d scene|
|`contentHtml`|`string`|The content of the Hotspot. The size of the resulting element is limited to 100px, so it is better to have short labels in here, like the name of the component. It is a bad practice to insert too much content directly in 3d because it is harder to be read.|
|`delayMs`|`number`|This param is the time in ms after which the Hotspot appears on the 3d scene|

## Hotspot Example
```
    {
        coordinates: { x: 1, y: 1, z: 1 },
        contentHtml: 'This is the content of the label',
        delayMs: 500
    }
```

# Complete Configuration Example
```
export const steps = {                                                  
    "step1": {                                          
        name: '',                                       
        isSubstep: false,                                                                        
        contentHtml: ``,                                
        contentMD: ``,                                                                           
        icon: '',
        iconName: '',                                   
        focusPointCoordinates: { x: 0, y: 0, z: 0 },    
        animationPatterns: [],                          
        animation: {                                    
            from: 0,
            to: 0,
        },
        substeps: ['step1.1'],               
        focalLengthZoomOverride: 28,                                                             
        popups: [
            {
                title: 'Required Tools',                
                icon: 'tool.png', 
                autoOpen: false,                                                            
                contentMD: `some content`,                          
            }
        ],                                        
        hotspots: [
            {
                coordinates: { x: 1, y: 1, z: 1 },      
                contentHtml: '',                        
                delayMs: 500                            
            }
        ]
    },                                               
    'step1.1': {
        name: '',                                       
        isSubstep: true,                                                                                        
        contentHtml: `<h1>Some content here</h1>`,                                
        focusPointCoordinates: { x: 0, y: 0, z: 0 },    
        animationPatterns: [],                          
        focalLengthZoomOverride: 28,                    
        animation: {                                    
            from: 0,
            to: 0,
        },
                popups: [
            {
                title: 'Required Tools',                
                icon: 'tool.png', 
                autoOpen: false,                                                            
                contentMD: `some content`,                          
            }
        ],                                        
        hotspots: [
            {
                coordinates: { x: 1, y: 1, z: 1 },      
                contentHtml: '',                        
                delayMs: 500                            
            }
        ]
    }
}
```