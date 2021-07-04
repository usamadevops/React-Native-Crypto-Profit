
import React, { useState,createRef } from 'react';
import { Text, View, Image, Pressable, TextInput ,StatusBar} from 'react-native';
import styles from '../Styles'

const Icon1 = require("../assets/akar-icons_coin.jpg")
function SetResult({navigation}) {
  return (
    <View  style={styles.container}>
    <StatusBar hidden={true}/>
    <View style={styles.container__Inside}>
      <Image source={Icon1} width={24} height={24} />
      <Text style={styles.Header}>Crypto Profit Converter</Text>
    </View>
    <View style={{ borderWidth: 3, height: 4, width: ("28%"), borderRadius: 30, position: "absolute", top: ("11.4%"), left: ("29%") }} />
    <View style={styles.container__Inside2}>
      <View  style={[styles.boxes,{borderWidth:3,borderColor:"#FFdddd"}]}>
        <View style={styles.Inside__Box}>
          <Text style={styles.Text2}>Profit You'll Have</Text>
        </View>
      </View>
      <View style={styles.ResultBox}>
          <View style={[styles.Inside__Box,{ justifyContent:"center"}]}>
    <Text style={styles.ResultTextBig}>5000</Text>
    <Text style={styles.ResultTextSmall}>USD</Text>
          </View>
        </View>
        <Pressable android_ripple={{ color: "#c4c4c4", radius: 200, borderless: false }} style={styles.ButtonView} onPress={() =>navigation.navigate("GetData")}>
          <View style={styles.Button}>
            <Text style={styles.Text}>Wanna Do it Again</Text>
          </View>
        </Pressable>

      </View>
      </View>
  );
}

export default SetResult;
