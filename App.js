import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './src/CustomDrawerContent/CustomDrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;