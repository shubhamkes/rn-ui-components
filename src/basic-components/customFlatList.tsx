import React from 'react';
import { FlatList } from 'react-native';

type FlatListProps = {
    children?: React.ReactNode,
    onPress?: () => void,
    [key: string]: any
}

const CustomFlatList = React.forwardRef((props: FlatListProps, ref) => {
    const { style = {} } = props;

    return (
        <FlatList
            ref={ref}
            {...props}
            style={style}
        />
    )
})

export { CustomFlatList as FlatList };
