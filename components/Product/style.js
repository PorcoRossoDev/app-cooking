import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const screen = Dimensions.get('window')
const GAP_CONTAINER = 50
const GAP_ITEM = 20
const ITEM = (screen.width-(GAP_CONTAINER+GAP_ITEM))/2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 40
    },
    boxLeft: {
        width: '80%',
        paddingRight: 10
    },
    boxRight: {
        width: '20%',
        paddingLeft: 10
    },
    image: {
        width: '100%',
        height: 140
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: COLORS.primary
    }
})

export default styles