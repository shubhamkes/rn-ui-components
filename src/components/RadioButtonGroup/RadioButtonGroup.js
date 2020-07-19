import React, { Component } from 'react';
import { View } from '../../Custom-Components/customView';
import { Text } from '../../Custom-Components/customText';
import { TouchableOpacity } from '../../Custom-Components/customTouchableOpacity';

export default class RadioButtonGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioButtons: this.validate(this.props.radioButtons),
        };
    }

    validate(data) {
        let selected = false; // Variable to check if "selected: true" for more than one button.
        data.map(e => {
            e.color = e.color ? e.color : '#444';
            e.disabled = e.disabled ? e.disabled : false;
            e.label = e.label ? e.label : 'You forgot to give label';
            e.labelColor = e.labelColor ? e.labelColor : '#444';
            e.layout = e.layout ? e.layout : 'row';
            e.selected = e.selected ? e.selected : false;
            if (e.selected) {
                if (selected) {
                    e.selected = false; // Making "selected: false", if "selected: true" is assigned for more than one button.
                    console.log('Found "selected: true" for more than one button');
                } else {
                    selected = true;
                }
            }
            e.size = e.size ? e.size : 24;
            e.value = e.value ? e.value : e.label;
        });
        if (!selected) {
            data[0].selected = true;
        }
        return data;
    }

    onPress = label => {
        const radioButtons = this.state.radioButtons;
        const selectedIndex = radioButtons.findIndex(e => e.selected == true);
        const selectIndex = radioButtons.findIndex(e => e.label == label);
        if (selectedIndex != selectIndex) {
            radioButtons[selectedIndex].selected = false;
            radioButtons[selectIndex].selected = true;
            this.setState({ radioButtons });
            this.props.onPress(this.state.radioButtons);
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: this.props.flexDirection }}>
                    {this.state.radioButtons.map(data => (
                        <RadioButton
                            key={data.label}
                            data={data}
                            onPress={this.onPress}
                        />
                    ))}
                </View>
            </View>
        );
    }
}

class RadioButton extends Component {
    render() {
        const data = this.props.data;
        const opacity = data.disabled ? 0.2 : 1;
        let layout = 'row';
        let margin = 10;
        if (data.layout === 'column') {
            layout = 'column';
            margin = 10;
        }

        return (
            <TouchableOpacity
                style={{
                    opacity, marginHorizontal: 10, marginVertical: 5, flexDirection: layout
                }}
                onPress={() => {
                    data.disabled ? null : this.props.onPress(data.label);
                }}>
                <View
                    style={
                        {
                            borderColor: '#000',
                            borderWidth: 1,
                            width: data.size,
                            height: data.size,
                            borderRadius: data.size / 2,
                            alignSelf: 'flex-start',
                            justifyContent: 'center',
                        }
                    }>
                    {data.selected &&

                        <View
                            style={{
                                backgroundColor: data.color,
                                width: data.size / 1.5,
                                height: data.size / 1.5,
                                borderRadius: data.size / 2,
                                alignSelf: 'center',
                                justifyContent: 'center'
                            }}
                        />}
                </View>
                <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start', paddingRight: 16, marginLeft: margin }}>
                    <Text style={{ alignSelf: 'flex-start', color: data.labelColor, marginTop: data.layout === 'column' ? margin : 0, fontSize: data.labelFontSize }}>{data.label}</Text>
                    {(data.selected && data.note) &&
                        <Text style={{ color: data.noteColor, paddingRight: 60, fontSize: 14, lineHeight: 20, }}
                            numberOfLines={4}>{data.note}
                        </Text>}
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
}