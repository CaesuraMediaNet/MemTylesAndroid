import React   from 'react';
import {
	View,
	Text,
	TouchableOpacity,
}              from 'react-native';
import styles  from '../styles';

function ScoreItem ({gameTime, numCards, numClicks}) {
	return (
		<View>
			<Text style={styles.medText}>{numCards} cards in {numClicks} clicks and {gameTime} seconds</Text>
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
			<TouchableOpacity onPress={clearScores} style={styles.button}>
				<Text style={styles.buttonText}>Clear Scores</Text>
			</TouchableOpacity>
		</View>
	);
}

