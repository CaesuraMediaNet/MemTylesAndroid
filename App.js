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

// FontAwesome.
//
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Other community libs.
//
import SelectDropdown from 'react-native-select-dropdown'

// Local Components.
//
import Card         from './components/Card';
import GameClock    from './components/scores';
// import WonModal     from './components/WonModal';
import MtRow        from './components/MtRow';
import CardTable    from './components/CardTable';
import Instructions from './components/Instructions';
import {initBoard}  from './components/boards';

// Local functions.
//
import shuffleCards from './functions/shuffleCards';
import flipCard from './functions/flipCard';
// import {addScore, getScores, clearScores} from './functions/scores';



const App: () => Node = () => {
    const [board, setBoard]                         = useState (initBoard);
    const [wonPlay, setWonPlay]                     = useState (false);
    const [wonAllPlay, setWonAllPlay]               = useState (false);
    const [numCards, setNumCards]                   = useState (12);
    const [numClicks, setNumClicks]                 = useState (0);
    const [gameTime,setGameTime]                    = useState(0);
    const [timerAction,setTimerAction]              = useState("start");
    const [scores,setScores]                        = useState ([]);
    const [showPrivacyLink, setShowPrivacyLink]     = useState (false);

    const numCardsRef                               = useRef();
    const instructionsRef                           = useRef();

  useEffect(() => {
        let shuffledBoard = shuffleCards(initBoard.slice(), numCards);
        setBoard        (shuffledBoard);
    }, [numCards])

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

     function Progress () {
        if (wonAllPlay) {
            return (
                <Text>You did {numCards} Tyles in {numClicks} goes and {gameTime} seconds</Text>
            );
        } else {
            return (
                <Text>Goes : {numClicks}</Text>
            );
        }
    }
    function handleTyleClick (card) {
        let { won, wonAll } = flipCard (card, numClicks, setNumClicks, board, setBoard);
        if (won)    setWonPlay    (true);
        if (wonAll) {
            setWonAllPlay (true);
            setTimerAction ((timerAction) => "stop");
        }
    }
    // When a game is won this is called.
    //
    function timeGameTook ({timeS}) {
        setGameTime ((gameTime) => timeS);
        let thisGame = {
            numCards  : numCards,
            numClicks : numClicks,
            gameTime  : timeS,
        }
        // let allScores = addScore (thisGame);
        // setScores (allScores);
    }
    function clearBoard () {
		console.log ("clearBoard called");
        let shuffledCards = shuffleCards(initBoard.slice(), numCards);
        setBoard(shuffledCards);
        setWonPlay(false);
        setWonAllPlay(false);
        setNumClicks(0);
        let now                = Date.now();
        let action             = "reset" + now; // Keep resetting on button click, but action is still "reset".
        if (wonAllPlay) action = "restart";
        setTimerAction ((timerAction) => action);
    }
	function changeNumCards (selectedItem) {
		console.log ("changeNumCards : ", selectedItem);
        setNumCards  (selectedItem);
        clearBoard ();
    }

	function SelectNumCards () {
		return (
			<SelectDropdown
				data={[4, 12, 16, 20, 36, 42, 56]}
				onSelect={(selectedItem, index) => {changeNumCards(selectedItem) }}
			/>
		);
	}

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
		<Button onPress={clearBoard} title="Clear Board" />
        <View
          style={{
			backgroundColor : isDarkMode ? Colors.black : Colors.white,
			flex            : 1,
			flexDirection   : 'row',
			flexWrap        : 'wrap',
          }}>
			<CardTable
				board={board}
				Card={Card}
				handleTyleClick={handleTyleClick}
				numCards={numCards}
			/>
			<Progress />
			<GameClock gameTime={timeGameTook} action={timerAction}  />
			<Text>Select Number of Tyles</Text>
			<SelectNumCards />
			{/*
			<Text>Past Scores</Text>
			<Text>Instructions</Text>
			*/}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
