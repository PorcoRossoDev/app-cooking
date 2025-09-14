import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from "../../contains";

const screen = Dimensions.get('window')
const GAP_CONTAINER = 50
const GAP_ITEM = 20
const ITEM = (screen.width-(GAP_CONTAINER+GAP_ITEM))/2

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
    }
})

export default styles