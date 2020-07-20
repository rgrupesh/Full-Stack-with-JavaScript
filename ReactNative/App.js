import React from "react";
import { View, Text, SafeAreaView, StyleSheet} from "react-native";
import ColorBox from "./components/colorBox";

const App = () => {
  return(
    <SafeAreaView>
    <View style= {styles.container}>
      <Text style={styles.heading}>Boxes with different colors!</Text>
      <ColorBox hexCode="#2aa198" colorName="Cyan" />
      <ColorBox hexCode="#268bd2" colorName="Blue" />
      <ColorBox hexCode="#d33682" colorName="Magenta" />
      <ColorBox hexCode="#cb4b16" colorName="Orange" />
    </View>
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 40,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
 

});

export default App;
