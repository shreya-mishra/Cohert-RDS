/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

interface CounterProps {
  
 calcNum: number;
}

const CalculateCount: React.FC<CounterProps> = ({calcNum}) => {
  return(
    <View >
      <Text>Your Count is {calcNum}</Text>
    </View>
  )

}

const App: React.FC<{}> = () => {
const [count,setCount] = useState<number>(0)
  

  return (
    <SafeAreaView style={styles.container}>
      <CalculateCount calcNum={count} />
     <Button title="Increment" onPress={()=>setCount(count+1)} />
     <Button title="Decrement" onPress={()=>setCount(count-1)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
    borderColor: 'purple',
    borderWidth: 2
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
