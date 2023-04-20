import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatLis, FlatList,} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Logo } from '../../components/logo'

import api from '../../services/api'
import { FoodList } from '../../components/foodlist'

export function Home(){
    const [inputValue, setInputValue] = useState("")
    const [foods, setFoods] = useState([])

    useEffect(() => {
       async function fetchApi(){
            const response = await api.get("/foods")
            setFoods(response.data)
        }

        fetchApi();
    }, [])

    function handleSearch(){
        console.log('Você digitou:')
        console.log(inputValue)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Logo/> 
            <Text style={styles.title}>Encontre a receita</Text>
            <Text style={styles.title}>e resgate sua ancestralidade</Text>

            <View style={styles.form}>
                <TextInput
                placeholder='Digite o nome da comida...'
                style={styles.input}
                value={inputValue}
                onChangeText={ (text) => setInputValue(text) }
                />
                <TouchableOpacity onPress={handleSearch} >
                   <Ionicons name="search" size={28} color="#88AABF" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={foods}
                keyExtractor={ (item) => String(item.id) }
                renderItem={({item}) => <FoodList data={item} /> }
                showsVerticalScrollIndicator={false}
            />

           

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#BDD9F2',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title:{
       fontSize: 26,
       fontWeight: "bold",
       color: "#0D0D0D" 
    },
    form:{
        backgroundColor:"#F0F2F2",
        width: '100%',
        borderRadius: 8,
        marginTop: 16, 
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center' ,
        justifyContent: 'space-between'
    },
    input:{
        width: '90%',
        maxWidth: '90%',
        height: 54,
        
    }
})