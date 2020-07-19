import { Dimensions, Platform, PixelRatio } from 'react-native';

const { height, width } = Dimensions.get('window');
const scale = width / 360;

/**
 * @param  {number} value
 * Calculates the relative dp for the absolute values given to stylesheet fields
 *  in vertical orientations (eg. Height, MarginTop, MarginBottom, PaddingTop, PaddingBottom)
 */
export function getRelativeSizeHeight(value) {
    const screenHeight = height;
    // 592 is the height of Google pixel screen
    // 736 is the height of iPhone 8 plus screen
    return (value * (screenHeight / 592));
}

/**
 * @param  {number} value
 * Calculates the relative dp for the absolute values given to stylesheet fields
 *  in horizontal orientations (eg. Width, MarginLeft, MarginRight, PaddingLeft, PaddingRight)
 */
export function getRelativeSizeWidth(value) {
    const screenWidth = width;
    // 360 is the width of Google pixel screen
    // 414 is the width of iPhone 8 plus screen
    return (value * (screenWidth / 360));
}

/**
 * @param  {} stylesObj object containing all the style fields
 * this function converts all the style values to relative values according to 
 * the screen size and returns the style Object with new values
 */
export function resizeStyleObj(stylesObj) {
    let newStylesObj = stylesObj;

    //Converts common orientation values to relative according to the horizontal screen size.
    const commonStyleProps = ['margin', 'padding', 'borderRadius', 'borderTopLeftRadius', 'borderBottomRightRadius', 'borderTopRightRadius', 'borderBottomLeftRadius'];

    commonStyleProps.forEach((element) => {
        if (newStylesObj.hasOwnProperty(element)) {
            newStylesObj[element] = Math.ceil(getRelativeSizeHeight(newStylesObj[element]));
        }
    });

    //fontSize fix
    if (newStylesObj.hasOwnProperty('fontSize')) {
        newStylesObj.fontSize = normalize(newStylesObj.fontSize);
    }

    const isSameHeightWidth = (newStylesObj.hasOwnProperty('height') && newStylesObj.hasOwnProperty('width') && newStylesObj.height == newStylesObj.width);
    if (isSameHeightWidth) {
        newStylesObj['height'] = getRelativeSizeHeight(newStylesObj['height']);
        newStylesObj['width'] = getRelativeSizeHeight(newStylesObj['width']);
    }


    //Converts absolute height, padding and margin values to relative according to the vertical screen size.
    let verticalStyleProps = ['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'];

    //Converts absolute width, padding and margin values to relative according to the horizontal screen size.
    let horizontalStyleProps = ['width', 'paddingLeft', 'paddingRight', 'marginLeft', 'marginRight'];

    if (isSameHeightWidth) {
        verticalStyleProps = verticalStyleProps.filter((element) => element != 'height');
        horizontalStyleProps = horizontalStyleProps.filter((element) => element != 'width');
    }

    verticalStyleProps.forEach((element) => {
        if (newStylesObj.hasOwnProperty(element)) {
            newStylesObj[element] = getRelativeSizeHeight(newStylesObj[element]);
        }
    });

    horizontalStyleProps.forEach((element) => {
        if (newStylesObj.hasOwnProperty(element)) {
            newStylesObj[element] = getRelativeSizeWidth(newStylesObj[element]);
        }
    });

    return newStylesObj;
}

export function normalize(size) {
    if (scale > 2) {
        if (size <= 10) {
            size *= scale;
        } else {
            size *= 2;
        }
    }
    else {
        size *= scale;
    }
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size));
    }
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2;
}
