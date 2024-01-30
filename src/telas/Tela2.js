import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Tela2 = ({ tarefas, setTarefas }) => {
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Recupere as tarefas concluídas do AsyncStorage ao carregar a tela
    const recuperarTarefa = async () => {
      try {
        const tarefasConcluidasData = await AsyncStorage.getItem('tarefasConcluidas');
        if (tarefasConcluidasData) {
          setTarefasConcluidas(JSON.parse(tarefasConcluidasData));
        }
      } catch (error) {
        console.error('Erro ao obter tarefas concluídas do AsyncStorage:', error);
      }
    };

    recuperarTarefa();
  }, []);

  const toggleConcluida = async (index) => {
    const tarefaConcluida = tarefas[index];

    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);

    const novasConcluidas = [...tarefasConcluidas, tarefaConcluida];
    setTarefasConcluidas(novasConcluidas);

    await AsyncStorage.setItem('tarefas', JSON.stringify(novasTarefas));
    await AsyncStorage.setItem('tarefasConcluidas', JSON.stringify(novasConcluidas));
  };


  
  const handleExcluirTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    
    // Atualize o estado local
    setTarefas(novasTarefas);

    setTarefasConcluidas((prevConcluidas) => {
      const novasConcluidas = [...prevConcluidas];
      novasConcluidas.splice(index, 1);
      return novasConcluidas;
    });
  };

  const navigateToTela1 = () => {
    navigation.navigate('Tela1');
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
      <View style={styles.background}>
        <TouchableOpacity style={styles.botao} onPress={navigateToTela1}>
          <Text style={styles.botaoTexto}>TAREFAS</Text>
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.tarefasContainer}>
          {tarefas.map((tarefa, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigateToTelaDescricao(tarefa)}
              style={styles.tarefaContainer}
            >
              <CheckBox
                checked={false} // Inicializando como desativada
                onPress={() => toggleConcluida(index)}
                containerStyle={styles.checkboxContainer}
              />
              <View style={styles.tarefaBox}>
                <Text style={styles.tarefaTexto}>{tarefa.nome}</Text>
              </View>
              <TouchableOpacity onPress={() => handleExcluirTarefa(index)} style={styles.excluirBotao}>
                <Text style={styles.excluirTexto}>Excluir</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <TouchableOpacity onPress={navigateToTela1} style={styles.botaoAdicionar}>
          <Text style={styles.botaoAdicionarTexto}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 35,
  },
  background: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarefaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: 394,
    height: 61,
    marginTop: 14,
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
  botaoAdicionar: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6BC785',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  botaoAdicionarTexto: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Tela2;