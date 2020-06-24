import React from 'react';
declare type FlatListProps = {
    children?: React.ReactNode;
    onPress?: () => void;
    [key: string]: any;
};
declare const CustomFlatList: React.ForwardRefExoticComponent<Pick<FlatListProps, React.ReactText> & React.RefAttributes<unknown>>;
export { CustomFlatList as FlatList };
