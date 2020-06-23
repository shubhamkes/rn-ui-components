/**
* Name: Custom ScrollView component
* Description: Used to render an scrollview on the screen
*/
import React from 'react';
declare type ScrollProp = {
    [text: string]: any;
};
/**
 * @class CustomScrollView
 * @extends {React.Component}
 * @param {object} contentContainerStyleObject - for android usage
 * @param {object} contentInsetStyleObject - for ios usage
 * Custom ScrollView component; to be used in place of ScrollView  component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */
declare const CustomScrollView: React.ForwardRefExoticComponent<Pick<ScrollProp, string | number> & React.RefAttributes<unknown>>;
export { CustomScrollView as ScrollView };
