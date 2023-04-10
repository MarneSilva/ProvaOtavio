import styles from "./style";
import {View, Text, Image, Button} from 'react-native';

export default function Troca(props) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Item:</Text>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.troca.imagem
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>{props.troca.nome}</Text>
                <Text style={styles.descricao}>{props.troca.descricao}</Text>
                <View style={styles.fixToText}>     
                    <Button title='Trocar' color='black' />
                    <Button title='Vender' color='darkblue' />
                </View>
            </View>
        </View>
    )
}