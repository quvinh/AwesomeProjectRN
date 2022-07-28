import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard } from "react-native";
import { images, icons, colors } from "../../constants";
import { UIButton } from "../../components"
import Icon from "react-native-vector-icons/FontAwesome";

function _getColorFromStatus(status) {
    if (status === 1) {
        return <Text style={{
            color: colors.orange
        }}>COMMING SOON</Text>
    } else if (status === 2) {
        return <Text style={{
            color: colors.success
        }}>OPENING SOON</Text>
    } else if (status === 3) {
        return <Text style={{
            color: colors.danger
        }}>CLOSING SOON</Text>
    }
}

function FoodItem(props) {
    const { url, name, status, price, website, socialNetwork } = props.food
    return <View style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
    }}>
        <Image source={{
            uri: url,
        }}
            style={{
                width: 100,
                height: 100,
                resizeMode: 'cover',
                borderRadius: 10,
                marginRight: 15,
            }} />
        <View style={{
            flex: 1,
            marginRight: 10,
        }}>
            <Text style={{
                color: colors.black,
                fontSize: 14,
                fontWeight: 'bold',
            }}>{name}</Text>
            <View style={{
                height: 1,
                backgroundColor: colors.black
            }}></View>
            <View style={{
                flexDirection: 'row',
            }}>
                <Text style={{
                    color: colors.inactive
                }}>Status: </Text>
                {_getColorFromStatus(status)}
            </View>
            <Text style={{
                color: colors.inactive
            }}>Price: {price} vnd</Text>
            <Text style={{
                color: colors.inactive
            }}>Food type: Tra sua</Text>
            <Text style={{
                color: colors.inactive
            }}>Website: {website}</Text>
            <View style={{
                flexDirection: 'row'
            }}>
                {socialNetwork['facebook'] != undefined && <Icon name="facebook" size={15} color={colors.inactive} style={{
                    paddingEnd: 5,
                }} />}
                {socialNetwork['twitter'] != undefined && <Icon name="twitter" size={15} color={colors.inactive} style={{
                    paddingEnd: 5,
                }} />}
                {socialNetwork['instagram'] != undefined && <Icon name="instagram" size={15} color={colors.inactive} style={{
                    paddingEnd: 5,
                }} />}
            </View>
        </View>
    </View>
}

export default FoodItem