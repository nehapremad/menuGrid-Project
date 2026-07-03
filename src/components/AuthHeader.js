import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const AuthHeader = () => {
    return (
        <>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/Image/MENUGRID_logo 1.png')}
                    style={styles.image} />
            </View>
        </>
    )
}

export default AuthHeader

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 60,
    },

    image: {
        height: 50,
        width: 200
    },
})