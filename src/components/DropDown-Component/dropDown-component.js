import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { CustomView, CustomText, CustomTochableOpacity, CustomTextInput, CustomImage, CustomScrollView } from './../../Custom-Components';
import { ModalUtils } from '../../Modal-Utils/modal-utils';
const DD_CANCEL_ICON = require('./../../images/cancelIcon.png');

export default class DropDownListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownData: props.dropDownData,
            text: '',
        }
    }

    onPressCancel = () => {
    }

    render() {
        const { text, dropDownData } = this.state;
        return (
            <CustomView style={styles.mainContainer}>
                <CustomView style={styles.headerContainer}>
                    <CustomTextInput style={styles.textInputContainer}
                        placeholder="Search here"
                        value={text}
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <CustomTochableOpacity onPress={this.onPressCancel}>
                        <CustomImage style={styles.imageContainer}
                            source={DD_CANCEL_ICON} />
                    </CustomTochableOpacity>
                </CustomView>
                <CustomView style={styles.dropDownListContainer}>
                    <CustomScrollView contentContainerStyle={styles.contentContainer}
                        contentInset={styles.contentInsetContainer}>
                        {dropDownData.forEach(element => {
                            <CustomText style={style.textStyle}>{element.name}</CustomText>
                        })}
                    </CustomScrollView>
                </CustomView>
            </CustomView>
        )
    }
}

const styles = {
    mainContainer: {
        width: 320,
        height: 200,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        width: 320,
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#d4d4d4'
    },
    textInputContainer: {
        width: 300,
        height: 40,
    },
    imageContainer: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    dropDownListContainer: {
        width: 320,
        height: 160,
    },
    contentContainer: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    contentInsetContainer: {
        top: 20,
        bottom: 20
    },
    textStyle: {
        color: 'black',
        fontSize: 14,
        paddingBottom: 8
    },
}