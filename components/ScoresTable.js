import React from 'react';
import {View, Text, Button} from 'react-native';

function ScoreItem ({gameTime, numCards, numClicks}) {
	return (
		<View>
			<Text>{numCards} cards in {numClicks} clicks and {gameTime} seconds</Text>
		</View>
	);
}
export default function ScoresTable ({scores, clearScores}) {
	return (
		<View>
			{scores.map((score, index) => {
				return (
					<ScoreItem
						key={index}
						gameTime={score.gameTime}
						numCards={score.numCards}
						numClicks={score.numClicks}
					/>
				);
			})}
			<Button onPress={clearScores} title="Clear Scores" />
		</View>
	);
}

