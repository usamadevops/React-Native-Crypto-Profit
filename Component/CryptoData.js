import React from 'react'
import { View, Text, ScrollView,FlatList,Pressable } from 'react-native';
import styles from '../Styles';
import { Color } from '../Constants';

const CryptoData = ({selected,Data,closeModal}) => {
    return (
        <ScrollView
        // ref={actionSheetRef
        style={{height: '100%'}}
        nestedScrollEnabled={true}>
        <FlatList
          data={Data}
          showsVerticalScrollIndicator={true}
          initialNumToRender={100}
          keyExtractor={key => key.id}
          renderItem={({item}) => (
            <View
              style={{
                padding: 5,
                backgroundColor: Color.Primary,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <Pressable
                android_ripple={{
                  color: '#c4c4c4',
                  radius: 240,
                  borderless: false,
                }}
                onPress={() => {
                  const name = item.name.slice(10, 18);
                  selected(name);
                  closeModal();
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.Text3}>
                      {item.name.slice(10, 18)}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.Text3}>$40,000</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          )}
        />
      </ScrollView>
    )
}

export default CryptoData
