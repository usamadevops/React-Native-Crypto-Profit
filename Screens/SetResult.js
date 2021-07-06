
import React, { useState, createRef } from 'react';
import { Text, View, Image, Pressable, TextInput, StatusBar } from 'react-native';
import styles from '../Styles'
import { Color, Font } from '../Constants'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ExpandableSection } from 'react-native-ui-lib';
const Icon1 = require("../assets/akar-icons_coin.jpg")
function SetResult({ navigation, route }) {
  const [ProfitExpanded, setProfitExpanded] = useState(false);
  const [LossExpanded, setLossExpanded] = useState(false);
  const ProfitView = () => {
    return (
 
        <View style={{width:350,height:70,backgroundColor:Color.Secondary,flexDirection:"row",alignItems:"center",borderWidth:2,borderRadius:15,marginVertical:10,paddingLeft:10}}>
          <Icon name="waterfall-chart" size={30} color="#2AEB60" />
          <Text style={styles.Text2}>Profit You'll Have</Text>
      <Icon name="keyboard-arrow-down"  size={30} color="#2AEB60" />
      </View>
    );
  }
  const LossView = () => {
    return (
 
        <View style={{width:350,height:70,backgroundColor:Color.Secondary,flexDirection:"row",alignItems:"center",borderWidth:2,borderRadius:15,marginVertical:10,paddingLeft:10}}>
          <Icon name="waterfall-chart" size={30} color="#FA7D7D" />
          <Text style={styles.Text2}>Loss You'll Have</Text>
      
      </View>
    );
  }
  const onExpandProfit = () => {
    if (ProfitExpanded=== false) {
      setProfitExpanded(true)
    }
    else
    {
      setProfitExpanded(false)
    }
  }
  const onExpandLoss = () => {
    if (LossExpanded=== false) {
      setLossExpanded(true)
    }
    else
    {
      setLossExpanded(false)
    }
  }
  const ResultView = () => {
    return (
      <View style={styles.ResultBox}>
   
          <Text style={styles.ResultTextBig}>{Result}</Text>
          <Text style={styles.ResultTextSmall}>USD</Text>
   
      </View>
    );
  }

  const { Result } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.container__Inside}>

        <Text style={styles.Header}>Crypto Profit Converter</Text>
      </View>

      <View style={styles.container__Inside2}>
      <ExpandableSection
          onPress={() => onExpandProfit()}
          expanded={ProfitExpanded}
          sectionHeader={ProfitView()}
        >
          {ResultView()}
        </ExpandableSection>
        <ExpandableSection
          onPress={() => onExpandLoss()}
          expanded={LossExpanded}
          sectionHeader={LossView()}
        >
          {ResultView()}
        </ExpandableSection>


        <Pressable android_ripple={{ color: "#c4c4c4", radius: 200, borderless: false }} style={[styles.ButtonView, { position: "absolute", bottom: 50 }]} onPress={() => navigation.navigate("GetData")}>
          <View style={styles.Button}>
            <Text style={styles.Text}>Wanna Do it Again</Text>
          </View>
        </Pressable>

      </View>
    </View>
  );
}

export default SetResult;
