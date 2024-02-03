import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Text } from 'react-native';

export interface RILoadingScreen { }

export namespace PILoadingScreen { }

export default function LoadingScreen(props: RILoadingScreen) {
    const { } = props;

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View style={{ flex: 1, alignSelf: 'center' }}>
                <View style={{ marginRight: 3 }}>
                    <Text
                        style={{ fontSize: 18, fontFamily: 'Inter-SemiBold', color: 'black' }}>
                        Welcome....
                    </Text>
                </View>
                <ActivityIndicator />
            </View>
        </View>
    );
}
