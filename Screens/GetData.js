
import React, { useState,createRef,useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Text, View, Image, Pressable, TextInput ,StatusBar} from 'react-native';
import styles from '../Styles'
import ActionSheet from "react-native-actions-sheet";
import axios from "axios";
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { Color } from '../Constants';
import { KeyboardAwareScrollView } from 'react-native-ui-lib';
const Icon1 = require("../assets/akar-icons_coin.jpg")
const actionSheetRef = createRef();
const GetData = ({navigation}) => {
  const [Coins, setCoins] = useState(0);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [Price, setPrice] = useState(' ')
  
// const fetch=async()=>{
//   const options = {
//     method: 'GET',
//     url: 'https://coingecko.p.rapidapi.com/coins/list',
//     headers: {'x-rapidapi-host': 'coingecko.p.rapidapi.com'}
//   };
  
//   await axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }
//   useEffect (() => {
// fetch();
//   }, [])
  
const Calculate=()=>{

  var Result;
  Result=Price*Coins;
  console.log(Result)
  setCoins(0)
  setPrice('')
  navigation.navigate("SetResult",{Result})
}

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(Platform.OS === 'ios');
    setDate1(currentDate);
  };
  const onChange1 = (event, selectedDate2) => {
    const currentDate = selectedDate2 || date2;
    setShow2(Platform.OS === 'ios');
    setDate2(currentDate);
  };
  const showMode1 = (currentMode) => {
    setShow1(true);
    setMode(currentMode);
  };
  const showMode2= (currentMode) => {
    setShow2(true);
    setMode(currentMode);
  };

  const showDatepicker1 = () => {
    showMode1('date');
  };
  const showDatepicker2 = () => {
    showMode2('date');
  };
const coinValidation=()=>{
  if(Coins!==0)
  {
    setCoins(Coins-1);
  }
  else{
    alert("Sorry Can't be negative");
    setCoins(0);
  }
}
  return (

      <View style={styles.container}>

      <StatusBar hidden={true}/>
      <View style={styles.container__Inside}>
        <Text style={styles.Header}>Crypto Profit Converter</Text>
      </View>
      
      <View style={styles.container__Inside2}>
        <Text style={styles.Text3}>Select CryptoCurrency</Text>
        <Pressable android_ripple={{ color: "#7C7C83", radius: 200, borderless: false }} style={styles.boxes} onPress={() => actionSheetRef.current?.show()}>
          <View style={styles.Inside__Box}>
          <Icon name="coins" size={24} color="#fff" style={{marginRight:7}}  />
            <Text style={styles.Text}>Select CryptoCurrency</Text>
          </View>
        </Pressable>
        <Text style={styles.Text3}>How Much Coin do You Own?</Text>
        <View style={styles.boxes}>
          
          <View style={styles.Inside__Box}>
            <Pressable android_ripple={{ color: "#7C7C83", radius: 25, borderless: true }}  onPress={() => coinValidation()} >
          <Icon2 name="minus-circle" size={50} color="#fff" />
          </Pressable>
          <Text   style={[styles.Text,{textAlign:"center"}]}>{Coins}</Text>
            {/* <TextInput
              placeholder="Coins you Have.."
              placeholderTextColor="#7C7C83"
              style={styles.Text}
              keyboardType="numeric"
              value={Coins}
              onChangeText={()=>setCoins(Coins)}
            />         */}
            <Pressable  android_ripple={{ color: "#7C7C83", radius: 25, borderless: true }}  onPress={() => setCoins(Coins+1)} >
          <Icon2 name="plus-circle" size={50} color="#fff" style={{marginLeft:15}}/>
          </Pressable>
          </View>
        </View>
        <Text style={styles.Text3}>When you Bought the Coins?</Text>
        <Pressable style={styles.boxes} onPress={showDatepicker1}>
          <View style={styles.Inside__Box}>
            <Text style={styles.Text}>{date1.getDate()}-{date1.getMonth()}-{date1.getFullYear()}</Text>
            {show1 && (
              <RNDateTimePicker
                testID="dateTimePicker"
                value={date1}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
        </Pressable>
        <Text style={styles.Text3}>When are you selling the Coins?</Text>
        <Pressable style={styles.boxes} onPress={showDatepicker2}>
          <View style={styles.Inside__Box}>
            <Text style={styles.Text}>{date2.getDate()}-{date2.getMonth()}-{date2.getFullYear()}</Text>
            {show2 && (
              <RNDateTimePicker
                testID="dateTimePicker"
                value={date2}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange1}
              />
            )}
          </View>
        </Pressable>
        <Text style={styles.Text3}>At what price you wish to Sell?</Text>
      <View style={styles.boxes}>
          <View style={styles.Inside__Box}>
        <KeyboardAwareScrollView >
            <TextInput
              placeholder="Your Selling Price"
              placeholderTextColor="#7C7C83"
              style={styles.Text}
              keyboardType="numeric"
              value={Price}
              onChangeText={(Price)=>setPrice(Price)}
            />
        </KeyboardAwareScrollView>
          </View>
        </View>
        <Pressable android_ripple={{ color: "#c4c4c4", radius: 200, borderless: false }} style={styles.ButtonView} onPress={() =>Calculate()}>
          <View style={styles.Button}>
            <Text style={styles.Text}>Calculate Your Profit</Text>
          </View>
        </Pressable>
      </View>

      <ActionSheet ref={actionSheetRef} gestureEnabled={true} containerStyle={{borderTopLeftRadius:20,borderTopRightRadius:20}}>
        <View style={{height:500,backgroundColor:Color.Primary,borderTopLeftRadius:20,borderTopRightRadius:20,}}>
          <Pressable android_ripple={{ color: "#c4c4c4", radius: 240, borderless: false }} onPress={() =>console.log("Presse")} >
          <View style={{flexDirection:"row",alignItems:"center" ,justifyContent:"space-between",paddingHorizontal:20,paddingVertical:10}}>
         <View style={{flexDirection:"row",alignItems:"center",}}>
         <Icon name="bitcoin" size={36} color={Color.Secondary} style={{marginLeft:7}}/>
         <Text style={styles.Text3}>Bitcoin</Text>
         </View>
         <View>
           <Text style={styles.Text3}>
             $40,000
           </Text>
         </View>
         </View>
         </Pressable>
        </View>
      </ActionSheet>

      </View>
  );
}

export default GetData;