import { Button, FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Card from '../../components/atoms/Card/Card'
import { ButtonIcon } from '../../components/atoms'
import ImageIndex from '../../theme/AssestIndex'
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Icon from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import SelectedCard from '../../components/atoms/SelectedCard/SelectedCard'

const DataComponent = ({ data, setValue, bottomSheetModalRef }: { data: any, image: any, setValue: any, bottomSheetModalRef: any }) => {
    const renderItem = ({ item: user }: { item: any }) => (
        <TouchableOpacity style={{ margin: 20, borderWidth: 1, padding: 18, borderRadius: 5 }} onPress={() => { setValue(user.name), bottomSheetModalRef.current.close() }}>
            <Text style={{ color: 'black', textAlign: 'left' }} >{`${user.name}`}</Text>
        </TouchableOpacity>
    );
    return (
        <View>
            <FlatList data={data} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
        </View>
    );
};

const Assign = ({ navigation }: any) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const snapPoints = useMemo(() => ["25%", "50%", "98%"], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log("HANDLE SHEET CHANGES", index);
    }, []);
    const [shelf, setShelf] = useState<any[]>([
        {
            "id": 1,
            "name": "John"
        },
        {
            "id": 2,
            "name": "Jane"
        },
        {
            "id": 3,
            "name": "Alice"
        },
        {
            "id": 4,
            "name": "Bob"
        }
    ]
    );
    const [aisle, setAisle] = useState<any[]>([
        {
            "id": 1,
            "name": "Akash",
        },
        {
            "id": 2,
            "name": "Johnny"
        },
        {
            "id": 3,
            "name": "Arun"
        },
        {
            "id": 4,
            "name": "Bobby"
        }
    ]
    );
    const [data,setData] = useState<any>()
    const [value, setValue] = useState('Select');
    const [image, setImage] = useState({
        image: '',
        name: ''
    })
    console.log(value);
    const handlePresentModalPress = useCallback((val: any, name: any) => {
        bottomSheetModalRef.current?.present();
        setImage((prev) => ({ ...prev, image: val, name }));
        if(name=='Shelf List'){
            setData(shelf)
        }else{
            setData(aisle)
        }
    }, []);
    const handlePress = () => {
        console.log("Pressed")
        setValue('Select')
    }
    const handleSubmit = () => {
        console.log("object is my object");
    }
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <Navbar navigation={navigation} />
            <View style={{ zIndex: 5 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity onPress={() => handlePresentModalPress(ImageIndex.shelf, "Shelf List")}>
                            <Card name={'Shelf'} image={ImageIndex.shelf} height={170} />
                        </TouchableOpacity>
                        {value !== 'Select' && (<SelectedCard value={value} handlePress={handlePress} />)}
                    </View>
                    <View style={{ marginVertical: 80, }}>
                        <TouchableOpacity onPress={() => handlePresentModalPress(ImageIndex.aisle, "Aisle List")}>
                            <Card name={'Aisle'} image={ImageIndex.aisle} height={170} />
                        </TouchableOpacity>
                        {value !== 'Select' && (<SelectedCard value={value} handlePress={handlePress} />)}
                    </View>
                </View>
                <View>
                    <ButtonIcon loading={false} name={'Select Shelf'} width={328} handleSubmit={handleSubmit} />
                </View>
                <BottomSheetModalProvider >
                    <BottomSheetModal
                        ref={bottomSheetModalRef}
                        index={1}
                        snapPoints={snapPoints}
                        onChange={handleSheetChanges}
                    >
                        <View style={{ zIndex: 180, backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row', margin: 5, alignItems: 'center' }}>
                                {/* @ts-ignore */}
                                <Image style={{ width: 30, height: 32, margin: 5 }} resizeMode='contain' source={image.image} />
                                <Text style={{ fontSize: 24 }}>{image.name}</Text>
                            </View>
                            <BottomSheetTextInput placeholder='Search or Select....' style={styles.textInput} />
                            <DataComponent bottomSheetModalRef={bottomSheetModalRef} setValue={setValue} image={image} data={data} />
                        </View>
                    </BottomSheetModal>
                </BottomSheetModalProvider>
            </View>
        </SafeAreaView>
    )
}

export default Assign

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        zIndex: 30,
        flex: 1,
    },
    textInput: {
        alignSelf: "stretch",
        marginHorizontal: 12,
        marginBottom: 12,
        padding: 12,
        borderRadius: 10,
        backgroundColor: "white",
        color: "black",
        borderWidth: 1,
    },
    contentContainer: {
        // flex: 1,
        // alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
    container1: {
        flex: 1,
        // Other styles for your container
    },
    linearGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    linearGradient2: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})
