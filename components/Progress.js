import React, {useState} from 'react';
import {Text,}           from 'react-native';
import styles            from '../styles';

export default function Progress ({wonAllPlay, numCards, numClicks, gameTime}) {
   if (wonAllPlay) {
      return (
         <Text style={styles.bigText}>You did {numCards} Tyles in {numClicks} goes and {gameTime} seconds</Text>
      );
   } else {
      return (
         <Text style={styles.bigText}>Goes : {numClicks}</Text>
      );
   }
}

