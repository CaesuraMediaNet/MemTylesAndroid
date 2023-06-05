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
	Pressable,
	TouchableOpacity,
} from 'react-native';

// FontAwesome.
//
import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuestion, faPlus, faMinus     } from '@fortawesome/free-solid-svg-icons';

// Other community libs.
//
import SelectDropdown from 'react-native-select-dropdown'

// Local Components.
//
import Card         from './components/Card';
import GameClock    from './components/GameClock';
import MtRow        from './components/MtRow';
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
    const [showPrivacyLink, setShowPrivacyLink]     = useState(false);
	const [showInstructions, setShowInstructions]   = useState(false);

    const numCardsRef                               = useRef();
    const instructionsRef                           = useRef();
    const instructionsButtonRef                     = useRef();
		/*
		console.log ("board", board);
		console.log ("wonPlay", wonPlay);
		console.log ("wonAllPlay", wonAllPlay)
		console.log ("numCards", numCards);
		console.log ("numClicks", numClicks)
		console.log ("gameTime", gameTime);
		console.log ("timerAction", timerAction);
		console.log ("scores", scores);
		console.log ("showPrivacyLink", showPrivacyLink)
		console.log ("showInstructions", showInstructions);
		*/

	useEffect(() => {
		async function getGetScores () {
			let currentScores   = await getScores();
			setScores ((scores) => currentScores);
		}
        let shuffledBoard   = shuffleCards(initBoard.slice(), numCards);
        setBoard (shuffledBoard);
		getGetScores ();
		/*
		console.log ("board", board);
		console.log ("wonPlay", wonPlay);
		console.log ("wonAllPlay", wonAllPlay)
		console.log ("numCards", numCards);
		console.log ("numClicks", numClicks)
		console.log ("gameTime", gameTime);
		console.log ("timerAction", timerAction);
		console.log ("scores", scores);
		console.log ("showPrivacyLink", showPrivacyLink)
		console.log ("showInstructions", showInstructions);
		*/
	}, [numCards])

    function handleTyleClick (card) {
		setShowInstructions (false);
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
        }
        let allScores = await addScore (thisGame);
        setScores (allScores);
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
		setShowInstructions (false);
    }
	function changeNumCards (selectedItem) {
		console.log ("changeNumCards : ", selectedItem);
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
			<>
			<Text>Select Number of Tyles</Text>
			<View style={styles.spaceEvenly}>
				<Text style={{fontSize : 24}} onPress={decreaseNumCards}>
					<FontAwesomeIcon color={'dimgray'} size={50} icon={faMinus} />	
				</Text>
				<Text style={{fontSize : 24}}>{numCards}</Text>
				<Text style={{fontSize : 24}} onPress={increaseNumCards}>
					<FontAwesomeIcon color={'dimgray'} size={50} icon={faPlus} />	
				</Text>
			</View>
			</>
		);
	}
	function clearAllScores () {
		clearScores();
		setScores ([]);
	}
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				keyboardShouldPersistTaps='handled'
				ref={instructionsRef}
			>
				{!showInstructions && 
					<View style={styles.help}>
						<TouchableOpacity
							onPress={() => setShowInstructions (true)}
						>
							<FontAwesomeIcon  color={'dimgray'} size={50} icon={faQuestion} />	
						</TouchableOpacity>
					</View>
				}
				<Text style={styles.title}>
					MemTyles
				</Text>
				{!showInstructions && 
					<>
					<Button onPress={clearBoard} title="Clear Board" />
					<View style={styles.distributed} >
						<CardTable
							board={board}
							handleTyleClick={handleTyleClick}
							numCards={numCards}
						/>
					</View>
					<View style={!wonAllPlay && styles.spaceEvenly}>
						<Progress
							wonAllPlay={wonAllPlay}
							numCards={numCards}
							numClicks={numClicks}
							gameTime={gameTime}
						/>
						<GameClock gameTime={timeGameTook} action={timerAction}  />
					</View>
					<SelectNumCards />
					{wonAllPlay && <WonModal numClicks={numClicks} gameTime={gameTime} numTyles={numCards} />}
					{scores.length > 0 && <ScoresTable scores={scores} clearScores={clearAllScores} />}
					</>
				}
				{showInstructions && <Instructions setShowInstructions={setShowInstructions}/>}
			</ScrollView>
		</SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container : {
		padding        : 10,
	},
	title : {
		fontSize       : 36,
		fontWeight     : 'bold',
	},
	distributed : {
		flex           : 1,
		flexDirection  : 'row',
		flexWrap       : 'wrap',
		alignItems     : 'center',
	},
	help : {
		position       : "absolute",
		top            : 5,
		right          : 5,
		zIndex         : 1,
	},
	spaceEvenly : {
		flexDirection  : "row",
		justifyContent : "space-evenly",
	},
});

export default App;
