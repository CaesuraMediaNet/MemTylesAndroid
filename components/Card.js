// A Tyle aka Card, an image from FontAwesome
//

import React from 'react';
import { useState }        from 'react';
import { useEffect }       from 'react';
import { useRef }          from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
}                          from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPuzzlePiece }   from '@fortawesome/free-solid-svg-icons'
import styles              from '../styles';

export default function Card ({id, icon, width, height, clicked, flipped, won, colour, cardName}) {
    return (
		<View style={flipped ? styles.selectedStyle : won ? styles.wonStyle : styles.iconStyle}>
			<TouchableOpacity onPress={clicked} >
				{flipped ?
					<FontAwesomeIcon  color={colour}    size={width} icon={icon} />
					: won ?
					<FontAwesomeIcon  color={colour}    size={width} icon={icon} />
					:
					<FontAwesomeIcon  color={'dimgrey'} size={width} icon={faPuzzlePiece} />
				}
			</TouchableOpacity>
		</View>
    );
}
