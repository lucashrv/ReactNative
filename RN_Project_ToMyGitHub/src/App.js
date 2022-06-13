import React from 'react';
import {View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/75911798?v=4'
const urlToMyGithub = 'https://github.com/lucashrv'

const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub)
    if(res){
        await Linking.openURL(urlToMyGithub)
    }
}

const App = () => {
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='dark-content'/>
            <View style={style.content}>
                <Text
                    accessibilityLabel='GitHub Profile'
                    style={[style.defaultText, style.gitProfile]}>
                    GitHub Profile
                </Text>

                <Image style={style.avatar} source={{uri: imageProfileGithub}}/>

                <Text
                    accessibilityLabel='Nome: Lucas Henrique Rocha'
                    style={[style.defaultText, style.name]}>
                    Lucas Henrique Rocha
                </Text>
                <Text
                    accessibilityLabel='Nickname: lucas h r v'
                    style={[style.defaultText, style.nickname]}>
                    lucashrv
                </Text>

                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={{fontWeight: 'bold'}}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',

    },
    content: {
        alignItems: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: 'white',
    },
    gitProfile:{
        fontSize: 35,
        marginBottom: 20
    },
    name:{
        fontSize: 25,
        marginTop: 20
    },
    nickname:{
        fontSize: 20,
        color: '#4F565E',
    },
    button:{
        backgroundColor: '#A7AAAE',
        borderRadius: 10,
        padding: 20,
        marginTop: 30,
    }
})

export default App;