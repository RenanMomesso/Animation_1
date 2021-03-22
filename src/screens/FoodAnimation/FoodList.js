import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Food, { ORANGE, popularFood, tabs } from './Food'
import { SharedElement } from 'react-native-shared-element'

const CELL_WIDTH = 400 * 0.70
const CELL_HEIGHT = CELL_WIDTH * 1.1
const SPACING = 10
const FULL_SIZE = CELL_WIDTH + SPACING * 2;

export default function FoodList() {

    const navigation = useNavigation()
    const [selectedTab, setSelectedTab] = React.useState(tabs[0])
    console.log(selectedTab)
    return (
        <ScrollView style={{ paddingTop: 100 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    contentContainerStyle={{ padding: 10 }}
                    style={{ flexGrow: 0 }}
                    data={tabs}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => setSelectedTab(item)}>
                                <View style={{ padding: 5, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: selectedTab === item ? ORANGE : 'transparent' }}>
                                    <Text style={{ fontWeight: '700', color: selectedTab === item ? 'white' : 'black', fontSize: 20 }}>
                                        {item}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                <FlatList
                    data={Food}
                    keyExtractor={item => item.key}
                    style={{ flex: 1 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={FULL_SIZE}
                    decelerationRate="fast"
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('foodDetails', { item })} style={{ width: CELL_WIDTH, height: CELL_HEIGHT, margin: SPACING }}>
                                <View style={{ flex: 1, padding: SPACING, justifyContent: 'center' }}>
                                    <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFill]}>

                                        <View style={[StyleSheet.absoluteFill, { backgroundColor: item.color, borderRadius: 16 }]} />
                                    </SharedElement>

                                    <SharedElement id={`item.${item.key}.meta`} style={StyleSheet.absoluteFillObject }>

                                        <View style={{ position: 'absolute', top: SPACING, left: SPACING }}>
                                            <Text style={styles.type}>{item.type}</Text>
                                            <Text style={styles.subType}>{item.subType}</Text>
                                        </View>
                                    </SharedElement>
                                    <SharedElement id={`item.${item.key}.image`} style={[styles.image]}>
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                    </SharedElement>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />

                <FlatList
                    data={popularFood}
                    keyExtractor={item => item.key}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row', padding: SPACING, alignItems: 'center' }}>
                                <Image source={{ uri: item.image }} style={styles.popularImage} />
                                <View style={{ flex: 1 }} >
                                    <Text style={[styles.popularType]}>{item.type}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 30, color: 'orange' }}>*</Text>
                                        <Text style={{ fontWeight: '700' }}>{item.raiting}</Text>
                                    </View>
                                </View>
                                <Text style={[styles.popularPrice]}>{item.price}</Text>
                            </View>
                        )
                    }
                    }
                />
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    popularImage: {

    },
    popularPrice: {},
    popularImage: {
        width: 54,
        height: 54,
        resizeMode: 'contain',
        marginRight: SPACING
    },
    popuparPrice: {
        alignSelf: 'flex-end'
    },
    popularType: {
        fontWeight: '800',
        fontSize: 16
    },
    type: {
        fontWeight: '800',
        fontSize: 22
    },
    subType: {
        fontSize: 12,
        opacity: 0.8
    },
    image: {
        width: CELL_WIDTH * 0.7,
        height: CELL_WIDTH * 0.7,
        alignSelf: 'center',
        resizeMode: 'contain',
        position: 'absolute'
    }
})