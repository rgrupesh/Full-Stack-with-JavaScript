import React from "react";
import { StyleSheet, FlatList} from "react-native";
import ColorBox from "../components/colorBox";



const ColorPalette = ({ route }) => {
    const { colors } = route.params;
    return (
            <FlatList 
            style= {styles.container}
            data={colors}
            keyExtractor={item => item.colorName}
            renderItem={({ item }) => (
              <ColorBox hexCode={item.hexCode} colorName={item.colorName} />)} 
            />
       

    );
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
      paddingVertical: 15,
      backgroundColor: "white",
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    }
   
  
  });

export default ColorPalette;
