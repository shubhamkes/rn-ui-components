import React from 'react';
function isClassComponent(component) {
    return (
        typeof component === 'function' &&
        !!component.prototype.isReactComponent
    ) ? true : false
}

function isFunctionComponent(component) {
    return (
        typeof component === 'function' &&
        String(component).includes('return React.createElement')
    ) ? true : false;
}

function isReactComponent(component) {
    return (
        isClassComponent(component) ||
        isFunctionComponent(component) ||
        typeof component == 'function'
    ) ? true : false;
}

function isElement(element) {
    return React.isValidElement(element);
}

function isDOMTypeElement(element) {
    return isElement(element) && typeof element.type === 'string';
}

function isCompositeTypeElement(element) {
    return isElement(element) && typeof element.type === 'function';
}

/**
 * Return component depends on function and element component
 * @param {} component 
 */
function GetComponent(component) {
    const Component = component;

    if (isReactComponent(Component)) {
        return component({});
    }

    return component;
};

export {
    isClassComponent, isFunctionComponent, isReactComponent, isElement, isDOMTypeElement, isCompositeTypeElement,
    GetComponent
}