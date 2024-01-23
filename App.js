import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import TelaAccount from './src/telas/TelaAccount';

const Stack = createStackNavigator();

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (nome) => {
    setTarefas([...tarefas, { nome }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela1" component={() => <Tela1 adicionarTarefa={adicionarTarefa} />} />
        <Stack.Screen name="Tela2" component={() => <Tela2 tarefas={tarefas} setTarefas={setTarefas} />} />
        <Stack.Screen name="TelaAccount" component={TelaAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;