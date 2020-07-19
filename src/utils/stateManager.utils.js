/*******************************************************************************************************************
 * Utility method that Manages state, persist api response and notify back by callback method provided as param 
 * Also based on Internet connectivity, can save api call which require less attention and invoke them later 
 * Supports app working even when device is not connected any network
 ******************************************************************************************************************/
import React from 'react';
import RootSiblings from 'react-native-root-siblings';
import { View } from 'react-native';
import Notify from '../Components/Notify/Toast';

let alertView = undefined;
let alertVisible = false;

export function ShowAlert(child) {
    if (alertVisible) {
        return;
    }

    alertVisible = true;

    const sibling = new RootSiblings(
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            {child}
        </View>
    );
    alertView = sibling;
}

export function HideAlert() {
    if (!alertVisible) {
        return;
    }
    alertVisible = false;
    alertView.destroy();
}


export function NotifyUser(message, type) {
    let background = '#d7d7d7';
    if (type == 'success') {
        background = '#00b894';
    } else if (type == 'error') {
        background = '#eb2f06';
    }

    const toast = Notify.show(message, {
        duration: Notify.durations.LONG,
        position: Notify.positions.BOTTOM,
        backgroundColor: background,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
    });
    setTimeout(function () {
        Notify.hide(toast);
    }, 3000);
}
