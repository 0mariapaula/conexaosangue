import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica para autenticar o usuário
        // Por exemplo, fazer uma chamada para uma API
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}></View>

            <Image
                style={styles.logo}
                source={require('./img/logo.png')}
            />

            <Text style={styles.label}>Usuário</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
            >
                <Text style={styles.buttonTextB}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.entrada}>
            <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
                <Text style={styles.input2}>Esqueceu a senha</Text>
             </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.input2}>Primeiro acesso</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.imglogo}>
                <Image
                    source={require('./img/Lgoogle.png')}
                />
                <Image
                    source={require('./img/Lfacebook.png')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AADDDD',
        paddingHorizontal: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 50,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#D9D9D9',
    },
    label: {
        right: 110,
        marginBottom: 5,
        color: '#000',
        textAlign: 'justify',
        fontWeight: 'bold',
    },
    button: {
        width: '50%',
        height: 50,
        backgroundColor: '#AADDDD',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        marginTop: 20
    },
    inputContainer: {
        position: 'absolute',
        top: 230,
        height: '100%',
        width: '110%',
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    input2: {
        width: '45%',
        height: 22,
        marginBottom: 8,
        paddingHorizontal: 9,
        borderBottomWidth: 1,
        borderColor: '#000000',
        color: '#000000',
        fontWeight: 'bold',
        padding: 0
    },
    entrada: {
        margin: 0,
        height: 0,
        top: 50,
    },
    imglogo: {
        flexDirection: 'row',
        top: 140,
        gap: 16,
    },
    buttonTextB: {
        color: '#084D75',
        fontSize: 20,
        fontWeight: 'bold',

    }
});

export default LoginScreen;
