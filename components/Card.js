// A Tyle aka Card, an image from FontAwesome
//

import React from 'react';
import { useState }        from 'react';
import { useEffect }       from 'react';
import { useRef }          from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
}                          from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPuzzlePiece }   from '@fortawesome/free-solid-svg-icons'
import styles              from '../styles/memtyles.module.css';

export default function Card ({id, icon, width, height, clicked, flipped, won, colour, cardName}) {
    return (
		<View style={flipped ? cardStyles.selectedStyle : won ? cardStyles.wonStyle : cardStyles.iconStyle}>
			<TouchableOpacity onPress={clicked} >
				{flipped ?
					<FontAwesomeIcon  color={colour}    size={75} icon={icon} />
					: won ?
					<FontAwesomeIcon  color={colour}    size={75} icon={icon} />
					:
					<FontAwesomeIcon  color={'dimgrey'} size={75} icon={faPuzzlePiece} />
				}
			</TouchableOpacity>
		</View>
    );
}

const cardStyles = StyleSheet.create({
    iconStyle : {
        color   : 'dimgray',
        padding : 5,
        height  : 100,
        width   : 100,
    },
	selectedStyle : {
        padding      : 5,
		borderWidth  : 2,
		borderRadius : 4,
		borderColor  : 'green',
	},
	wonStyle : {
        color   : 'dimgray',
        padding : 5,
		opacity : 0.6,
	},
});
