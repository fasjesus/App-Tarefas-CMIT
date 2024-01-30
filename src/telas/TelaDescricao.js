import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const TelaDescricao = () => {
  const [tarefa, setTarefa] = useState({});
  const navigation = useNavigation();

  useEffect(() => {
    const carregarTarefa = async () => {
      try {
        // Recuperar os dados da tarefa do AsyncStorage
        const tarefaJson = await AsyncStorage.getItem('tarefaSelecionada');
        
        if (tarefaJson) {
          const tarefaRecuperada = JSON.parse(tarefaJson);
          setTarefa(tarefaRecuperada);
        }
      } catch (error) {
        console.error('Erro ao recuperar tarefa do AsyncStorage:', error);
      } finally {
        setIsLoading(false);
      }
    };

    carregarTarefa();
  }, []);

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Descrição</Text>
      </TouchableOpacity>
        
      <View style={styles.descricaoContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Nome da Tarefa:</Text>
          <View style={styles.nomeBox}>
            <Text style={styles.valor}>{tarefa.nome}</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Descrição da Tarefa:</Text>
          <View style={styles.descricaoBox}>
            <Text style={styles.valor}>{tarefa.descricao}</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Prazo:</Text>
          <View style={styles.prazoBox}>
            <Text style={styles.valor}>{tarefa.prazo}</Text>
          </View>
        </View>

        <View style={styles.itemContainer}>
          <Text style={styles.rotulo}>Categoria:</Text>
          <View style={styles.categoriaBox}>
            <Text style={[styles.valor, {color: '#73C5BF', textAlign: 'center', fontWeight: 'bold'}]}>{tarefa.categoria}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.voltarBotao} onPress={handleVoltarPress}>
          <Text style={styles.voltarTexto}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      paddingTop: 30,
      alignItems: 'center',
    },
    botao: {
      width: '80%',
      height: 50,
      borderRadius: 15,
      backgroundColor: '#73C5BF',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 4,
      marginTop: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    botaoTexto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
    descricaoContainer: {
      width: '80%',
      alignItems: 'flex-start',
      marginTop: 20,
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    itemContainer: {
      marginBottom: 20,
    },
    rotulo: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'white',
    },
    nomeBox: {
      width: 300,
      height: 50,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#73C5BF',
      backgroundColor: '#FFF',
      padding: 10,
      marginBottom: 10,
    },
    descricaoBox: {
      width: 300,
      height: 197,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#73C5BF',
      backgroundColor: '#FFF',
      padding: 10,
      marginBottom: 10,
      marginLeft: 1,
      marginRight: 100,
    },
    prazoBox: {
      width: 300,
      height: 50,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#73C5BF',
      backgroundColor: '#FFF',
      padding: 10,
    },
    categoriaBox: {
      width: 150,
      height: 50,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: '#73C5BF',
      backgroundColor: '#FFF',
      padding: 10,
      marginBottom: 10,
    },
    valor: {
      fontSize: 18,
      fontWeight: '100',
    },
    categoria: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    voltarBotao: {
      width: 150,
      height: 50,
      borderRadius: 15,
      backgroundColor: '#73C5BF',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginLeft: 80,
    },
    voltarTexto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
  });
  
  export default TelaDescricao;