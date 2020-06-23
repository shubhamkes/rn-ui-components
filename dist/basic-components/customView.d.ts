/**
* Name: Custom View component
* Description: Used to render view on the screen
*/
import React from 'react';
declare type ViewProps = {
    children?: React.ReactNode;
    onPress?: () => void;
    [key: string]: any;
};
/**
 * @class CustomView
 * @extends {React.Component}
 * @param {object} ViewStyleObject - it provides styling of view
 * Custom View component; to be used in place of View component. It takes care of absolute values
 * assigned to it and converts them into relative size according to the screen size of the device
 */
declare const CustomView: React.ForwardRefExoticComponent<Pick<ViewProps, string | number> & React.RefAttributes<unknown>>;
export { CustomView as View };
