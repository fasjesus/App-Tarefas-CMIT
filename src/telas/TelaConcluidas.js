import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Importe o ícone do Ionicons

const TelaConcluidas = () => {
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getTarefasConcluidas = async () => {
      try {
        const tarefasConcluidasData = await AsyncStorage.getItem('tarefasConcluidas');
        if (tarefasConcluidasData) {
          setTarefasConcluidas(JSON.parse(tarefasConcluidasData));
        }
      } catch (error) {
        console.error('Erro ao obter tarefas concluídas do AsyncStorage:', error);
      }
    };

    getTarefasConcluidas();
  }, []);

  const handleVoltarPress = () => {
    navigation.goBack();
  };

  const handleExcluirTarefa = async (index) => {
    const novasConcluidas = [...tarefasConcluidas];
    novasConcluidas.splice(index, 1);

    setTarefasConcluidas(novasConcluidas);

    // Atualize o AsyncStorage com a nova lista de tarefas concluídas
    await AsyncStorage.setItem('tarefasConcluidas', JSON.stringify(novasConcluidas));
  };

  const navigateToTelaDescricao = async (tarefa) => {
    try {
      // Salvando os dados da tarefa no AsyncStorage antes de navegar para TelaDescricao
      await AsyncStorage.setItem('tarefaSelecionada', JSON.stringify(tarefa));

      // Navegando para a TelaDescricao
      navigation.navigate('TelaDescricao');
    } catch (error) {
      console.error('Erro ao salvar tarefa selecionada no AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.botao, {backgroundColor: "#6BC785"}]} onPress={handleVoltarPress}>
        <Text style={styles.botaoTexto}>Concluídas</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.tarefasContainer}>
        {tarefasConcluidas.map((tarefa, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigateToTelaDescricao(tarefa)}
            style={styles.tarefaContainer}
          >
            <View style={styles.checkboxContainer}>
              <Ionicons name="checkmark-circle" size={40} color="#6BC785" />
              
            </View>
            <View style={styles.tarefaBox}>
              <Text style={styles.tarefaTexto}>
                {tarefa && tarefa.nome ? tarefa.nome : 'Nome da Tarefa Indisponível'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handleExcluirTarefa(index)}
              style={styles.excluirBotao}
            >
            <Text style={styles.excluirTexto}>Excluir</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  tarefasContainer: {
    alignItems: 'center',
  },
  tarefaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    width: 394,
    height: 61,
    marginTop: 5,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  tarefaBox: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F6F6F1',
    borderRadius: 8,
    padding: 10,

  },
  tarefaTexto: {
    fontSize: 16,
  },
  excluirBotao: {
    backgroundColor: '#E37387',
    padding: 10,
    borderRadius: 5,
    marginRight: 25,
  },
  excluirTexto: {
    color: 'white',
  },
  
  botao: {
    width: 309,
    height: 60,
    borderRadius: 15,
    backgroundColor: '#73C5BF',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 30,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaConcluidas;