/**
 * MemTyles - A simple memory game
 * https://memtyles.com
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {initBoard} from './components/boards';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function handleTyleClick () {
  	return null;
  }

  const [board, setBoard]       = useState (initBoard);
  const [numCards, setNumCards] = useState (12);


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
		keyboardShouldPersistTaps='handled'
        style={backgroundStyle}>
		<Text style={{fontSize : 36, fontWeight : 'bold' }}>
			MemTyles
		</Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
			<Button title="Clear Board" />
			<Text>
				{board.map ((card, index) => {
					console.log ("card.icon : ", card.icon);
					return (
						<Text key={card.id}>{card.cardName} </Text>
					);
				})};
			</Text>
			<Text>Goes : </Text>
			<Text>00:00:00</Text>
			<Text>Select Number of Tyles</Text>
			<Text>Past Scores</Text>
			<Text>Instructions</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
