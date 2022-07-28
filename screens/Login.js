import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard } from "react-native";
import { images, icons, colors } from "../constants";
import { UIButton } from "../components"
import Icon from "react-native-vector-icons/FontAwesome";
import {isValidEmail, isValidPassword} from '../utilies/Validations';

function Login(props) {
    const [keyboardIsShow, setKeyboardIsShow] = useState(false);

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOK, setIsLoginOK] = useState(false);
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardIsShow(false)
        })
    })
    return <KeyboardAvoidingView 
    // behavior={{Platform:OS === 'ios' ? 'padding' : 'height'}}
    style={{
        flex: 1,
        backgroundColor: colors.white
    }}>
        <View style={{
            height: 200,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 25,
        }}>
            <Text style={{
                color: colors.black,
                fontSize: 20,
                fontWeight: 'bold',
                width: '50%'
            }}>Already have an Account?</Text>
            <Image source={images.computer} style={{
                width: 120,
                height: 120,
                alignSelf: 'center',
            }} />
        </View>
        <View style={{
            marginHorizontal: 15,
            flex: 30,
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 14,
                color: colors.orange,
            }}>Email: <Text style={{color: 'red', fontStyle: 'italic'}}>{errorEmail}</Text></Text>
            <TextInput placeholder="example@gmail.com"
                onChangeText={(text) => {
                    setErrorEmail(isValidEmail(text) ? '' : '(*) Email not is correct format.')
                    setEmail(text)
                    isValidEmail(text) && isValidPassword(password) ? setIsLoginOK(true) : setIsLoginOK(false)
                }}
                placeholderTextColor={colors.placeholder} />
            <View style={{
                height: 1,
                backgroundColor: colors.orange,
                marginBottom: 15,
                marginTop: -10,
                alignSelf: 'center',
                width: '100%',
            }}></View>
            <Text style={{
                fontSize: 14,
                color: colors.orange,
            }}>Password: <Text style={{color: 'red', fontStyle: 'italic'}}>{errorPassword}</Text></Text>
            <TextInput placeholder="Enter your password"
                onChangeText={(text) => {
                    setErrorPassword(isValidPassword(text) ? '' : '(*) Password must be at least 6 characters.')
                    setPassword(text)
                    isValidEmail(email) && isValidPassword(text) ? setIsLoginOK(true) : setIsLoginOK(false)
                }}
                secureTextEntry={true}
                placeholderTextColor={colors.placeholder} />
            <View style={{
                height: 1,
                backgroundColor: colors.orange,
                marginBottom: 15,
                marginTop: -10,
                alignSelf: 'center',
                width: '100%',
            }}></View>
        </View>
        {!keyboardIsShow && <View style={{
            marginHorizontal: 15,
            flex: 25,
            justifyContent: 'center',
        }}>
            <TouchableOpacity style={{
                backgroundColor: isLoginOK ? colors.orange : colors.inactive,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: '60%',
                borderRadius: 18
            }}>
                <Text style={{
                    padding: 8,
                    fontSize: 18,
                    color: colors.white,
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: '60%',
                borderRadius: 18
            }}>
                <Text style={{
                    padding: 5,
                    fontSize: 16,
                    color: colors.orange,
                }}>New user? Register now</Text>
            </TouchableOpacity>
        </View>}
        <View style={{
            flex: 20,
            // backgroundColor: 'purple'
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 20,
            }}>
                <View style={{ height: 1, backgroundColor: colors.black, flex: 1 }}></View>
                <Text style={{
                    padding: 8,
                    fontSize: 14,
                    color: colors.black,
                    marginHorizontal: 10
                }}>User other method ?</Text>
                <View style={{ height: 1, backgroundColor: colors.black, flex: 1 }}></View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Icon name="facebook" size={35} color={colors.facebook} />
                <View style={{ width: 20 }}></View>
                <Icon name="google" size={35} color={colors.google} />
            </View>
        </View>
    </KeyboardAvoidingView>
}

export default Login