import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const screen = Dimensions.get('window')
const GAP_CONTAINER = 50
const GAP_ITEM = 20
const ITEM = (screen.width-(GAP_CONTAINER+GAP_ITEM))/2

const styles = StyleSheet.create({
    actionBtn: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        fontSize: 16,
        marginLeft: 5,
        fontWeight: 'bold',
    }
})

export default styles