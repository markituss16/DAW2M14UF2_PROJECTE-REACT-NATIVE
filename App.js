import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './App/screens';
import {HelpScreen} from './App/screens';
import {GameScreen} from './App/screens';
import {ScoreScreen} from './App/screens';
import {ImageScreen} from './App/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inici',
            headerStyle: {
              backgroundColor: '#1F1F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="ImageSelector"
          component={ImageScreen}
          options={{
            title: 'Imatges',
            headerStyle: {
              backgroundColor: '#1F1F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Jugar"
          component={GameScreen}
          options={{
            title: 'Jugar',
            headerStyle: {
              backgroundColor: '#1F1F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Puntuacions"
          component={ScoreScreen}
          options={{
            title: 'Puntuacions',
            headerStyle: {
              backgroundColor: '#1F1F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Ajuda"
          component={HelpScreen}
          options={{
            title: 'Ajuda',
            headerStyle: {
              backgroundColor: '#1F1F1F',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  stack: {
    backgroundColor: '#1F1F1F',
  },
});

export default App;
