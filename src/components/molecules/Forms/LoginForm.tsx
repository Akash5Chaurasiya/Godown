import { Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Box, CloseIcon, EyeIcon, EyeOffIcon, Heading, Icon, Image, KeyboardAvoidingView, MessageCircleIcon, Text, ToastDescription, ToastTitle, VStack, useToast } from '@gluestack-ui/themed'
import { ButtonIcon, Input } from '../../atoms'
import { FormControl } from '@gluestack-ui/themed'
import { Pressable } from '@gluestack-ui/themed'
import { login } from '../../../services/Login/LoginFetch'
import { useAuthContext } from '../../auth/AuthGuard'
import { HStack } from '@gluestack-ui/themed'
import ImageIndex from '../../../theme/AssestIndex'
import * as yup from 'yup';
import { BlurView } from '@react-native-community/blur'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const LoginForm = () => {
    const auth: any = useAuthContext();
    const toast = useToast();
    console.log(auth);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const validationSchema = yup.object().shape({
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });
    const showToast = (message: any) => {
        const duration = 2000;
        const id = toast.show({
            placement: "top",
            duration: duration,
            render: ({ id }) => {
                const toastId = "toast-" + id;
                return (
                    <View style={styles.toastContainer} key={toastId}>
                        <VStack space="xs">
                            <ToastTitle color="white">New Message</ToastTitle>
                            <ToastDescription color="white">
                                {message}
                            </ToastDescription>
                        </VStack>
                        <Pressable style={{ top: 0, right: 0, position: 'absolute', padding: 8, }} mt="$1" onPress={() => toast.close(id)}>
                            <Icon as={CloseIcon} color="$coolGray50" />
                        </Pressable>
                    </View>
                );
            },
        });
        setTimeout(() => {
            toast.close(id);
        }, duration);
    };
    const [val, setVal] = useState({
        password: false,
        loading: false,
    })
    const handleState = async (values: any, formikHelpers: FormikHelpers<{ email: string; password: string }>) => {
        console.log(values);
        setVal(prev => ({
            ...prev,
            loading: true
        }))
        const res: any = await login(values);
        console.log(res);
        auth.actions.login(res.user)
        console.log(auth);
        setVal(prev => ({
            ...prev,
            loading: false
        }))
        showToast("Login Successful!!")
    };
    console.log(ImageIndex.logo)
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : undefined}
            keyboardVerticalOffset={80} style={styles.container}>
            <BlurView
                style={styles.absolute}
                blurType="light"
                blurAmount={30}
                reducedTransparencyFallbackColor="white"
            >
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, formikHelpers) => handleState(values, formikHelpers)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <FormControl
                            py='$10'
                            width='$80'
                            borderWidth="$1"
                            borderRadius="$3xl"
                            borderColor="$borderLight300"
                        >
                            <View style={{}}>
                                <Image
                                    source={ImageIndex.logo}
                                    style={{ alignSelf: "center", width: 57, height: 57 }}
                                    alt="Company Logo"
                                />
                                <Text style={{ alignSelf: 'center', fontWeight: '800', fontSize: 24, height: 28, width: 75 }} color="#005D7F" lineHeight={28}>
                                    LOGIN
                                </Text>
                            </View>
                            <View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ marginLeft: '12%' }} color='#475569' size="md">Employee Id</Text>
                                    {errors.email && <Text style={{ color: 'red', marginLeft: '12%' }}>{errors.email}</Text>}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Input
                                            placeholder="Enter your Employee Id...."
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                            secureText={false}
                                        />
                                    </View>
                                </View>
                                <View style={{ marginTop: 20 }}>
                                    <Text style={{ marginLeft: '12%' }} color='#475569' size="md">Password</Text>
                                    {errors.password && <Text style={{ color: 'red', marginLeft: '12%' }}>{errors.password}</Text>}
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: '7%' }}>
                                        <Input
                                            placeholder="Enter your Password......"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            secureText={showPassword}
                                        />
                                        <TouchableOpacity onPress={togglePasswordVisibility}>
                                            {showPassword ? <EyeOffIcon size='xl' /> : <EyeIcon size='xl' />}
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginTop: 22 }}>
                                <ButtonIcon loading={val} handleSubmit={handleSubmit} />
                            </View>
                        </FormControl>
                    )}
                </Formik >
            </BlurView>
        </KeyboardAvoidingView>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    toastContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#16a34a',
        borderRadius: 10,
        alignSelf: 'center',
    },
    absolute: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '18%',
    },
})