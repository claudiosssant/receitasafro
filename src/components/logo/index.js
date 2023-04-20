
import { View, Text, StyleSheet} from 'react-native'

export function Logo(){
    return(
        <View style={styles.logoArea}>
            <Text style={styles.logo}>Afro Receitas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoArea:{
        backgroundColor:"#AEB9F2",
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8
    },
    logo:{
        fontSize: 18,
        fontWeight: "bold",
        color: "#F0F2F2"
    }
})