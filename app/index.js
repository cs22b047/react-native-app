import { useState } from "react";
import { View,ScrollView,SafeAreaView } from "react-native";
import { Stack,useRouter } from "expo-router";
import { COLORS, images, icons, SIZES} from "../constants";

import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from '../components';
const Home = () =>{
    return(
        <SafeAreaView style={{flex: 1, backgroundColor:COLORS.aliceblue }}>
            <Stack.Screen 
                options={{headerStyle: {backgroundColor:COLORS.lightWhite},
                    headerShadowVisible: true,
                    headerTitle: "",
                    headerLeft: () => {
                        return <ScreenHeaderBtn iconUrl={icons.menu} dimension = "60%"/>
                    },
                    headerRight: () => {
                        return <ScreenHeaderBtn iconUrl={icons.profile} dimension = "60%"/>
                    }
                }}
            />
            <ScrollView>
                <View style={{flex: 1, padding: SIZES.medium}}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;