import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CodeScannerPage } from '../../components/molecules/Scanner/CodeScannerPage'
import { useCameraPermission } from 'react-native-vision-camera';
import { useAuthContext } from '../../components/auth/AuthGuard';
import Navbar from '../Navbar/Navbar';
import Card from '../../components/atoms/Card/Card';
import ImageIndex from '../../theme/AssestIndex';

const Dashboard = ({ navigation }: any) => {
    const auth: any = useAuthContext()
    console.log(auth);
    const { hasPermission, requestPermission } = useCameraPermission();
    useEffect(() => {
        requestPermission()
    }, [])
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Navbar navigation={navigation} />
            <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                <TouchableOpacity style={{ marginVertical: 10 }}>
                    <Card name={'Reconciliation'} image={ImageIndex.notepad} height={150}/>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 60 }}>
                    <Card name={'Purchase'} image={ImageIndex.cart} height={150} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: 8 }}>
                    <Card name={'Sales'} image={ImageIndex.sales} height={150} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({})