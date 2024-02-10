import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'
import { Path, Svg } from 'react-native-svg'

const SvgImage = ({ d, width, height, box }: any) => {
    const AnimatedSvg = Animated.createAnimatedComponent(Svg)
    return (
        <View>
            <AnimatedSvg
                width={110}
                height={60}
                viewBox="0 0 110 60"
            >
                <Path
                    fill="white"
                    d="M20 0H0c11.046 0 20 8.953 20 20v5c0 19.33 15.67 35 35 35s35-15.67 35-35v-5c0-11.045 8.954-20 20-20H20z"
                />
            </AnimatedSvg>
        </View>
    )
}

export default SvgImage

const styles = StyleSheet.create({})