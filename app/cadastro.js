import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Importe o componente Image


const Cadastro = () => {
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

      <Image style={styles.logo} source={require('./img/logo.png')}/>

      <Text style={styles.label}>Nome Completo</Text>
      <TextInput
            style={styles.input}
            placeholder="Insira um Nome"
          />

      <Text style={styles.label}>Email</Text>
      <TextInput
            style={styles.input}
            placeholder="Insira um email válido"
          />
      <Text style={styles.label}>Telefone</Text>
      <TextInput
            style={styles.input}
            placeholder="Insira seu Telefone"
          />

          <View>
          <Text style={styles.label}>Nome Completo</Text>

          </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleLogin}
      >
        <Text style={styles.buttonTextB}>Cadastrar</Text>
      </TouchableOpacity>

        <View style={styles.entrada}>

            
            <Text style={styles.input2}>Possuo cadastro</Text>

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
  title: {
    fontSize: 24,
    marginBottom: 20,
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
    right : 110,
    marginBottom: 5,
    color: '#000',
    textAlign:'justify',
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
    marginTop: 20, // Adicionando um espaço entre o input e o botão 
    top:130,
  },
  buttonText: {
    color: '#084D75',
    fontSize: 20,
  },
  logo: {
    
    margin:0,
    padding : 0,
    width: 200, // Ajuste conforme necessário
    height: 130, // Ajuste conforme necessário
    resizeMode: 'contain', // Garante que a imagem seja dimensionada corretamente
    bottom: 140, // Adiciona espaço abaixo da imagem  
  },

  inputContainer: {
    position: 'absolute', // Define a posição absoluta para que a view não afete o layout dos outros elementos
    top: 130, // Posiciona a view no topo da tela
    height : '100%', // Altura igual à altura da tela
    width: '110%', // Largura igual à largura da tela
    backgroundColor: '#fff',
    borderRadius: 25, 
  },
  input2: {
    width: '45%',
    height: 22,
    marginBottom: 8,
    paddingHorizontal: 9,
    borderBottomWidth: 1, // Apenas a borda inferior
    borderColor: '#000000', // Cor da borda inferior
    color: '#000000',
    fontWeight: 'bold',
    padding:0
  },
   entrada:{
    margin: 0,
    height :0,
    top: 140,
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
    
  },
  input: {
    width: '95%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1, // Apenas a borda inferior
    borderColor: '#999', // Cor da borda inferior
  }
});

export default Cadastro;
