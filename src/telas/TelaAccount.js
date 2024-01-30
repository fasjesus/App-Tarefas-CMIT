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

  const handleTarefasAbertasPress = () => {
    navigation.navigate('Tela2');
  };

  const handleTarefasConcluidasPress = () => {
    navigation.navigate('TelaConcluidas');
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../assets/icons/perfill.jpg')}
        />
      </View>
      <Text style={styles.userName}>Miau</Text>

      <View style={styles.colunm}>
        {/* Card 1 */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#73C5BF' }]}
          onPress={handleVerTarefasPress}
        >
          <Text style={styles.cardText}>Ver Tarefas</Text>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#E37387' }]}
          onPress={handleAdicionarTarefasPress}
        >
          <Text style={styles.cardText}>Adicionar Tarefas</Text>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#918CCF' }]}
          onPress={handleTarefasAbertasPress}
        >
          <Text style={styles.cardText}>Em Aberto</Text>
        </TouchableOpacity>

        {/* Card 4 */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#6BC785' }]}
          onPress={handleTarefasConcluidasPress}
        >
          <Text style={styles.cardText}>Concluídas</Text>
        </TouchableOpacity>
      </View>
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
    top: 90,
    marginLeft: 120,
    borderRadius: 123,
  },
  userName: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    top: 100,
    marginLeft: 150,
  },
  colunm: {
    flexDirection: 'colunm',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 15,
  },
  card: {
    width: 309,
    height: 60,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 4 },
    top: 170,
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10,
    marginTop: 9,
    margintLeft: 20,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#FFFDFC',
    fontSize: 18,
    fontWeight: '600',
  },
  cardTextSub: {
    color: '#FFFDFC',
    fontSize: 16,
    fontWeight: '600',
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