import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Drawer/Home/Home';
import SettingsScreen from './Drawer/Settings/Settings';
import LanguagesContextProvider from './Drawer/Context/Languages/LanguagesContext';
import { Languages } from './Drawer/Context/Languages/LanguagesContext';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <LanguagesContextProvider >
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </LanguagesContextProvider>
  );
}