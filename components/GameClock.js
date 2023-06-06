import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { Text, View } from 'react-native';

export default function GameClock ({action, gameTime }) {
    const [timePlayed,setTimePlayed]  = useState(0);
	const [intervalId, setIntervalId] = useState(0);

    function updateTime () {
        setTimePlayed ((timePlayed) => timePlayed + 1)
    }
	function stopTimer () {
		clearInterval(intervalId);

		// Send total game time to the parent.
		//
		gameTime ({timeS : timePlayed});
	}
	useEffect(() => {
		let thisIntervalId = 0;
		if (action === "stop") {
			stopTimer ();
			thisIntervalId = intervalId;
		} else if (action.match (/start/)) { // start and restart
			setTimePlayed ((timePlayed) => 0);
			thisIntervalId = setInterval(updateTime, 1000);
			setIntervalId ((intervalId) => thisIntervalId);
		}
		return function cleanUp() {
			clearInterval(thisIntervalId);
		}
    }, [action]); // Do this whenever action changes.

	return (
		action !== "stop" && <Text style={styles.bigText}>{new Date(timePlayed * 1000).toISOString().slice(11, 19)}</Text>
	);
}
