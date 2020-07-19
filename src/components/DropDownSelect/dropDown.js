import React, { Component } from 'react';
import { CustomView, CustomText, CustomTouchableOpacity, CustomTextInput, CustomImage, CustomScrollView } from './../Custom-Components';
const DD_UPSIDE_ICON = require('./../images/upIcon.png');
const DD_DOWNSIDE_ICON = require('./../images/downIcon.jpg');

export default class DropDownSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            showDropDown: false,
            height: 40,
            text: '',
            filteredDropDownData: [],
            isfilterd: false,
            dropDownData: [
                {
                    id: 1,
                    name: 'Javascript'
                },
                {
                    id: 2,
                    name: 'Java'
                },
                {
                    id: 3,
                    name: 'Ruby'
                },
                {
                    id: 4,
                    name: 'React Native'
                },
                {
                    id: 5,
                    name: 'PHP'
                },
                {
                    id: 6,
                    name: 'Python'
                },
                {
                    id: 7,
                    name: 'Go'
                },
                {
                    id: 8,
                    name: 'Swift'
                },
            ],
            title: (props.title) ? props.title : 'Name',
        }
    }

    onPressDownIcon = () => {
        this.setState({
            isOpen: false,
            showDropDown: false,
        })
    }

    onPressUpIcon = () => {
        this.setState({
            showDropDown: true,
            isOpen: true,
        })
    }

    onPressSelectOption = (value, key) => {
        console.log('ggggg', value);
        this.setState({
            text: 'hii'
        })
    }

    showDropDownList = () => {
        const { dropDownData, filteredDropDownData, isfilterd } = this.state;
        console.log('testing', dropDownData);
        return (
            <CustomView style={styles.dropDownContainer}>
                {isfilterd ?
                    <CustomScrollView contentContainer={{ paddingTop: 5, paddingBottom: 5 }}
                        contentInsetStyle={{ top: 5, bottom: 5 }}
                        showsVerticalScrollIndicator={false}>
                        {filteredDropDownData.map((item, key) => (
                            <CustomTouchableOpacity
                                key={key}
                                onPress={() => {
                                    this.setState({
                                        text: item.name,
                                    });
                                }}
                            >
                                <CustomText style={{ fontSize: 14, color: 'black', padding: 8, paddingLeft: 20 }}>{item.name} </CustomText>
                            </CustomTouchableOpacity>
                        ))}
                    </CustomScrollView>
                    :
                    <CustomScrollView contentContainer={{ paddingTop: 5, paddingBottom: 5 }}
                        contentInsetStyle={{ top: 5, bottom: 5 }}
                        showsVerticalScrollIndicator={false}>
                        {dropDownData.map((item, key) => (
                            <CustomTouchableOpacity
                                key={key}
                                onPress={() => {
                                    this.setState({
                                        text: item.name,
                                    });
                                }}
                            >
                                <CustomText style={{ fontSize: 14, color: 'black', padding: 8, paddingLeft: 20 }}>{item.name} </CustomText>
                            </CustomTouchableOpacity>
                        ))}
                    </CustomScrollView>
                }
            </CustomView>
        )
    }

    searchItem = (text) => {
        let listdata = this.state.dropDownData;
        const regularText = new RegExp(`.*${text}.*`);
        if (text) {
            listdata = listdata.filter(item => {
                return regularText.test(item.name);
            });
        }
        return listdata
    }

    render() {
        const { isOpen, showDropDown, text } = this.state;
        return (
            [<CustomView style={{ position: 'absolute', top: 50, width: 320, flexDirection: 'row', height: 40, alignItems: 'flex-start', borderWidth: 1, justifyContent: 'space-between', borderColor: 'black', paddingTop: 10, zIndex: -1 }}>
                <CustomTextInput style={{ fontSize: 14, height: 40, width: 240, paddingBottom: 20, paddingLeft: 20 }}
                    placeholder="Search here.."
                    onFocus={this.onPressUpIcon}
                    onChangeText={text => {
                        this.setState({
                            filteredDropDownData: this.searchItem(text),
                            isfilterd: true,
                            text
                        });
                    }}
                    value={text} />
                {(isOpen) ?
                    <CustomTouchableOpacity onPress={this.onPressDownIcon}>
                        <CustomImage style={styles.imageContainer}
                            source={DD_DOWNSIDE_ICON} />
                    </CustomTouchableOpacity>
                    :
                    <CustomTouchableOpacity onPress={this.onPressUpIcon}>
                        <CustomImage style={styles.imageContainer}
                            source={DD_UPSIDE_ICON} />
                    </CustomTouchableOpacity>
                }
            </CustomView>,
            showDropDown ? this.showDropDownList() : null
            ]
        )
    }
}

const styles = {
    imageContainer: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginRight: 20
    },
    dropDownContainer: {
        position: 'absolute',
        width: 320,
        maxHeight: 200,
        borderWidth: 1,
        borderColor: '#747474',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 94,
    },
    headerContainer: {
        position: 'absolute',
        height: 20,
        width: 3
    }
}

