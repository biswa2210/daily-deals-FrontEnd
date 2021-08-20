/*
CREATED BY BISWARUP BHATTACHARJEE
EMAIL    : bbiswa471@gmail.com
PHONE NO : 6290272740
*/
import React from "react"
import { StyleSheet, Image, View,Text,SafeAreaView } from "react-native"

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
             <Image
                source={require("../assets/adaptive-icon.png")}
                resizeMode="contain"
                style={{ height: 75 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 5,
        backgroundColor: "#ebc034"
    }
})

export default Header;
