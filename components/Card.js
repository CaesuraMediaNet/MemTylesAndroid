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

    // let blankStyle         = cardStyles.blankStyle;
    // let selectedStyle      = cardStyles.selectedStyle;
    // let wonStyle           = cardStyles.wonStyle;

    // Some icons are bigger than others moving the page about.
    //
	/*
    if (cardName.match (/Moon|Brush|Lemon|Bell|HourglassStart/i)) {
        selectedStyle = cardStyles.reduceSelectedBigIconStyle;
		wonStyle      = cardStyles.reduceWonBigIconStyle;
    }
	*/
    return (
        <TouchableOpacity onPress={clicked} >
            {flipped ?
                <FontAwesomeIcon  color={colour} size={100} icon={icon} />
                : won ?
                <FontAwesomeIcon       color={colour} size={100} icon={icon} />
                :
                <FontAwesomeIcon     color={'dimgrey'} size={100} icon={faPuzzlePiece} />
            }
        </TouchableOpacity>
    );
}

const cardStyles = StyleSheet.create({
    iconStyle : {
        color   : 'dimgray',
        padding : 5,
        height  : 100,
        width   : 100,
    },
	blankStyle : {
        color   : 'dimgray',
        padding : 5,
        height  : 100,
        width   : 100,
	},
	selectedStyle : {
        color   : 'dimgray',
        padding : 5,
        height  : 100,
        width   : 100,
		border  : '1px solid green',
		borderRadius : '0.2rem',
	},
	wonStyle : {
        color   : 'dimgray',
        padding : 5,
        height  : 100,
        width   : 100,
		opacity : 0.6,
	},
	reduceSelectedBigIconStyle : {
        color   : 'dimgray',
        padding : 5,
        height  : 100,
        width   : 75,
		border  : '1px solid green',
		borderRadius : '0.2rem',
	},
	reduceWonBigIconStyle : {
        color   : 'dimgray',
        padding : 5,
        height  : 100,
        width   : 75,
		opacity : 0.6,
	}
});
