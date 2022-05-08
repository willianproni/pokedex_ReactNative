import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";

export default function Pokedex() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon", {
            method: "GET",
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data =>
                setPokemon(data.results))
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={pokemon}
                keyExtractor={pokemon => pokemon.name}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={PokemonShow}
            />
        </SafeAreaView>
    );
}

function PokemonShow(item){
    const {name, url} = item.item;

    return(
        <View>
            <Text>
                {name}
            </Text>
        </View>
    );
}