/**
* Name: Custom Dropdown component
* Description: Used to render a Custom Dropdown on the screen
*/
import React from 'react';

import { View } from './customView';
import { Text } from './customText';
import { TextInput } from './customTextInput';
import { Image } from './customImage';
import { TouchableOpacity } from './customTouchableOpacity';
import { FlatList } from './customFlatList';

import { AccessNestedObject } from '../Utils/common.utils';

import { THEME } from '../Constants/theme.constants';

/**
 * @class CustomDropdown
 * @extends {React.Component}
 * @props
 * @param {object} data - list that needs to be passed in dropdown
 * @param {object} containerStyle - container style that has textinput and toggle switch
 * @param {object} contentStyle - style object for the textinput container
 * @param {object} listViewStyle - style object for the view enclosing dropdown list content
 * @param {object} listContentStyle - style object for individual list elements
 */

class CustomDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data ? props.data : [],
            list: props.data ? props.data : [],
            dropdownSelected: false,
            value: '',
        }
    }

    /**
     * This function handles whether the dropdown is open or close
     * @memberof CustomDropdown
     */
    handleDropdown = () => {
        const { dropdownSelected } = this.state;
        this.setState({ dropdownSelected: !dropdownSelected });
    }

    /**
     * This function selects the dropdown value
     * @memberof CustomDropdown
     */
    setDropdownValue = (value) => {
        this.setState({ value: value });
        this.setState({ dropdownSelected: false });
    }

    /**
     * Renders the individual dropdown list elements
     * @memberof CustomDropdown
     */
    renderListContents = (item) => {
        return (
            <CustomTouchableOpacity onPress={() => this.setDropdownValue(item)}>
                <Text style={{ ...{ fontSize: 18 }, ...this.props.listContentStyle }}>
                    {item}
                </Text>
            </CustomTouchableOpacity>
        );
    }

    /**
     * Displays the searched and modified list and initial list
     * @memberof CustomDropdown
     */
    onChange = (text) => {
        const { data } = this.state;
        this.setState({ value: text });
        this.setState({ list: data });
        this.setState({ dropdownSelected: true });
        const smallText = text.toLowerCase();
        let modifiedList = [];
        data.forEach((item) => {
            let obj = {};
            obj.small = item.toLowerCase();
            obj.original = item;
            modifiedList.push(obj);
        });
        let searchedList = [];
        modifiedList.forEach((item) => {
            const flag = item.small.indexOf(smallText);
            if (flag == 0) {
                searchedList.push(item.original);
            }
        });
        this.setState({ list: searchedList });
    }

    render() {
        const { theme } = this.props;
        const generatedStyle = AccessNestedObject(THEME, ['Dropdown', theme], {});
        const generatedContainerStyle = AccessNestedObject(generatedStyle, 'containerStyle', {});
        const generatedListStyle = AccessNestedObject(generatedStyle, 'listViewStyle', {});
        const dropdownStyle = { ...defaultProps.textInputContainer, ...this.props.containerStyle, ...generatedContainerStyle };
        const { list, dropdownSelected, value } = this.state;

        return (
            <View style={defaultProps.container}>
                <View style={dropdownStyle} >
                    <TextInput
                        style={{ ...this.props.contentStyle, ...{ height: dropdownStyle.height, width: dropdownStyle.width - dropdownStyle.height } }}
                        value={value}
                        onChangeText={(text) => this.onChange(text)}
                    />
                    <TouchableOpacity style={{ height: dropdownStyle.height, width: dropdownStyle.height, justifyContent: 'center', alignItems: 'center' }} onPress={this.handleDropdown}>
                        {(dropdownSelected) ?
                            <Image style={{ height: dropdownStyle.height / 3, width: dropdownStyle.height / 3 }} source={require('../images/up-arrow.png')} />
                            :
                            <Image style={{ height: dropdownStyle.height / 3, width: dropdownStyle.height / 3 }} source={require('../images/down-arrow.png')} />
                        }
                    </TouchableOpacity>
                </View>
                {
                    (dropdownSelected) ?
                        <View style={{ ...defaultProps.listStyle, ...this.props.listViewStyle, ...generatedListStyle }}>
                            <FlatList
                                data={list}
                                renderItem={({ item }) => this.renderListContents(item)}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                        :
                        null
                }
            </View >
        );
    }


}

const defaultProps = {
    container: {
        flex: 1
    },
    textInputContainer: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        width: 300,
        height: 40
    },
    listStyle: {
        maxHeight: 200,
        width: 300,
        padding: 10,
        paddingTop: 0,
        paddingBottom: 10,
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: 'black'
    }
}

export { CustomDropdown as Dropdown };