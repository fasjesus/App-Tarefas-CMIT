import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const YourComponent = () => {
  const navigation = useNavigation();

  const handleVerTarefasPress = () => {
    navigation.navigate('Tela2');
  };

  const handleAdicionarTarefasPress = () => {
    navigation.navigate('Tela1'); 
  };

  return (
    <View style={styles.container}>
      {/* Avatar do usuário */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../assets/icons/perfill.jpg')}
        /> 
      </View>
      <Text style={styles.userName}>Miau</Text>
      <View style={styles.row}>
        {/* Card 1 */}
        <View style={[styles.card, { backgroundColor: '#73C5BF' }]}>
          {/* Conteúdo do Card 1 */}
          <Text style={styles.cardText}>10</Text>
          <Text style={styles.cardTextSub}>Cadastradas</Text>
          <Text style={styles.cardTextSubSub}>10 tarefas hoje</Text>
        </View>

        {/* Card 2 */}
        <View style={[styles.card, { backgroundColor: '#E37387' }]}>
          {/* Conteúdo do Card 2 */}
          <Text style={styles.cardText}>10%</Text>
          <Text style={styles.cardTextSub}>Pendentes</Text>
          <Text style={styles.cardTextSubSub}>01 tarefa pendente</Text>
        </View>
      </View>

      <View style={styles.row}>
        {/* Card 3 */}
        <View style={[styles.card, { backgroundColor: '#918CCF' }]}>
          {/* Conteúdo do Card 3 */}
            <Text style={styles.cardText}>20%</Text>
            <Text style={styles.cardTextSub}>Em Aberto</Text>
            <Text style={styles.cardTextSubSub}>02 tarefas em aberto</Text>
        </View>

        {/* Card 4 */}
        <View style={[styles.card, { backgroundColor: '#6BC785' }]}>
          {/* Conteúdo do Card 4 */}
          <Text style={styles.cardText}>70%</Text>
          <Text style={styles.cardTextSub}>Concluídas</Text>
          <Text style={styles.cardTextSubSub}>07 tarefas concluídas</Text>
        </View>
      </View>
      
      {/* Botão "Ver Tarefas" */}
      <TouchableOpacity style={styles.button} onPress={handleVerTarefasPress}>
        <Text style={styles.buttonText}>Ver Tarefas</Text>
      </TouchableOpacity>

      {/* Botão "Adicionar Tarefas" */}
      <TouchableOpacity style={styles.buttonAdicionar} onPress={handleAdicionarTarefasPress}>
        <Text style={styles.buttonText}> + Adicionar Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 16,
  },

  avatar: {
    width: 123,
    height: 122,
    borderRadius: 25,
    marginBottom: 10,
    top:90,
    marginLeft: 120,
    borderRadius: 123, 
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    top: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: 150
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  card: {
    display: 'inline-flex',
    height: 179,
    padding: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 13,
    borderRadius: 10,
    flexShrink: 0,
    flex: 1,
    top:270,
    marginLeft: 5,
    marginRight: 5,
  },
  cardText: {
    color: '#FFFDFC',
    fontSize: 32,
    fontWeight: '900',
    lineHeight: 40,
    marginTop: 40,
  },
  cardTextSub: {
    color: '#FFFDFC',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    marginTop: 15,
  },
  cardTextSubSub: {
    color: '#FFFDFC',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 15,
    marginTop: 1,
  },
  button: {
    width: 150,
    height: 35,
    transform: [{ rotate: '0.298deg' }],
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginLeft: 10,
    marginTop: -200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonAdicionar: {
    width: 160,
    height: 35,
    transform: [{ rotate: '0.298deg' }],
    flexShrink: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginLeft: 180,
    marginRight: 2,
    marginTop: -35, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: 'black',
  },
});

export default YourComponent;