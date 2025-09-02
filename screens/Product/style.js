import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const background = require('../../assets/background.jpg')

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxTop: {
        height: 215,
        position: 'relative'
    },
    imageTop: {
        height: '100%'
    },
    action: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 999,
        width: '100%'
    },
    icon: {
        backgroundColor: COLORS.second,
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconLeft: {
        borderTopRightRadius: 30
    },
    iconRight: {
        borderTopLeftRadius: 30
    },
    contentBox: {
        paddingHorizontal:25,
        paddingVertical: 25,
        opacity: 40
    },
    textSize: {
        fontSize: 14
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.primary
    },
    descMiddle: {
        marginTop: 57
    },
    descBottom: {
        marginTop: 37
    },
    content: {
        backgroundColor: COLORS.second,
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    borderBox: {
        backgroundColor: COLORS.second,
        width: 'auto',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 11,
        paddingHorizontal: 36,
        alignSelf: 'center'
    },
    textJustify: {
        textAlign: 'justify'
    },
    flexBox: {
        flexDirection: 'column',
        justifyContent: 'center'
    }

})
    
export default styles