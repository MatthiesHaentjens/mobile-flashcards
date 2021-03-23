import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "blue",
        height: 50
    },
    title: {
        fontSize: 14,
        textAlign: "center",
        display: "flex",
        alignSelf: "center"
    }
})
