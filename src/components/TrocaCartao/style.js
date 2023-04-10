import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: '5px',
        borderColor: 'white',
        padding: '10px',
        width: '98%',
        backgroundColor: '#094C64',
        marginBottom: '10px'
    },
    img: {
        borderWidth: '5px',
        borderColor: 'white',
        width: '100%',
        height: '100%'
    },
    viewImg: {
        height: '100%',
        width: '35%',
        marginRight: '10px'
    },
    viewData: {
        height: '25%',
        width: '50%'
    },
    nome: {
        fontSize: '25px',
        fontWeight: 'bold',
        marginBottom: '15px'
    },
    descricao: {
        fontSize: '18px',
        marginBottom: '15px',
        marginRight: '6px'
    },
    title: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'white',
        padding: '-20px',
        width: '25%',
        marginRight: '20px',
        marginLeft: '-5px'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '10px',
        marginLeft: '5px'
    }
})

export default styles