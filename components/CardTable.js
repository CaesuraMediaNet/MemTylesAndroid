// Card table of Tyles (aka Cards).
//
import React  from 'react';
import {
   View,
}             from 'react-native';
import styles from '../styles';
import Card   from './Card';

export default function CardTable ({board, handleTyleClick, numCards}) {
   return board.map (card => {
         let width     = "25%";
         let iconWidth = 75;
         switch (parseInt (numCards)) {
            case 4 :
            case 12 :
            case 16 :
               width     = "25%"
               iconWidth = 75;
               break;
            case 20 :
               width     = "25%";
               iconWidth = 75;
               break;
            case 36 :
               width     = "16.6666666666%";
               iconWidth = 50;
               break;
            case 42 :
               width     = "14.285714%";
               iconWidth = 42;
               break;
            case 56 :
               width     = "12.5%";
               iconWidth = 35;
               break;
            default : 
               width = "25%";
         }
         return (
            <View key={card.id} style={{ width : width }}>
               <Card 
                  key={card.id}
                  id={card.id}
                  icon={card.icon}
                  clicked={() => handleTyleClick (card)}
                  flipped={card.flipped}
                  won={card.won}
                  colour={card.colour}
                  cardName={card.cardName}
                  width={iconWidth}
               />
            </View>
         );
      });
   }
