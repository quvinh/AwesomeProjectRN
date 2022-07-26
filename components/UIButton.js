import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function UIButton(props) {
    return <TouchableOpacity 
    onPress={props.onPress}
    style={{
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        height: 45,
        marginHorizontal: 35,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }}>
        <Icon
            name={'check-circle'}
            size={20}
            style={{
                color: 'green',
                position: 'absolute',
                left: 10,
                top: 10,
            }} />
        <Text style={{
            color: 'orange',
        }}>{props.title}</Text>
    </TouchableOpacity>
}

export default UIButton;