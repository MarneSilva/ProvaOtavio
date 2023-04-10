import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Troca from './src/components/TrocaCartao';

export default function App() {
  const listaItens = [
    {
      nome: 'Cutelo Negro',
      descricao: 'Um machado, que no caso, é negro.',
      imagem: 'https://www.highgroundgaming.com/wp-content/uploads/2021/06/Black-Cleaver.jpg'
    },
    {
      nome: 'Death Dance',
      descricao: 'A dança da morte.',
      imagem: 'https://leagueofitems.com/images/items/256/6333.webp'
    },
    {
      nome: "Warmog's Armor",
      descricao: 'A armadura de Warmog.',
      imagem: 'https://pbs.twimg.com/media/E4-p9h-WEAcvt_u.jpg'
    }
  ]
  return (
    <View style={styles.container}>
      {listaItens.map(t => <Troca troca={t}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    flexDirection: 'column'
  }
});
