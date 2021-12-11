import moment from 'moment';
import React, { useState, createRef, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  StatusBar,
  RefreshControl,
  FlatList,
} from 'react-native';
import styles from '../Styles';
import ActionSheet from 'react-native-actions-sheet';
import axios from 'axios';
import Data from '../assets/Data.json';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { Color } from '../Constants';
import { KeyboardAwareScrollView } from 'react-native-ui-lib';
import CryptoData from '../Component/CryptoData';
const Icon1 = require('../assets/akar-icons_coin.jpg');
const actionSheetRef = createRef();
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const GetData = ({ navigation }) => {
  const [Coins, setCoins] = useState(0);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [Price, setPrice] = useState('');
  const [SelectedCurrency, setSelectedCurrency] = useState(
    'Select Cryptocurrency',
  );
  const TodayDate = new Date();
  const MinDateToSell = TodayDate.getHours() + 24;
  const MinDateToBuy=new Date().setFullYear(2010, 11, 3)
  const MaxDateToSell = new Date().setFullYear(2040, 11, 3);
  const x = new moment(date1);
  const y = new moment(date2);
  const Days = moment.duration(y.diff(x));
  const Selling = moment.duration(y.diff(TodayDate));
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchandShow();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const fetchandShow = async () => {
    var options = {
      method: 'GET',
      url: 'https://coingecko.p.rapidapi.com/coins/%7Bid%7D',
      params: {
        localization: 'true',
        tickers: 'true',
        market_data: 'true',
        community_data: 'true',
        developer_data: 'true',
        sparkline: 'false',
      },
      headers: {
        'x-rapidapi-key': 'baa16a845cmshb3b3d7f2b8245b0p1e8cc3jsne3a316a8e0a4',
        'x-rapidapi-host': 'coingecko.p.rapidapi.com',
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        let tmpArray = [];
        for (var i = 0; i < response.data.length; i++) {
          tmpArray.push(response.data[i].name);
        }

        setdata(tmpArray);
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const Calculate = () => {
    var Result;
    // var TimeDifference = date2.getTime() - date1.getTime();
    // var DateDifference = (TimeDifference / (1000 * 3600 * 24)).toFixed(0);
    console.log(Days);
    if (Price === 0 || (Price === null) & (Coins < 1) || Coins === 0) {
      alert("You haven't added values yet");
    } else {
      Result = Price * Coins;
      console.log(Result);
      setCoins(0);
      setPrice('');
      navigation.navigate('SetResult', { Result });
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date1;
    setShow1(Platform.OS === 'ios'); 
      setDate1(currentDate);
  };
  const onChange1 = (event, selectedDate2) => {
    const currentDate = selectedDate2 || date2 ;
    setShow2(Platform.OS === 'ios');
    if(date2<TodayDate)
    {setDate2(currentDate);}
  };
  const showMode1 = currentMode => {
    setShow1(true);
    setMode(currentMode);
  };
  const showMode2 = currentMode => {
    setShow2(true);
    setMode(currentMode);
  };

  const showDatepicker1 = () => {
    showMode1('date');
  };
  const showDatepicker2 = () => {
    showMode2('date');
  };
  const coinValidation = () => {
    if (Coins !== 0) {
      setCoins(Coins - 1);
    } else {
      alert("Sorry Can't be negative");
      setCoins(0);
    }
  };
  function CloseSheet() {
    actionSheetRef.current?.hide();
  }
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.container__Inside}>
        <Text style={styles.Header}>Crypto Profit Converter</Text>
      </View>

      <View style={styles.container__Inside2}>
        <Text style={styles.Text3}>Select CryptoCurrency</Text>
        <Pressable
          android_ripple={{ color: '#7C7C83', radius: 200, borderless: false }}
          style={styles.boxes}
          onPress={() => actionSheetRef.current?.show()}>
          <View style={styles.Inside__Box}>
            <Icon
              name="coins"
              size={24}
              color="#fff"
              style={{ marginRight: 7 }}
            />
            <Text style={styles.Text}>{SelectedCurrency}</Text>
          </View>
        </Pressable>
        <Text style={styles.Text3}>How Much Coin do You Own?</Text>
        <View style={styles.boxes}>
          <View style={styles.Inside__Box}>
            <Pressable
              android_ripple={{ color: '#7C7C83', radius: 25, borderless: true }}
              onPress={() => coinValidation()}>
              <Icon2 name="minus-circle" size={50} color="#fff" />
            </Pressable>
            <Text style={[styles.Text, { textAlign: 'center' }]}>{Coins}</Text>
            {/* <TextInput
              placeholder="Coins you Have.."
              placeholderTextColor="#7C7C83"
              style={styles.Text}
              keyboardType="numeric"
              value={Coins}
              onChangeText={()=>setCoins(Coins)}
            />         */}
            <Pressable
              android_ripple={{ color: '#7C7C83', radius: 25, borderless: true }}
              onPress={() => setCoins(Coins + 1)}>
              <Icon2
                name="plus-circle"
                size={50}
                color="#fff"
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          </View>
        </View>
        <View style={{flexDirection:'row',alignSelf:'flex-start',justifyContent:'space-between'}}>
        <Text style={styles.Text3}>You Bought the Coins?</Text>
        <Text style={styles.Text3}>{Days.asDays().toFixed(0)} Days Ago</Text>

        </View>
        <Pressable style={styles.boxes} onPress={showDatepicker1}>
          <View style={styles.Inside__Box}>
            <Text style={styles.Text}>
            {moment(date1).format('LL')}
            </Text>
            {show1 && (
              <RNDateTimePicker
                testID="dateTimePicker"
                value={date1}
                mode={mode}
                minimumDate={MinDateToBuy}
                maximumDate={TodayDate}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}

          </View>
        </Pressable>
        <View style={{flexDirection:'row',alignSelf:'flex-start',justifyContent:'space-between'}}>
        <Text style={styles.Text3}>You are selling the Coins?</Text>
        <Text style={styles.Text3}>After {Selling.asDays().toFixed(0)} Days</Text>
        </View>
        <Pressable style={styles.boxes} onPress={showDatepicker2}>
          <View style={styles.Inside__Box}>
            <Text style={styles.Text}>
            {moment(date2).format('LL')}
            </Text>
            {show2 && (
              <RNDateTimePicker
                testID="dateTimePicker"
                value={date2}
                minimumDate={TodayDate}
                maximumDate={MaxDateToSell}
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
            <KeyboardAwareScrollView>
              <TextInput
                placeholder="Your Selling Price"
                placeholderTextColor="#7C7C83"
                style={styles.Text}
                keyboardType="numeric"
                value={Price}
                onChangeText={Price => setPrice(Price)}
              />
            </KeyboardAwareScrollView>
          </View>
        </View>
        <Pressable
          android_ripple={{ color: '#c4c4c4', radius: 200, borderless: false }}
          style={styles.ButtonView}
          onPress={() => Calculate()}>
          <View style={styles.Button}>
            <Text style={styles.Text}>Calculate Your Profit</Text>
          </View>
        </Pressable>
      </View>

      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          height: 500,
          // borderTopLeftRadius: 20,
          // borderTopRightRadius: 20,
        }}
        // animated={true}
        headerAlwaysVisible={true}
        openAnimationSpeed={1000}
        closeAnimationDuration={500}
        // gestureEnabled={true}
        nestedScrollEnabled={true}>
        <CryptoData selected={setSelectedCurrency} closeModal={CloseSheet} Data={Data} />
      </ActionSheet>
    </View>
  );
};

export default GetData;
