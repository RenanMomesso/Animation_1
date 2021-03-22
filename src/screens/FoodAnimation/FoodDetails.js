import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { SharedElement  } from 'react-native-shared-element'

const animation = {
    0: { opacity: 0, translateY: 300, translateX: 400 },
    1: { opacity: 1, translateY: 0, translateX: 0 },
}
const animationImage = {
    0: { opacity: 0, translateX: -400 },
    1: { opacity: 1, translateX: 0 },
}

const createAnmation = (from) => ({
    0: { opacity: 0, translateY: -100, translateX: from },
    1: { opacity: 1, translateY: 0, translateX: 0 },
})

const animations = [
    createAnmation(100),
    createAnmation(0),
    createAnmation(-100)
]

const DURATION = 400

const SPACING = 17;

const CELL_WIDTH = 400 * 0.70
const CELL_HEIGHT = CELL_WIDTH * 1.1
const FULL_SIZE = CELL_WIDTH + SPACING * 2;
const FoodAnimation = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }} key={item.key}>
            <View style={[StyleSheet.absoluteFillObject, { justifyContent: 'space-around', backgroundColor: item.color, borderRadius: 16 }]}>
                <View style={{ flex: 1, padding: SPACING, justifyContent: 'center' }}>
                    <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFill]}>
                        <View style={[StyleSheet.absoluteFill, { backgroundColor: item.color, borderRadius: 16 }]} />
                    </SharedElement>
                    <SharedElement id={`item.${item.key}.meta`} style={StyleSheet.absoluteFillObject}>
                        <View style={{ position: 'absolute', top: SPACING * 3, left: SPACING }}>
                            <Text style={styles.type}>{item.type}</Text>
                            <Text style={styles.subType}>{item.subType}</Text>
                        </View>
                    </SharedElement>
                    <SharedElement id={`item.${item.key}.image`} style={[StyleSheet.absoluteFillObject]}>

                        <Image source={{ uri: item.image }} style={styles.image} />
                    </SharedElement>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: SPACING * 10, marginBottom: SPACING }}>
                        {item.subcategories.map((subCategory, index) => {
                            return (
                                <Animatable.View
                                    key={index}
                                    useNativeDriver
                                    duration={DURATION + 500}
                                    animation={animations[index]}
                                    style={{ backgroundColor: item.fullColor, padding: SPACING * 0.7, borderRadius: SPACING * 10 }}
                                >
                                    <Image source={{ uri: subCategory.image }} style={{ width: 32, height: 32, resizeMode: 'contain' }} />
                                </Animatable.View>
                            )
                        })}
                    </View>

                    <View style={{ padding: SPACING }}>
                        <Animatable.Text
                            useNativeDriver
                            animation={animation}
                            duration={DURATION + 1400}
                            style={{ fontSize: 32, fontWeight: '700', marginBottom: SPACING / 2 }}>
                            {item.price}
                        </Animatable.Text>
                        <Animatable.Text
                            useNativeDriver
                            animation={animation}
                            duration={DURATION + 1400}
                            style={{ fontSize: 14, lineHeight: 20, opacity: 0.7 }}>
                            {item.description}
                        </Animatable.Text>
                    </View>
                </View>
            </View>
            <Text onPress={() => navigation.goBack()} style={styles.closeItem}>
                X
              </Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    closeItem: {
        padding: SPACING,
        top: SPACING + 10,
        right: SPACING,
        position: 'absolute',
        zIndex: 2,
        fontSize: 20,
    },
    image: {
        width: CELL_WIDTH * 0.7,
        height: CELL_WIDTH * 0.7,
        borderWidth: 1,
        alignSelf: 'center',
        resizeMode: 'contain',
        position: 'absolute',
        top: SPACING * 7,
        marginVertical: SPACING,
        zIndex: 2
    },
    popularType: {
        fontWeight: '800',
        fontSize: 16
    },
    type: {
        fontWeight: 'bold',
        fontSize: 24
    },
    subType: {
        fontSize: 12,
        opacity: 0.8
    },

})



FoodAnimation.sharedElements = (route, otherRoute, showing) => {
    const { item } = route.params;
    console.log(item)
    console.log("SHARED ELEMENT ITEM", `item.${item.key}.bg`)
    return [
        {
            id: `item.${item.key}.bg`
        },
        {
            id: `item.${item.key}.meta`
        },
        {
            id: `item.${item.key}.bg`
        },
    ]
}
export default FoodAnimation;