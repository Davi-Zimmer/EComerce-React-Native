import {View, Text, Button, StyleSheet, TextInput} from "react-native"
import { useState } from "react"
import { useAuth } from "../Contexts/Auth"

export default function Login(){

    const { login } = useAuth()

    const [user, setUser] = useState()
    const [password, setPasword] = useState()

    const manageLogin = () => login( user, password )
    
    return (
        <View style={styles.container}>
            <Text>Login</Text>

            <TextInput style={styles.input} 
                onTextChenge={setUser} 
                placeholder='Nome' value={user}
            />

            <TextInput style={styles.input} 
                onTextChenge={setPasword} 
                placeholder='Senha' value={password}
            />

            <Button title='Login' onPress={manageLogin}></Button>
        </View>
    )
}


const styles = StyleSheet.create({

    input: {
        marginTop: 10,
        width: '80%',
        borderWidth: 1,
        padding: 7,
        marginVertical: 10
    },

    container: {
        width: '100%',
        alignItems: 'center',
        padding: 20
    }
})