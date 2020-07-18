import React from 'react';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export const Tab = (props) => {

    return (

        <ScrollableTabView
            {...props}
            initialPage={0}
            style={{ marginTop: 10, backgroundColor: '#ffffff' }}
            tabBarBackgroundColor={'#ffffff'}
            tabBarActiveTextColor={'#f15d61'}
            tabBarUnderlineStyle={{ backgroundColor: '#f15d61' }}
            tabBarInactiveTextColor={'#77899b'}
            tabBarTextStyle={{ fontSize: 16 }}
            renderTabBar={() => <ScrollableTabBar tabStyle={{ width: 50 }} />}
        >

            {props.children}

        </ScrollableTabView>
    )
}
