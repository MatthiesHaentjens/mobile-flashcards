import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeckCarousel from './DeckCarousel';

export default class DeckDashboard extends Component {
    render() {
        return (
            <View>
                <Text># decks</Text>
                <DeckCarousel />
            </View>
        )
    }
}