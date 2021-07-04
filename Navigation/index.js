import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {GetData,SetResult} from '../Screens'
const Stack = createStackNavigator();
function MainStack() {
      return (
          <Stack.Navigator initialRouteName="GetData" headerMode="Screen">
              <Stack.Screen name="GetData" component={GetData} options={{ headerShown: false }} />
              <Stack.Screen name="SetResult" component={SetResult} />
            </Stack.Navigator>
      )
}
export default MainStack