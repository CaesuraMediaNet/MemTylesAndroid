import React, {useState} from 'react';
import {Text,}           from 'react-native';

export default function Progress ({wonAllPlay, numCards, numClicks, gameTime}) {
	if (wonAllPlay) {
		return (
			<Text style={{fontSize : 18}}>You did {numCards} Tyles in {numClicks} goes and {gameTime} seconds</Text>
		);
	} else {
		return (
			<Text style={{fontSize : 18}}>Goes : {numClicks}</Text>
		);
	}
}

