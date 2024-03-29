// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './src/telas/Tela1';
import Tela2 from './src/telas/Tela2';
import TelaAccount from './src/telas/TelaAccount';
import TelaDescricao from './src/telas/TelaDescricao';
import TelaConcluidas from './src/telas/TelaConcluidas';  

const Stack = createStackNavigator();

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tela1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tela1" component={() => <Tela1 adicionarTarefa={adicionarTarefa} />} />
        <Stack.Screen name="Tela2" component={() => <Tela2 tarefas={tarefas} setTarefas={setTarefas} />} />
        <Stack.Screen name="TelaAccount" component={TelaAccount} />
        <Stack.Screen name="TelaDescricao" component={TelaDescricao} />
        <Stack.Screen
          name="TelaConcluidas"
          component={TelaConcluidas}
          options={{
            headerShown: false,
  }}
/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;