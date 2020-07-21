import React, { useState, useCallback, useEffect } from "react";
import { FlatList , StyleSheet, TouchableOpacity, Text } from "react-native";
import PalettePreview from "../components/PalettePreview";


const Home = ({navigation, route }) => {

        const newColorPalette = route.params 
        ? route.params.newColorPalette
        : undefined;

        const [colorPalette, setColorPalette ] = useState([]);
        const [isRefreshing , setIsRefreshing ] = useState(false);

        const fetchColorPalette = useCallback(async () => {
            const result= await fetch("https://color-palette-api.kadikraman.now.sh/palettes");

            if (result.ok){
                const palettes = await result.json();
                setColorPalette(palettes);

            }    

        }, []);

        useEffect(() => {
            fetchColorPalette();

        }, []);

        useEffect(() => {
            if(newColorPalette){
                setColorPalette(palettes => [newColorPalette, ...palettes]);
            }

        },[newColorPalette]);

        const handleRefresh = useCallback( async () => {
            setIsRefreshing(true);
            await  fetchColorPalette();
            setTimeout(() => {
                setIsRefreshing(false);

            }, 1000);
            


        }, []);
    return(
        <FlatList
            style={styles.list}
            data={colorPalette}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview handlePress = {() => {
                    navigation.navigate('ColorPalette', item);
                }}
                colorPalette={item}
                />    
        )}
        refreshing={isRefreshing} 
        onRefresh={handleRefresh}
        ListHeaderComponent={
            <TouchableOpacity 
                onPress={() => {
                navigation.navigate('ColorPaletteModal');
            }}>
        <Text style={styles.text}>Add Color Scheme</Text>
        </TouchableOpacity>}
    />
    );
};

const styles= StyleSheet.create({
    list:{
        padding:10,
        backgroundColor: "white",
    },
    text:{
        fontSize:20,
        marginBottom:10,
        color: "teal",
        fontWeight: "bold",
    }

})

export default Home;
