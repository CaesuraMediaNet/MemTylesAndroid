// https://reactnative.dev/docs/modal
//
import React, {useState} from 'react';
import {
	Alert,
	Modal,
	Text,
	Pressable,
	View
}              from 'react-native';
import styles  from '../styles';

export default function WonModal ({numClicks, gameTime, numTyles}) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalHeader}>WooHoo, you Won!</Text>
            <Text style={styles.modalText}>
				In {numClicks} clicks and {gameTime} seconds for {numTyles} Tyles!
			</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>&nbsp;OK!&nbsp;</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
