// The comprehensive instructions which show example boards and a video.
//
import React from 'react';
import { useRef } from 'react';
import CardTable from './CardTable';
import Card from './Card';
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';

function handleTyleClick () {
	return null;
}
function onDemoButton () {
	return null;
}
import {startBoard, wonBoard, twoMatching, twoMisMatching, oneSelected, twoMatchedNext} from '../components/boards';

const Item = ({text, board}) => {
	return (
		<>
		<Text style={styles.instructionP}>
			{text}
		</Text>
		{board &&
			<View style={styles.flexible}>
				<CardTable
					board={board}
					handleTyleClick={handleTyleClick}
					numCards={12}
				/>
		</View>
		}
		</>
	);
};
const DATA = [
	{
		id    : 1,
		text  : "The board is made up of pairs of pictures, or Tyles as we call them, like this :",
		board : wonBoard,
	},
	{
		id    : 2,
		text  : "At the start of the game the board has all Tyles turned over, showing the jigsaw image :",
		board : startBoard,
	},
	{
		id    : 3,
		text  : "The game is to turn over pairs of Tyles, by clicking on the Jigsaw pictures, to find the matching ones, like this :",
		board : twoMatching,
	},
	{
		id    : 4,
		text  : "Only two Tyles can be turned over at any one time, clicking on any more will not do anything.",
		board : null,
	},
	{
		id    : 5,
		text  : "If your two Tyles do not match ...",
		board : twoMisMatching,
	},
	{
		id    : 6,
		text  : "...you can turn either one (or both) back over by clicking on it (them) again  (just the envelope here) :",
		board : oneSelected,
	},
	{
		id    : 7,
		text  : "If your two Tyles match, then they become a bit opaque and you can select then two more Tyles : ",
		board : twoMatchedNext,
	},
	{
		id    : 8,
		text  : "When all Tyles are matched, you have won the game!",
		board : wonBoard,
	},
	{
		id    : 9,
		text  : "You can change the number of Tyles on the board with the selector under the game.  We have started you on 12, but you can select 4 (easy!), 12, 16, 20, 36, 42 or if you are feeling brave, 56.",
		board : wonBoard,
	},
	{
		id    : 10,
		text  : "You can change the number of Tyles on the board with the selector under the game.  We have started you on 12, but you can select 4 (easy!), 12, 16, 20, 36, 42 or if you are feeling brave, 56.",
		board : null,
	},
];

export default function Instructions () {
	/* Nice idea, didn't speed things up at all.
	return (
		<>
		<FlatList
			data={DATA}
			renderItem={({item}) => <Item text={item.text} board={item.board} />}
			keyExtractor={item => item.id}
		>
		</FlatList>
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
		</>
	);
	*/
	return (
		<View style={styles.container}>
			<Text style={styles.header}>How to Play</Text>
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



