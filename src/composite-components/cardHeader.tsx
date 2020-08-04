/**
 * Card header
 */

import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native'; //@todo image will get from rn-ui-components
import { ThemeContext, GetStyle } from 'rn-themed-tailwind';
import { View, Text, TouchableOpacity } from 'rn-ui-components';

const CardHeader = ({ props }) => {

    const { leftIcon, LeftText, RightText, rightIcon, callback } = props;

    const { getStyle } = useContext(ThemeContext);

    const { container, wrapper, border, center, start, flexrow, paddingX, paddingLeft, paddingRight } = styles || {};

    return (
        <View>

            <View style={[wrapper, paddingX, getStyle('justify-between')]}>

                <View style={[center, flexrow]}>

                    {
                        typeof leftIcon == 'function' ? <Image source={leftIcon()} /> : null
                    }

                    <Text Text style={[center, paddingLeft]} > {LeftText}</Text>

                </View>

                <TouchableOpacity

                    onPress={(event) => { typeof callback === 'function' ? callback(event) : null; }}>

                    <View style={[center, flexrow]}>
                        <Text>{RightText}</Text>

                        {
                            typeof leftIcon == 'function' ? <Image source={rightIcon()} /> : null
                        }
                    </View>

                </TouchableOpacity>

            </View >

        </View >
    );
};

const FlexRow = GetStyle('flex-row');

const styles = StyleSheet.create({
    wrapper: FlexRow, //px-4
    center: GetStyle('items-center'),
    paddingLeft: GetStyle('pl-2'),
    paddingX: GetStyle('px-4'),
    flexrow: FlexRow
})

export { CardHeader };
