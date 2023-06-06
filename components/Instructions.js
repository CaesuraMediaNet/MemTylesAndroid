// The comprehensive instructions which show example boards and a video.
//
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from '../styles';
import CardTable from './CardTable';
import Card from './Card';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	BackHandler,
}                                 from 'react-native';
import { FontAwesomeIcon }        from '@fortawesome/react-native-fontawesome';
import {
	faQuestion,
	faAnglesRight,
	faAnglesLeft
}                                 from '@fortawesome/free-solid-svg-icons';

function handleTyleClick () {
	return null;
}
function onDemoButton () {
	return null;
}
import {startBoard, wonBoard, twoMatching, twoMisMatching, oneSelected, twoMatchedNext} from '../components/boards';

function Navigate ({pageNumber, setPageNumber}) {
	return (
		<View style={styles.greenBox}>
			<View style={pageNumber > 1 ? styles.spaceBetween : styles.spaceEvenly}>
				{pageNumber > 1 && 
				<TouchableOpacity style={styles.bigText} onPress={() => setPageNumber (pageNumber => pageNumber - 1)}>
					<Text>Previous</Text>
					<FontAwesomeIcon color={'dimgray'} size={35} icon={faAnglesLeft} />
				</TouchableOpacity>
				}
				{pageNumber < 6 &&
				<TouchableOpacity style={styles.bigText} onPress={() => setPageNumber (pageNumber => pageNumber + 1)}>
					<Text>Next</Text>
					<FontAwesomeIcon color={'dimgray'} size={35} icon={faAnglesRight} />
				</TouchableOpacity>
				}
			</View>
		</View>
	);
}
function Header ({pageNumber}) {
	return (
		<View style={styles.greenBox}>
			<Text>Page {pageNumber}</Text>
		</View>
	);
}

function Pages ({pageNumber, setPageNumber}) {
	if (pageNumber === 1) {
		return (
			<>
			<Header pageNumber={pageNumber} />
			<Text style={styles.instructionP}>
				The board is made up of pairs of pictures, or Tyles as we call them, like this :
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={wonBoard}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>
			<Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 2) {
		return (
			<>
			<Header pageNumber={pageNumber} />
			<Text style={styles.instructionP}>
                At the start of the game the board has all Tyles turned over, showing the jigsaw image :
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={startBoard}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
			<Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 3) {
		return (
			<>
			<Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                The game is to turn over pairs of Tyles, by clicking on the
                Jigsaw pictures, to find the matching ones, like this :
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={twoMatching}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
			<Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 4) {
		return (
			<>
			<Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                Only two Tyles can be turned over at any one time, clicking on any more will
                not do anything.
            </Text>
            <Text style={styles.instructionP}>
                If your two Tyles do not match ...
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={twoMisMatching}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
            <Text style={styles.instructionP}>
                ...you can turn either one (or both) back over by clicking on it (them) again  (just
                the envelope here) :
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={oneSelected}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
			<Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 5) {
		return (
			<>
			<Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                When all Tyles are matched, you have won the game!
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={wonBoard}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>

            <Text style={styles.instructionP}>
                You can change the number of Tyles on the board with the selector under the game.  We have
                started you on 12, but you can select 4 (easy!), 12, 16, 20, 36, 42 or if you are
                feeling brave, 56.
            </Text>

            <Text style={styles.instructionP}>
                You can restart the game using the Clear Board button at the top :
            </Text>
			<TouchableOpacity style={styles.button} onPress={onDemoButton}>
				<Text style={styles.buttonText}>Clear Board</Text>
			</TouchableOpacity>

			<Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 6) {
		return (
			<>
			<Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                Your recent five scores are in the Scores section.  They are saved on your device, so no scores are
                recorded by us.
            </Text>
            <Text style={styles.instructionP}>
                Good luck!
            </Text>
            <Text style={styles.instructionP}>
                Here is a video showing a game being played.
            </Text>
			<Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else {
		return (<Text>Sorry, an error occured, try pressing the Tyles to see what happens!</Text>);
	}
}

export default function Instructions ({setShowInstructions}) {
	const [pageNumber, setPageNumber] = useState (1);

	// https://reactnative.dev/docs/backhandler
	//
	useEffect(() => {
		const backAction = (pageNumber) => {

			// Back to the game.
			//
			if (pageNumber === 1) {

				console.log ("pageNumber :", pageNumber);
				setShowInstructions (false);

			// Back a Nav page.
			//
			} else if (pageNumber > 1) {
				console.log ("pageNumber :", pageNumber);
				setPageNumber (setPageNumber => setPageNumber - 1);
			}
			return true;
		};
		const backHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			() => backAction (pageNumber),
		);
		return () => backHandler.remove();
	},[pageNumber]);

	// Help Pages.
	//
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => setShowInstructions(false)}>
				<Text style={styles.buttonText}>Play the Game!</Text>
			</TouchableOpacity>
			<Text style={styles.header}>How to Play</Text>
			<Pages pageNumber={pageNumber} setPageNumber={setPageNumber} />

			{/*
			<Text style={styles.instructionP}>
				The board is made up of pairs of pictures, or Tyles as we call them, like this :
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={wonBoard}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>
			<Text style={styles.instructionP}>
				At the start of the game the board has all Tyles turned over, showing the jigsaw image :
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={startBoard}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>

			<Text style={styles.instructionP}>
				The game is to turn over pairs of Tyles, by clicking on the
				Jigsaw pictures, to find the matching ones, like this :
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={twoMatching}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>

			<Text style={styles.instructionP}>
				Only two Tyles can be turned over at any one time, clicking on any more will
				not do anything.
			</Text>

			<Text style={styles.instructionP}>
				If your two Tyles do not match ...
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={twoMisMatching}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>

			<Text style={styles.instructionP}>
				...you can turn either one (or both) back over by clicking on it (them) again  (just
				the envelope here) :
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={oneSelected}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>

			<Text style={styles.instructionP}>
				If your two Tyles match, then they become a bit opaque and you can select then two more Tyles : 
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={twoMatchedNext}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>

			<Text style={styles.instructionP}>
				When all Tyles are matched, you have won the game!
			</Text>
			<View style={styles.flexible}>
				<CardTable
					board={wonBoard}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
			</View>

			<Text style={styles.instructionP}>
				You can change the number of Tyles on the board with the selector under the game.  We have
				started you on 12, but you can select 4 (easy!), 12, 16, 20, 36, 42 or if you are
				feeling brave, 56.
			</Text>

			<Text style={styles.instructionP}>
				You can restart the game using the Clear Board button at the top :
			</Text>
			<Button onPress={onDemoButton} title="Clear Board" />

			<Text style={styles.instructionP}>
				Your scores are in the Past Scores section.  They are saved in Cookies, so no scores are
				recorded by us.
			</Text>
			<Text style={styles.instructionP}>
				Good luck!
			</Text>
			<Text style={styles.instructionP}>
				Here is a video showing a game being played.
			</Text>
			*/}
		</View>
	);
}
