import AsyncStorage from '@react-native-async-storage/async-storage';
export async function addScore (score) {
  try {
   let scores = await getScores ();
   if (scores.length > 4) {
      scores.shift();
   }
   scores.push (score);
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(scores))
      return scores;
   } catch (err) {
      return [];
   }
}
export async function getScores () {
   try {
      let scores = await AsyncStorage.getItem('@storage_Key')
      if (!scores?.length) {
         scores = [];
      } else {
         scores = JSON.parse (scores);
      }
      return scores;
   } catch (err) {
      return [];
   }
}
export async function clearScores () {
   try {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify([]))
   } catch (err) {
   }
   return [];
}
