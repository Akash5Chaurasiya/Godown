import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LoginForm } from '../../components/molecules'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from '@gluestack-ui/themed'
import ImageIndex from '../../theme/AssestIndex'
import { Path, Polygon, Svg } from 'react-native-svg'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const screenWidth = Dimensions.get('window').width;

    const handleState = () => {
        setShowPassword((showState) => {
            return !showState
        })
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, zIndex: 2 }}>
            <View style={{ width: `100%` }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
                    <Image
                        source={ImageIndex.cac}
                        alt="Company Logo"
                        style={{ resizeMode: 'contain' }}
                    />
                    <View>
                        <Text style={{ color: '#475569', fontWeight: '300', fontSize: 12, marginBottom: 2 }}>Welcome to</Text>
                        <Text style={{ color: '#1E293B', fontWeight: '700', fontSize: 20, marginBottom: -20 }}>Chawla Auto Components</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Svg height="200" width="200"  >
                        <Path
                            d="M0 198 C 50 0, 100 0, 200 198 Z"
                            fill="#0078FB"
                            stroke="#0078FB"
                            strokeWidth="2"
                            transform="rotate(90, 100, 100)"
                        />
                    </Svg>
                    <Svg height="100" width="100"  >
                        <Path
                            d="M0 152 C 80 0, 100 0, 200 152 Z"
                            fill="#0078FB"
                            stroke="#0078FB"
                            strokeWidth="2"
                            transform="rotate(270, 100, 100)"
                        />
                    </Svg>
                </View>
                <View style={{ zIndex: 6 }}>
                    <LoginForm />
                </View>
                <View >
                    <Svg height="200" width={screenWidth} >
                        <Path
                            d={`M0 192 C ${3 * (screenWidth / 8)} 75, ${6 * (screenWidth / 10)} 75, ${screenWidth} 192 Z`}
                            fill="#0078FB"
                            stroke="#0078FB"
                            strokeWidth="16"
                            transform="rotate(0, 100, 100)"
                        />
                    </Svg>
                    <Svg height="200" width={screenWidth}>
                        <Path
                            d={`M0 192 L${screenWidth} 192 L${screenWidth} 0 L0 0 Z`}
                            fill="#0078FB"
                            stroke="#0078FB"
                            strokeWidth="10"
                        />
                    </Svg>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    formContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        opacity: 50,
        backgroundColor: '#fafafa',
    },
    absolute: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%'
    }
})