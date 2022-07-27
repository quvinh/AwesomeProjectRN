import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { images, icons, colors } from "../constants";
import { UIButton } from "../components"
import Icon from "react-native-vector-icons/FontAwesome";

function Welcome(props) {
    const [accountTypes, setAccoutTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        },
    ])
    return <View style={{
        backgroundColor: colors.white,
        flex: 1
    }}>
        <ImageBackground
            source={images.background}
            style={{
                flex: 1
            }}
        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image
                        source={icons.fire}
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ color: colors.white, fontWeight: 'bold', fontSize: 18 }}>QUANGVINH.CO</Text>
                    <View style={{ flex: 1 }}></View>
                    {/* <Image
                        source={icons.question}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: colors.white,
                            marginEnd: 10
                        }}
                    /> */}
                    <Icon
                        name={'question-circle'}
                        size={20}
                        style={{
                            color: colors.white,
                            marginEnd: 10
                        }} />
                </View>
            </View>
            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ marginBottom: 7, color: colors.white, fontSize: 14 }}>Welcome to</Text>
                <Text style={{ marginBottom: 7, color: colors.white, fontWeight: 'bold', fontSize: 18 }}>QUANGVINH.CO</Text>
                <Text style={{ marginBottom: 7, color: colors.white, fontSize: 14 }}>Please select your account type</Text>
            </View>
            <View style={{
                flex: 40,
            }}>
                {accountTypes.map((accountType, index) => <UIButton onPress={() => {
                    let newAccounts = accountTypes.map(item => {
                        return {
                            ...item,
                            isSelected: item.name == accountType.name
                        }
                    })
                    setAccoutTypes(newAccounts);
                }}
                    key={index}
                    title={accountType.name}
                    isSelected={accountType.isSelected}
                />)}
            </View>
            <View style={{
                flex: 20,
            }}>
                <UIButton title={'Login'.toUpperCase()} />
                <Text style={{
                    color: colors.white,
                    fontSize: 14,
                    alignSelf: 'center'
                }}>
                    Want to register new account ?
                </Text>
                <TouchableOpacity style={{padding: 10}}>
                    <Text style={{
                        color: colors.orange,
                        fontSize: 14,
                        alignSelf: 'center',
                        textDecorationLine: 'underline'
                    }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}

export default Welcome;