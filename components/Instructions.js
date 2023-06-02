// The comprehensive instructions which show example boards and a video.
//
import React from 'react';
import { useRef, useState } from 'react';
import CardTable from './CardTable';
import Card from './Card';
import { Text, View, Button, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';

function handleTyleClick () {
	return null;
}
function onDemoButton () {
	return null;
}
import {startBoard, wonBoard, twoMatching, twoMisMatching, oneSelected, twoMatchedNext} from '../components/boards';

function NextPage ({setPageNumber}) {
	return (
		<TouchableOpacity
			onPress={() => setPageNumber (pageNumber => pageNumber + 1)}
		>
			<Text>Next Page</Text>
		</TouchableOpacity>
	);
}
function PrevPage ({setPageNumber}) {
		return (
			<TouchableOpacity
				onPress={() => setPageNumber (pageNumber => pageNumber - 1)}
			>
				 <Text>Prev Page</Text>
			</TouchableOpacity>
		);
}
function Nav ({pageNumber, setPageNumber}) {
	return (
		<View>
			{pageNumber > 1 && <PrevPage setPageNumber={setPageNumber} />}
			{pageNumber < 6 && <NextPage setPageNumber={setPageNumber} />}
		</View>
	);
}

function Pages ({pageNumber, setPageNumber}) {
	console.log ("pageNumber is ", pageNumber);
	if (pageNumber === 1) {
		return (
			<>
			<Text>Page 1</Text>
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
			<Nav pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 2) {
		return (
			<>
			<Text>Page 2</Text>
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
			<Nav pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 3) {
		return (
			<>
			<Text>Page 3</Text>
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
			<Nav pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 4) {
		return (
			<>
			<Text>Page 4</Text>
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
			<Nav pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 5) {
		return (
			<>
			<Text>Page 5</Text>
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
			<Nav pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else if  (pageNumber === 6) {
		return (
			<>
			<Text>Page 6</Text>
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
			<Nav pageNumber={pageNumber} setPageNumber={setPageNumber} />
			</>
		);
	} else {
		return (<Text>Sorry, an error occured, try pressing the Tyles to see what happens!</Text>);
	}
}

export default function Instructions ({setShowInstructions}) {
	const [pageNumber, setPageNumber] = useState (1);
	return (
		<View style={styles.container}>
			<Button title="Play the Game!" onPress={() => setShowInstructions(false)} />
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
const styles = StyleSheet.create({
	container : {
	},
	instructionP : {
		marginTop       : 10,
		marginBottom    : 10,
	},
	header : {
		marginTop       : 25,
		fontSize        : 24,
	},
	flexible : {
		flex            : 1,
		flexDirection   : 'row',
		flexWrap        : 'wrap',
	},
});



