
import React, { useState,createRef } from 'react';
import { Text, View, Image, Pressable, TextInput ,StatusBar} from 'react-native';
import styles from '../Styles'
import RNDateTimePicker from '@react-native-community/datetimepicker'
const Icon1 = require("../assets/akar-icons_coin.jpg")
const GetData = ({navigation}) => {
  const [Coins, setCoins] = useState("");
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
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

  return (

    <View  style={styles.container}>
      <StatusBar hidden={true}/>
      <View style={styles.container__Inside}>
        <Image source={Icon1} width={24} height={24} />
        <Text style={styles.Header}>Crypto Profit Converter</Text>
      </View>
      <View style={{ borderWidth: 3, height: 4, width: ("28%"), borderRadius: 30, position: "absolute", top: ("11.4%"), left: ("29%") }} />
      <View style={styles.container__Inside2}>
        <Pressable android_ripple={{ color: "#7C7C83", radius: 200, borderless: false }} style={styles.boxes} onPress={() => console.log("pressed")}>
          <View style={styles.Inside__Box}>
            <Text style={styles.Text}>Select CryptoCurrency</Text>
          </View>
        </Pressable>

        <View style={styles.boxes}>
          <View style={styles.Inside__Box}>
            <TextInput
              placeholder="Coins you Have.."
              placeholderTextColor="#7C7C83"
              style={styles.Text}
              keyboardType="numeric"
            />
          </View>
        </View>
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

        <View style={styles.boxes}>
          <View style={styles.Inside__Box}>
            <TextInput
              placeholder="Your Selling Price"
              placeholderTextColor="#7C7C83"
              style={styles.Text}
              keyboardType="numeric"
            />
          </View>
        </View>

        <Pressable android_ripple={{ color: "#c4c4c4", radius: 200, borderless: false }} style={styles.ButtonView} onPress={() =>navigation.navigate("SetResult")}>
          <View style={styles.Button}>
            <Text style={styles.Text}>Calculate Your Profit</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default GetData;