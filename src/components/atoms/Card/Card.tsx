import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Card = ({ name, image }: any) => {
    return (
        <LinearGradient
            colors={[
                '#E5F1FE',
                'white',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.01, y: 0.50 }}
            locations={[0.1, 1]}
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                width: 328, height: 136,
                borderRadius: 8,
                borderColor: '#FFFFFF21',
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.18,
                shadowRadius: 4.59,
                elevation: 5
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', gap: 20 }}>
                <View>
                    <Image source={image} style={{ resizeMode: 'contain', width: 48, height: 46 }} />
                </View>
                <View>
                    <Text style={{ color: '#475569', fontSize: 28, fontWeight: '800' }}>{name}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Card

const styles = StyleSheet.create({})