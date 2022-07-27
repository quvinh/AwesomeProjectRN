import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../constants"

function UIButton(props) {
    const { onPress, title, isSelected } = props
    return <TouchableOpacity 
    onPress={onPress}
    style={{
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        height: 45,
        marginHorizontal: 35,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isSelected ? colors.white : null
    }}>
        {isSelected && <Icon
            name={'check-circle'}
            size={20}
            style={{
                color: 'green',
                position: 'absolute',
                left: 10,
                top: 10,
            }} />}
        <Text style={{
            color: isSelected ? colors.orange : colors.white,
            fontWeight: 'bold'
        }}>{title}</Text>
    </TouchableOpacity>
}

export default UIButton;