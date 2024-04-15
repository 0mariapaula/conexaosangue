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

      <View style={styles.rota} >
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput style={styles.input}placeholder="Insira um Nome"/>

          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input}placeholder="Insira um email válido"  />

          <Text style={styles.label}>Telefone</Text>
          <TextInput style={styles.input}placeholder="Insira seu Telefone"/>

          <Text style={styles.label}>Criar senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}
                            onChangeText={setPassword}
                        />    
                  <Text style={styles.label}>Confirmar senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            secureTextEntry={true}                           
                            onChangeText={setPassword}
                        /> 
      </View>

            <Text style={styles.labelS}>Tipo Sanguíneo</Text>

              <TouchableOpacity style={styles.button2}onPress={handleLogin}>
                <Text style={styles.buttonTextB}>Escolher </Text>
              </TouchableOpacity>
              <Text style={styles.a}>A+</Text>  
            
           
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
  label: {
    padding: 10,
    right : 110,
    marginBottom: 5,
    color: '#000',
    textAlign:'justify',
    fontWeight: 'bold',
  },
  labelS: {
    right : 120,
    marginBottom: 5,
    color: '#000',
    textAlign:'justify',
    fontWeight: 'bold',
    top:36,
  },
  a:{
color: '#DD3838',
fontWeight: 'bold',
bottom: 58,
left: 167,

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
    bottom:30,
  },
  button2: {
    width: '50%',
    height: 50,
    backgroundColor: '#AADDDD',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    marginTop: 20, // Adicionando um espaço entre o input e o botão 
    bottom:20,
    left: 50,
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
    bottom: -10, // Adiciona espaço abaixo da imagem  
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
    bottom: 10,
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
    marginBottom: 0,
    paddingHorizontal: 80,
    borderBottomWidth: 1, // Apenas a borda inferior
    borderColor: '#999', // Cor da borda inferior
    right: 100,
    
  },
  rota: {
    bottom: 0,
    left: 80,
  },
  
});

export default Cadastro;
