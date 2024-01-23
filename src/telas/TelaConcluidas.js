// TelaConcluidas.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const TelaConcluidas = ({ tarefas, tarefasConcluidas }) => {
  // Filtrar tarefas concluídas
  const tarefasConcluidasList = tarefas.filter((_, index) => tarefasConcluidas[index]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tarefas Concluídas</Text>
      <ScrollView contentContainerStyle={styles.tarefasContainer}>
        {tarefasConcluidasList.map((tarefa, index) => (
          <View key={index} style={styles.tarefaContainer}>
            <Text style={styles.tarefaTexto}>{tarefa.nome}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0F0E8',
    paddingTop: 30,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tarefasContainer: {
    alignItems: 'center',
  },
  tarefaContainer: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tarefaTexto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TelaConcluidas;