/**
 * Finance bar component for showing heading, data , callback
 * Heading will be text/image 
 * data will be text
 * callback for onpress event
 */

import React, { useContext } from 'react';
import { StyleSheet, Image } from 'react-native'; //@todo image will get from rn-ui-components
import { ThemeContext, GetStyle } from 'rn-themed-tailwind';
import { View, Text, TouchableOpacity } from '../index';

const FinanceBar = ({ props }) => {

    const { getStyle } = useContext(ThemeContext);

    const { container, wrapper, border, center } = styles;

    return (
        <View style={container}>
            <View style={[wrapper, border, getStyle('bg-whiteColor')]}>

                {
                    props.map(({ heading, data, callback }, key) => {
                        return (
                            <>
                                {
                                    key === 0 ? null
                                        : <View style={[border]}></View>
                                }

                                <TouchableOpacity
                                    onPress={(event) => { typeof callback === 'function' ? callback(event) : null }}
                                >
                                    <View style={center}>

                                        {
                                            typeof heading == 'function' ? <Image source={heading()} />
                                                :
                                                <Text style={getStyle('text-primaryColor-100 text-lg')}>
                                                    {heading}
                                                </Text>
                                        }

                                        <Text style={getStyle('pt-2 text-secondaryColor-100 text-lg')}>
                                            {data}
                                        </Text>

                                    </View>

                                </TouchableOpacity>
                            </>
                        );
                    })
                }
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: GetStyle('flex-1  p-4'),
    wrapper: GetStyle('flex-row justify-around p-4'),
    border: GetStyle('border-2 rounded-lg'),
    center: GetStyle('items-center  justify-center')
})

export { FinanceBar };
