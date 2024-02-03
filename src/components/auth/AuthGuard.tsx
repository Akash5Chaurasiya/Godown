import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { LoadingScreen } from '../molecules';
import { Login } from '../../screens';
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

const AuthGuard = (props: any) => {
    const { children } = props;
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState<any>(null);
    useEffect(() => {
        (async () => {
            try {
                const loginData = await AsyncStorage.getItem('auth');
                if (loginData) {
                    const loginDataParsed = JSON.parse(loginData);
                    setState(loginDataParsed);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);
    if (loading) {
        return <LoadingScreen />
    }
    if (state) {
        return (
            <AuthContext.Provider
                value={{
                    authData: state,
                    actions: {
                        logout: () => {
                            (async () => {
                                await AsyncStorage.removeItem('auth');
                                setState(null);
                            })()
                        },
                        login: (d: any) => {
                            (async () => {
                                await AsyncStorage.setItem('auth', JSON.stringify(d));
                                setState(d);
                            })()
                        }
                    }
                }}
            >
                {children}
            </AuthContext.Provider>
        )
    }
    return (
        <AuthContext.Provider
            value={{
                authData: {
                    loginData: {
                        success: false,
                        userId: '',
                        role: '',
                        name: '',
                        email: '',
                        phoneNumber: '',
                    }
                },
                actions: {
                    logout: () => {
                        setState(null);
                    },
                    login: (d: any) => {
                        (async () => {
                            await AsyncStorage.setItem('auth', JSON.stringify(d))
                            setState(d);
                        })()
                    }
                }
            }}
        >
            <Login />
        </AuthContext.Provider>
    )
}

export default AuthGuard

const styles = StyleSheet.create({})