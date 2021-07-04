
import 'react-native-gesture-handler';
import * as  React from 'react';
import MainStack from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
<NavigationContainer>
    <MainStack/>
 </NavigationContainer>
  );
}