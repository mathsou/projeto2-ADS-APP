import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    title:{
        height: '10%',
        width: '100%',
        fontSize: 18
    },
    container: {
        height: '90%',
        paddingTop: 50,
        paddingRight: 20,
    },
    order: {
        height: 130,
        marginLeft: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginLeft: 40,
    },
    textAddress: {
        fontSize: 18,
        color: '#656565',
        textAlign: 'right',
    },
    date: {
        textAlign: 'right',
        fontSize: 18,
        color: '#656565',
    },
    delivery: {
        textAlign: 'right',
        fontSize: 18,
        color: '#656565',
    },
    icon: {
        marginLeft: 10,
    },
    delete: {
        position: 'relative',
        bottom: 20,
    }
})