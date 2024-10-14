import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useState } from "react";

export default function Product({name, price, image, onPress, title}){

    const handleCart = () => onPress()
    
    return (
        <View style={styles.product}>
            <Image source={{uri : image}} width={150} height={150} style={styles.productImg}/>
            
            <View style={styles.productTexts}>
                <Text>{name}</Text>
                <Text>{price}</Text>
            </View>

            <Button title={title} onPress={handleCart}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    // :{ },

    productTexts:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },

    product: {
        backgroundColor: '#DDD',
        margin: 20,
        padding: 10,
        borderRadius: 10
    },

    productImg: {
        alignSelf: 'center'
    },


})