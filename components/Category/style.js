import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    item: {
        width: 'full',
    },
    boxImage: {
        height: 145,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        overflow: 'hidden'
    },
    text: {
        textAlign: 'center',
        marginTop: 14,
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.primary
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 34,
        marginTop: 20,
        width: '100%'
    },
    icon: {
        backgroundColor: 'red'
    }
})

export default styles