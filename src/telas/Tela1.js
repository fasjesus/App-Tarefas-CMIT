import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Tela1 = ({ adicionarTarefa }) => {
  const [categorias, setCategorias] = useState({
    pessoa: false,
    trabalho: false,
    tarefasDeCasa: false,
    faculdade: false,
    academia: false,
    dailys: false,
  });

  const [dadosTarefa, setDadosTarefa] = useState({
    nome: '',
    descricao: '',
    prazo: '',
  });

  const navigation = useNavigation();

  const handleCategoriaPress = (categoria) => {
    setCategorias((prevCategorias) => ({
      ...prevCategorias,
      [categoria]: !prevCategorias[categoria],
    }));
  };

  const handleConcluidoPress = async () => {
    const categoriaSelecionada = Object.keys(categorias).find((categoria) => categorias[categoria]);
  
    const tarefa = {
      nome: dadosTarefa.nome,
      descricao: dadosTarefa.descricao,
      prazo: dadosTarefa.prazo,
      categoria: categoriaSelecionada,
    };

    try {
      await AsyncStorage.setItem('tarefa', JSON.stringify(tarefa));

      adicionarTarefa(tarefa);

      navigation.navigate('Tela2');
    } catch (error) {
      console.error('Erro ao salvar tarefa no AsyncStorage:', error);
    }
  };
  
  const navigateToPerfil = () => {
    navigation.navigate('TelaAccount');
  };


  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <TouchableOpacity style={[styles.botao,{backgroundColor: 'gray', borderColor: 'white', borderWidth: 1}]} onPress={navigateToPerfil}>
          <Text style={[styles.botaoTexto,{color:'white'}]}>Minha Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao,{backgroundColor: '#73C5BF'}]} >
          <Text style={[styles.botaoTexto,{color:'white'}]}>CRIAR TAREFA</Text>
        </TouchableOpacity>

        <View style={styles.retangulo}>
          <Text style={styles.textoTarefa}>Nome da tarefa:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua tarefa"
            onChangeText={(text) => setDadosTarefa({ ...dadosTarefa, nome: text })}
          />

          <Text style={styles.textoTarefa}>Descrição:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a descrição da tarefa"
            onChangeText={(text) => setDadosTarefa({ ...dadosTarefa, descricao: text })}
          />

          <Text style={styles.textoTarefa}>Prazo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a data de prazo"
            onChangeText={(text) => setDadosTarefa({ ...dadosTarefa, prazo: text })}
          />
        </View>

        <Text style={[styles.categoriasText,{color:'white'}]}>Categorias</Text>

        <TouchableOpacity
          style={[
            styles.pessoaBotao,
            categorias.pessoa ? styles.pessoaSelecionada : null,
            categorias.pessoa ? styles.botaoSelecionado : null,
          ]}
          onPress={() => handleCategoriaPress('pessoa')}
        >
          <Text style={styles.botaoTexto}>Pessoa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.trabalhoBotao,
            categorias.trabalho ? styles.trabalhoSelecionada : null,
            categorias.trabalho ? styles.botaoSelecionado : null,
          ]}
          onPress={() => handleCategoriaPress('trabalho')}
        >
          <Text style={styles.botaoTexto}>Trabalho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tarefasDeCasaBotao,
            categorias.tarefasDeCasa ? styles.tarefasDeCasaSelecionada : null,
            categorias.tarefasDeCasa ? styles.botaoSelecionado : null,
          ]}
          onPress={() => handleCategoriaPress('tarefasDeCasa')}
        >
          <Text style={styles.botaoTexto}>Casa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.faculdadeBotao,
            categorias.faculdade ? styles.faculdadeSelecionada : null,
            categorias.faculdade ? styles.botaoSelecionado : null,
          ]}
          onPress={() => handleCategoriaPress('faculdade')}
        >
          <Text style={styles.botaoTexto}>Faculdade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.academiaBotao,
            categorias.academia ? styles.academiaSelecionada : null,
            categorias.academia ? styles.botaoSelecionado : null,
          ]}
          onPress={() => handleCategoriaPress('academia')}
        >
          <Text style={styles.botaoTexto}>Academia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.dailysBotao,
            categorias.dailys ? styles.dailysSelecionada : null,
            categorias.dailys ? styles.botaoSelecionado : null,
          ]}
          onPress={() => handleCategoriaPress('dailys')}
        >
          <Text style={styles.botaoTexto}>Dailys</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Concluido} onPress={handleConcluidoPress}>
          <Text style={[styles.botaoTexto,{color : 'white'}]}>Concluído</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  botaoSelecionado: {
    backgroundColor: '#73C5BF',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'flex-start',
  },
  background: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  categoriasText: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 75,
    height: 17,
    flexShrink: 0,
    color: 'black',
    marginTop: 48,
    lineHeight: 15,
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
  botaoTexto: {
    color: '#73C5BF', //#73C5BF
    fontSize: 18,
    fontWeight: 'bold',

  },
  retangulo: {
    width: 309,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.86)',
    marginTop: 20,
    paddingHorizontal: 21,
    paddingTop: 14,
    paddingRight: 21,
    paddingBottom: 14,
  },
  textoTarefa: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  pessoaBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: -150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  trabalhoBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: -150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  tarefasDeCasaBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: -150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  faculdadeBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: -190,
    marginLeft: 190,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  academiaBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  dailysBotao: {
    width: 130,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginTop: 20,
    marginLeft: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  Concluido: {
    width: 140,
    height: 48,
    flexShrink: 0,
    backgroundColor: '#6BC785',
    borderRadius: 30,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
});


export default Tela1;