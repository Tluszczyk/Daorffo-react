interface Transform {
    querySelector: string;
    transform: (querySelector: string, value: number, ...TRANSFORM_PARAMETERS: any[]) => void;
    TRANSFORM_PARAMETERS: any[];
}

function onScrollTransform(TRANSFORM_SCROLL_START: number, TRANSFORM_SCROLL_END: number, transforms: Transform[]) {
    // if window.scrollY <= TRANSFORM_SCROLL_START,                         value = 0
    // if TRANSFORM_SCROLL_START < window.scrollY < TRANSFORM_SCROLL_END,   value = is linearly interpolated between 0 and 1
    // if window.scrollY >= TRANSFORM_SCROLL_END,                           value = 1

    for (var i = 0; i < transforms.length; i++) {
        var { querySelector, transform, TRANSFORM_PARAMETERS } = transforms[i];

        var value = (window.scrollY - TRANSFORM_SCROLL_START) / (TRANSFORM_SCROLL_END - TRANSFORM_SCROLL_START);
        value = Math.min(1, Math.max(0, value));

        transform(querySelector, value, TRANSFORM_PARAMETERS);
    }
}

function resizeTransform(querySelector: string, value: number, [RESIZE_SCALE_START, RESIZE_SCALE_END]: [number, number]) {
    // if value = 0,        scale = RESIZE_SCALE_START
    // if 0 > value > 1,    scale = is linearly interpolated between RESIZE_SCALE_START and RESIZE_SCALE_END
    // if value = 1,        scale = RESIZE_SCALE_END

    var scale = RESIZE_SCALE_START - value * (RESIZE_SCALE_START - RESIZE_SCALE_END);

    document.querySelectorAll(querySelector).forEach(el => {
        if (el !== null && el !== undefined) {
            updateOrAddTransform(el as HTMLElement, `scale(${scale})`);
        } else {
            console.log(`querySelector: ${querySelector} returned null or undefined`);
        }
    });
}

function translateTransform(querySelector: string, value: number, [TRANSLATE_X_SCALE_START, TRANSLATE_X_SCALE_END, TRANSLATE_X_UNIT, TRANSLATE_Y_SCALE_START, TRANSLATE_Y_SCALE_END, TRANSLATE_Y_UNIT]: [number, number, string, number, number, string]) {
    // if value = 0,        translateX = TRANSLATE_X_SCALE_START, translateY = TRANSLATE_Y_SCALE_START
    // if 0 > value > 1,    translateX = is linearly interpolated between TRANSLATE_X_SCALE_START and TRANSLATE_X_SCALE_END
    //                      translateY = is linearly interpolated between TRANSLATE_Y_SCALE_START and TRANSLATE_Y_SCALE_END
    // if value = 1,        translateX = TRANSLATE_X_SCALE_END, translateY = TRANSLATE_Y_SCALE_END

    var translateX = TRANSLATE_X_SCALE_START - value * (TRANSLATE_X_SCALE_START - TRANSLATE_X_SCALE_END);
    var translateY = TRANSLATE_Y_SCALE_START - value * (TRANSLATE_Y_SCALE_START - TRANSLATE_Y_SCALE_END);

    document.querySelectorAll(querySelector).forEach(el => {
        if (el !== null && el !== undefined) {
            updateOrAddTransform(el as HTMLElement, `translate(${translateX}${TRANSLATE_X_UNIT},${translateY}${TRANSLATE_Y_UNIT})`);
        } else {
            console.log(`querySelector: ${querySelector} returned null or undefined`);
        }
    });
}

// Function to update or add a transform property to an element's style
function updateOrAddTransform(element: HTMLElement | null, newTransform: string): void {
    if (element) {
        // Get the current transform property
        const currentTransform = element.style.transform;

        // Parse the current transform into an array of transform functions
        const transforms: string[] = currentTransform.match(/[a-zA-Z]+\([^()]+\)/g) || [];

        // Check if a transform of the same type already exists
        let transformExists = false;
        for (let i = 0; i < transforms.length; i++) {
            const existingTransformType = transforms[i].split('(')[0];
            const newTransformType = newTransform.split('(')[0];
            
            if (existingTransformType === newTransformType) {

                // Update the existing transform of the same type
                transforms[i] = newTransform;
                transformExists = true;
                break;
            }
        }

        // If the transform of the same type doesn't exist, add the new transform
        if (!transformExists) {
            transforms.push(newTransform);
        }

        // Set the updated transforms
        element.style.transform = transforms.join(' ');
    }
}

export { onScrollTransform, resizeTransform, translateTransform };