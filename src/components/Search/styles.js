import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
    },
    textInput: {
        top: Platform.select({ ios: 80, android: 60 }),
        paddingHorizontal: 10,
        height: 45,
        backgroundColor: 'white',
        marginHorizontal: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 15,
        borderWidth: 1,
        borderColor: '#DDD',
        fontSize: 20
    },
});