import React from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { images, icons } from "../constants";
import { UIButton } from "../components"

function Welcome(props) {
    return <View style={{
        backgroundColor: 'white',
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
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>QUANGVINH.CO</Text>
                    <View style={{ flex: 1 }}></View>
                    <Image
                        source={icons.question}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: 'white',
                            marginEnd: 10
                        }}
                    />
                </View>
            </View>
            <View style={{
                flex: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{marginBottom: 7, color: 'white', fontSize: 12}}>Welcome to</Text>
                <Text style={{marginBottom: 7, color: 'white', fontWeight: 'bold'}}>QUANGVINH.CO</Text>
                <Text style={{marginBottom: 7, color: 'white', fontSize: 12}}>Please select your account type</Text>
            </View>
            <View style={{
                flex: 40,
            }}>
                <UIButton onPress={() => {
                    alert('alo')
                }}
                title={'Influence'}
                isSelected={true} />
            </View>
            <View style={{
                flex: 20,
                backgroundColor: 'purple'
            }}>
            </View>
        </ImageBackground>
    </View>
}

export default Welcome;