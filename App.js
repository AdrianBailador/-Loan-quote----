import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  YellowBox,
  Button,
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import colors from './src/utils/colors';

YellowBox.ignoreWarnings(['Picker has been stracted']);

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);

  const calculate = () => {
    if(!capital) {
      console.log('Añade la cantidad que quieres solicitar');
    }else if (!interest) {
      console.log('Añade el interes de los prestamos');
    }else if(!months) {
      console.log('Selecciona los meses a pagar');
    }else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ','),
      });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <View>
        <Text>Resultado</Text>
      </View>

      <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});