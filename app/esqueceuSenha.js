// EsqueceuSenha.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const EsqueceuSenha = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Senha</Text>
      {/* Adicione os componentes necessários para a recuperação de senha */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Estilos adicionais conforme necessário
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    // Estilos adicionais conforme necessário
  },
  // Adicione mais estilos conforme necessário
});

export default EsqueceuSenha;
