import React, { useState, useEffect } from "react";
import { Text, View, Image, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from "react-native";
import { images, icons, colors } from "../../constants";
import { UIButton } from "../../components"
import Icon from "react-native-vector-icons/FontAwesome";
import FoodItem from "./FoodItem";

function FoodList(props) {
    const [foods, setFoods] = useState([
        {
            name: 'Trà sữa trân châu nướng bách nghệ matcha xay lạnh',
            status: 1,
            price: '20000',
            website: 'https://trasuatet.xyz',
            url: 'https://trasuatet.xyz/images/product/hZZIv_TSKM.png',
            socialNetwork: {
                twitter: 'http://127.0.0.1:8000',
                instagram: 'http://127.0.0.1:8000',
            }
        },
        {
            name: 'Trà sữa trân châu đường đen',
            status: 2,
            price: '15000',
            website: 'https://trasuatet.xyz',
            url: 'https://trasuatet.xyz/images/product/hZZIv_TSKM.png',
            socialNetwork: {
                instagram: 'http://127.0.0.1:8000',
            }
        },
        {
            name: 'Cafe đen',
            status: 3,
            price: '10000',
            website: 'https://trasuatet.xyz',
            url: 'https://trasuatet.xyz/images/product/hZZIv_TSKM.png',
            socialNetwork: {
                facebook: 'http://127.0.0.1:8000',
            }
        },
    ])
    return <View style={{
        flex: 1,
        backgroundColor: colors.white,
    }}>
        <View>
            <ScrollView>
                {foods.map((food, key) => <FoodItem key={key} food={food} />)}
            </ScrollView>
        </View>
    </View>
}

export default FoodList