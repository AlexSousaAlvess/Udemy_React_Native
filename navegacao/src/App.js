import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import TextoCentral from './components/TextoCentral'
import TelaA from './views/TelaA';
import TelaB from './views/TelaB';
import TelaC from './views/TelaC';

// import { Container } from './styles';

const App = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
        <TelaA/>
        <TelaB/>
        <TelaC/>
    </SafeAreaView>
  );
}

export default App;