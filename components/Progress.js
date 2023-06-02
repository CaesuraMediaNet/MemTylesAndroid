import React, {useState} from 'react';
import {Text,}           from 'react-native';

export default function Progress ({wonAllPlay, numCards, numClicks, gameTime}) {
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

