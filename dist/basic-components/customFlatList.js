import React from 'react';
import { FlatList } from 'react-native';
const CustomFlatList = React.forwardRef((props, ref) => {
    const { style = {} } = props;
    return (<FlatList ref={ref} {...props} style={style}/>);
});
export { CustomFlatList as FlatList };
