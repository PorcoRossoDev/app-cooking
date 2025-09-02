import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const screen = Dimensions.get('window')
const GAP_CONTAINER = 50
const GAP_ITEM = 20
const ITEM = (screen.width-(GAP_CONTAINER+GAP_ITEM))/2

const styles = StyleSheet.create({
    item: {
        width: ITEM,
        marginBottom: 24
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: 10,
        height: 120
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 13,
        color: COLORS.primary
    }
})

export default styles