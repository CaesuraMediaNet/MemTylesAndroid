// The comprehensive instructions which show example boards and a video.
//
import React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from '../styles';
import CardTable from './CardTable';
import Card from './Card';
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   BackHandler,
   ScrollView,
}                                 from 'react-native';
import { FontAwesomeIcon }        from '@fortawesome/react-native-fontawesome';
import {
   faQuestion,
   faAnglesRight,
   faAnglesLeft
}                                 from '@fortawesome/free-solid-svg-icons';
// import Video                      from 'react-native-video';
import VideoPlayer                from 'react-native-video-controls';

function handleTyleClick () {
   return null;
}
function onDemoButton () {
   return null;
}
import {startBoard, wonBoard, twoMatching, twoMisMatching, oneSelected, twoMatchedNext} from '../components/boards';

function Navigate ({pageNumber, setPageNumber}) {
   return (
      <View style={styles.greenBox}>
         <View style={pageNumber > 1 ? styles.spaceBetween : styles.spaceEvenly}>
            {pageNumber > 1 && 
            <TouchableOpacity style={styles.bigText} onPress={() => setPageNumber (pageNumber => pageNumber - 1)}>
               <Text style={styles.medText}>Previous</Text>
               <FontAwesomeIcon color={'dimgray'} size={35} icon={faAnglesLeft} />
            </TouchableOpacity>
            }
            {pageNumber < 8 &&
            <TouchableOpacity style={styles.bigText} onPress={() => setPageNumber (pageNumber => pageNumber + 1)}>
               <Text style={styles.medText}>Next</Text>
               <FontAwesomeIcon color={'dimgray'} size={35} icon={faAnglesRight} />
            </TouchableOpacity>
            }
         </View>
      </View>
   );
}
function Header ({pageNumber}) {
   return (
      <View style={styles.instructionsHeader}>
         <Text style={styles.medText}>How to Play : Page {pageNumber}</Text>
      </View>
   );
}

function Pages ({pageNumber, setPageNumber}) {
   if (pageNumber === 1) {
      return (
         <>
         <Header pageNumber={pageNumber} />
         <Text style={styles.instructionP}>
            The board is made up of pairs of pictures, or Tyles as we call them, like this :
         </Text>
         <View style={styles.flexible}>
            <CardTable
               board={wonBoard}
               handleTyleClick={handleTyleClick}
               numCards={12}
            />
         </View>
         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else if  (pageNumber === 2) {
      return (
         <>
         <Header pageNumber={pageNumber} />
         <Text style={styles.instructionP}>
                At the start of the game the board has all Tyles turned over, showing the jigsaw image :
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={startBoard}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else if  (pageNumber === 3) {
      return (
         <>
         <Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                The game is to turn over pairs of Tyles, by clicking on the
                Jigsaw pictures, to find the matching ones, like this :
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={twoMatching}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else if  (pageNumber === 4) {
      return (
         <>
         <Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                Only two Tyles can be turned over at any one time, clicking on any more will
                not do anything.
            </Text>
            <Text style={styles.instructionP}>
                If your two Tyles do not match ...
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={twoMisMatching}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else if  (pageNumber === 5) {
      return (
         <>
         <Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                ...you can turn either one (or both) back over by clicking on it (them) again  (just
                the envelope here) :
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={oneSelected}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else if  (pageNumber === 6) {
      return (
         <>
         <Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                When all Tyles are matched, you have won the game!
            </Text>
            <View style={styles.flexible}>
                <CardTable
                    board={wonBoard}
                    handleTyleClick={handleTyleClick}
                    numCards={12}
                />
            </View>
         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else if  (pageNumber === 7) {
      return (
         <>
         <Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                You can change the number of Tyles on the board with the selector under the game.  We have
                started you on 12, but you can select 4 (easy!), 12, 16, 20, 36, 42 or if you are
                feeling brave, 56.
            </Text>

            <Text style={styles.instructionP}>
                You can restart the game using the Clear Board button at the top :
            </Text>
         <TouchableOpacity style={styles.button} onPress={onDemoButton}>
            <Text style={styles.buttonText}>Clear Board</Text>
         </TouchableOpacity>

         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else if  (pageNumber === 8) {
      return (
         <>
         <Header pageNumber={pageNumber} />
            <Text style={styles.instructionP}>
                Your recent five scores are in the Scores section.  They are saved on your device, so no scores are
                recorded by us.
            </Text>
            <Text style={styles.instructionP}>
                Good luck!
            </Text>
            <Text style={styles.instructionP}>
                Here is a video showing a game being played on the web version at memtyles.com :
            </Text>
         <View style={styles.videoContainer}>
                <VideoPlayer
                    source={require ("../video/DemoVideo.mp4")}
                    resizeMode='contain'
               paused={true}
                    style={styles.video}
               onBack={() => {}}
                />
         </View>

         <Navigate pageNumber={pageNumber} setPageNumber={setPageNumber} />
         </>
      );
   } else {
      return (<Text style={styles.medText}>Sorry, an error occured, try pressing the Tyles to see what happens!</Text>);
   }
}

export default function Instructions ({setShowInstructions, pageRef}) {
   const [pageNumber, setPageNumber] = useState(1);

   // https://reactnative.dev/docs/backhandler
   //
   useEffect(() => {
      const backAction = (pageNumber) => {

         // Back to the game.
         //
         if (pageNumber === 1) {

            setShowInstructions (false);

         // Back a Nav page.
         //
         } else if (pageNumber > 1) {
            setPageNumber (setPageNumber => setPageNumber - 1);
         }
         return true;
      };
      const backHandler = BackHandler.addEventListener(
         'hardwareBackPress',
         () => backAction (pageNumber),
      );
      return () => backHandler.remove();
   },[pageNumber]);

   useEffect(() => {
      function scrollToTop () {
         pageRef.current.scrollTo ({x : 0, y : 0, animated : false});
      }
      scrollToTop();
   },[pageNumber]);

   // Help Pages.
   //
   return (
      <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={() => setShowInstructions(false)}>
            <Text style={styles.buttonText}>Play the Game!</Text>
         </TouchableOpacity>
         <Pages pageNumber={pageNumber} setPageNumber={setPageNumber} />
      </View>
   );
}
