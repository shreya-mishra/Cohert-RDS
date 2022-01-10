// import React, {useState} from 'react';
// import {
//   Alert,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';

// const App: React.FC = () => {
//   const [tweetText, setTweetText] = useState<string>();
//   const [charactersRemaining, setCharactersRemaining] = useState(280);
//   const [textFontColor, setTextFontColor] = useState('black');
//   const handleChangeText = () => {
//     // if (currentLength >= 280) {
//     //   setTextFontColor('red');
//     // } else {
//     //   setTextFontColor('black');
//     // }
//     // setCharactersRemaining(280 - currentText.length);
//   };

//   return (
//     <SafeAreaView style={styles.safeAreaContainer}>
//       <Text style={styles.header}>Tweet Value Count</Text>
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           multiline={true}
//           onChangeText={e => {
//             setTweetText(e);
//             // handleChangeText;
//             if (e.length >= 280) {
//               setTextFontColor('red');
//             } else {
//               setTextFontColor('black');
//             }
//             setCharactersRemaining(280 - e.length);
//           }}
//           placeholder="What's Happening?"
//         />
//         <Text style={{color: textFontColor, fontSize: 30}}>
//           {charactersRemaining} characters remaining!
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeAreaContainer: {
//     flex: 1,
//   },
//   header: {
//     alignItems: 'center',
//     marginTop: 20,
//     fontSize: 30,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   input: {
//     height: 200,
//     borderWidth: 1,
//     padding: 10,
//     width: '90%',
//     fontSize: 25,
//   },
// });

// export default App;

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const MAX_TWEET_LENGTH = 3;

const App: React.FC = () => {
  const [tweetText, setTweetText] = useState<string>('');
  console.log(tweetText);
  const accentColor = tweetText.length > MAX_TWEET_LENGTH ? 'red' : 'black';
  const remainingCount = MAX_TWEET_LENGTH - tweetText.length;

  // Sample Test
  // 3 characters remaining components is rendering or not ???
  // 2 variations of above component =>
  // a => black : b => red
  // as you are typing is that value is increasing or not

  // now TextInput
  // well document => ember testing =>

  // Controlled Input
  const myObject = {
    color: accentColor,
    fontSize: 30,
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Text style={styles.header}>Tweet Value Count</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input} //react binidng
          multiline={true}
          value={tweetText}
          onChangeText={setTweetText}
          placeholder="What's Happening?"
        />
        <Text style={myObject}>{remainingCount} characters remaining!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    height: 200,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    fontSize: 25,
  },
});

export default App;
