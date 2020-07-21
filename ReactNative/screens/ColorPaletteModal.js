import React, {useState, useCallback} from "react";
import { Text, View, TextInput, StyleSheet, Alert , Switch } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ColorPaletteModal = ({ navigation}) => {

    const [name, setName] = useState("");

    const handleSubmit = useCallback(() => {
        if (!name){
            Alert.alert("Please enter palette name")
        } else {
            const newColorPalette ={
                paletteName: name,
                colors:[],
            }
            navigation.navigate("Home", {newColorPalette});
        }

    }, [name]);

    return(
        <View style={styles.container}>
        <Text style={styles.name}> Name of Palette:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Palette Name" />
        <View style={styles.colorName}>
            <Text> Color Name</Text>
            <Switch value={true} onValueChange={() =>{}} />
        </View>    
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles= StyleSheet.create({
    input:{
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom:15,
    },
    container:{
        padding:10,
        backgroundColor: "white",
        flex:1,
    },
    button:{
        height:40,
        backgroundColor: "teal",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText:{
        color:"white",
        fontWeight: "bold",

    },
    name:{
        marginBottom:10,
         
    }, 
    colorName:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth:1,
        borderBottomColor: "grey",


    }
})

export default ColorPaletteModal;
