/**
 * MemTyles - A simple memory game
 * https://memtyles.com
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { useState }  from 'react';
import { useEffect } from 'react';
import { useRef }    from 'react';

import type {Node}   from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Button,
	FlatList,
	TouchableOpacity,
	Image,
} from 'react-native';

// FontAwesome.
//
import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
	faQuestion,
	faPlus,
	faMinus,
	faPlay,
} from '@fortawesome/free-solid-svg-icons';

// Other community libs.
//
// https://www.npmjs.com/package/react-native-drop-shadow
import DropShadow     from "react-native-drop-shadow";
import Video          from 'react-native-video';
import SplashScreen   from 'react-native-splash-screen';

// Local Components.
//
import styles       from './styles';
import Card         from './components/Card';
import GameClock    from './components/GameClock';
import Progress     from './components/Progress';
import CardTable    from './components/CardTable';
import Instructions from './components/Instructions';
import WonModal     from './components/WonModal';
import ScoresTable  from './components/ScoresTable';
import {initBoard}  from './components/boards';

// Local functions.
//
import shuffleCards    from './functions/shuffleCards';
import flipCard        from './functions/flipCard';
import {
	addScore,
	getScores,
	clearScores
}                      from './functions/scores';


// The MemTyles App.
//
const App: () => Node = () => {
    const [board, setBoard]                         = useState(initBoard.slice());
    const [wonPlay, setWonPlay]                     = useState(false);
    const [wonAllPlay, setWonAllPlay]               = useState(false);
    const [numCards, setNumCards]                   = useState(12);
    const [numClicks, setNumClicks]                 = useState(0);
    const [gameTime,setGameTime]                    = useState(0);
    const [timerAction,setTimerAction]              = useState("start");
    const [scores,setScores]                        = useState([]);
	const [showInstructions, setShowInstructions]   = useState(false);
	const pageRef                                   = useRef();

	useEffect(() => {
		SplashScreen.hide();
		async function getGetScores () {
			let currentScores   = await getScores();
			setScores ((scores) => currentScores);
		}
        let shuffledBoard   = shuffleCards(initBoard.slice(), numCards);
        setBoard (shuffledBoard);
		getGetScores ();
		console.log ("App useEffect numCards : ", numCards);
	}, [numCards])

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
    async function timeGameTook ({timeS}) {
        setGameTime ((gameTime) => timeS);
        let thisGame = {
            numCards  : numCards,
            numClicks : numClicks,
            gameTime  : timeS,
			date      : new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
        }
        let allScores = await addScore (thisGame);
        setScores (allScores);
    }
    function clearBoard () {
        let shuffledCards = shuffleCards(initBoard.slice(), numCards);
        setBoard(shuffledCards);
        setWonPlay(false);
        setWonAllPlay(false);
        setNumClicks(0);

		// Restart the timer.  The action needs to change for useEffect in GameClock to run, so
		// make it different every time with Date.now().
		//
        let now    = Date.now();
        let action = "restart" + now;
        setTimerAction ((timerAction) => action);
    }
	function changeNumCards (selectedItem) {
        setNumCards  (selectedItem);
        clearBoard ();
    }
	function increaseNumCards () {
		switch (numCards) {
			case 4  : 
				setNumCards  (12);
			break;
			case 12 : 
				setNumCards  (16);
			break;
			case 16 : 
				setNumCards  (20);
			break;
			case 20 : 
				setNumCards  (36);
			break;
			case 36 : 
				setNumCards  (42);
			break;
			case 42 : 
				setNumCards  (56);
			break;
			case 56 : 
			break;
			default : null;
		}
        clearBoard ();
	}
	function decreaseNumCards () {
		switch (numCards) {
			case 4  : 
				null;
			break;
			case 12 : 
				setNumCards  (4);
			break;
			case 16 : 
				setNumCards  (12);
			break;
			case 20 : 
				setNumCards  (16);
			break;
			case 36 : 
				setNumCards  (20);
			break;
			case 42 : 
				setNumCards  (36);
			break;
			case 56 : 
				setNumCards  (42);
			break;
			default : null;
		}
        clearBoard ();
	}
	function SelectNumCards () {
		return (
			<View style={styles.greenBox}>
				<View style={styles.centre}>
					<Text style={styles.sectionText} >Select Number of Tyles</Text>
				</View>
				<View style={styles.spaceEvenly}>
					<TouchableOpacity style={styles.bigText} onPress={decreaseNumCards}>
						<FontAwesomeIcon color={'dimgray'} size={35} icon={faMinus} />	
					</TouchableOpacity>
					<Text style={styles.bigText}>{numCards}</Text>
					<TouchableOpacity style={styles.bigText} onPress={increaseNumCards}>
						<FontAwesomeIcon color={'dimgray'} size={35} icon={faPlus} />	
					</TouchableOpacity>
				</View>
			</View>
		);
	}
	function clearAllScores () {
		clearScores();
		setScores ([]);
	}
	function onInstructionsPress () {
		setShowInstructions (true);

		// Reset this if won and instructions pressed, so that when we come back to the
		// game, the modal does not appear.
		//
		setWonAllPlay (false);
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				keyboardShouldPersistTaps='handled'
				ref={pageRef}
			>
				<View style={[styles.spaceBetween, styles.greenBox]}>
					<Image
						source={require ("./src/assets/images/memtyles-icon.png")}
						style={styles.logoImage}
					/>
					<Text style={styles.title}>
						MemTyles
					</Text>
					{showInstructions ? (
						<TouchableOpacity
							onPress={() => setShowInstructions (false)}
						>
							<FontAwesomeIcon  color={'dimgray'} size={35} icon={faPlay} />	
						</TouchableOpacity>
					) : (
						<TouchableOpacity
							onPress={() => onInstructionsPress ()}
						>
							<FontAwesomeIcon  color={'dimgray'} size={35} icon={faQuestion} />	
						</TouchableOpacity>
					)}
				</View>

				{!showInstructions && 
					<>
					<TouchableOpacity style={styles.button} onPress={clearBoard}>
						<Text style={styles.buttonText}>Clear Board</Text>
					</TouchableOpacity>
					<View renderToHardwareTextureAndroid={true} style={styles.distributed} >
						<CardTable
							board={board}
							handleTyleClick={handleTyleClick}
							numCards={numCards}
						/>
					</View>
					<View style={styles.greenBox}>
						<View style={!wonAllPlay && styles.spaceEvenly}>
							<Progress
								wonAllPlay={wonAllPlay}
								numCards={numCards}
								numClicks={numClicks}
								gameTime={gameTime}
							/>
							<GameClock
								gameTime={timeGameTook}
								action={timerAction}
							/>
						</View>
					</View>
					<SelectNumCards />
					{wonAllPlay && <WonModal numClicks={numClicks} gameTime={gameTime} numTyles={numCards} />}
					{scores.length > 0 &&
						<View style={styles.greenBox}>
							<View style={styles.centre}>
								<Text style={[styles.sectionText, styles.typeFace]} >Scores</Text>
								<ScoresTable scores={scores} clearScores={clearAllScores} />
							</View>
						</View>
					}
					</>
				}
				{showInstructions && <Instructions pageRef={pageRef} setShowInstructions={setShowInstructions}/>}
			</ScrollView>
		</SafeAreaView>
  );
};
export default App;
